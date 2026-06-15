import json
import os
import re

home_dir = os.path.expanduser('~')
log_path = os.path.join(home_dir, '.gemini', 'antigravity-ide', 'brain', '14360ea8-042b-42f9-ae5f-71763b2c566f', '.system_generated', 'logs', 'transcript.jsonl')

print("Reading from log path:", log_path)

if not os.path.exists(log_path):
    print("Log path does not exist!")
    exit(1)

# We want to restore files in chronological order of step_index
steps = []
with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        if not line.strip():
            continue
        try:
            obj = json.loads(line)
            steps.append(obj)
        except Exception as e:
            pass

# Sort by step_index
steps.sort(key=lambda x: x.get('step_index', 0))

# Clean up path helper
def clean_path(p):
    p = p.strip('"\'')
    if p.startswith('file://'):
        p = p[7:]
    return os.path.abspath(p)

for step in steps:
    tool_calls = step.get('tool_calls')
    if not tool_calls:
        continue
    for tc in tool_calls:
        name = tc.get('name')
        args = tc.get('args', {})
        if not args:
            continue
        
        # Parse JSON string arguments if necessary
        if isinstance(args, str):
            try:
                args = json.loads(args)
            except:
                continue
                
        if name == 'write_to_file':
            target = clean_path(args.get('TargetFile', ''))
            content = args.get('CodeContent', '')
            if target and content and 'DLF-school' in target:
                # Make parent dirs
                os.makedirs(os.path.dirname(target), exist_ok=True)
                with open(target, 'w', encoding='utf-8') as out_f:
                    out_f.write(content)
                print(f"[{step.get('step_index')}] Wrote {os.path.basename(target)}")
                
        elif name == 'replace_file_content' or name == 'multi_replace_file_content':
            # For simplicity, if we run write_to_file chronologically, we will write the final versions.
            # But we can also apply replacements if needed.
            # Let's check target file.
            target = clean_path(args.get('TargetFile', ''))
            if not target or 'DLF-school' not in target:
                continue
            
            if name == 'replace_file_content':
                target_content = args.get('TargetContent', '')
                replacement = args.get('ReplacementContent', '')
                if not os.path.exists(target):
                    continue
                with open(target, 'r', encoding='utf-8') as f_in:
                    file_data = f_in.read()
                if target_content in file_data:
                    file_data = file_data.replace(target_content, replacement)
                    with open(target, 'w', encoding='utf-8') as f_out:
                        f_out.write(file_data)
                    print(f"[{step.get('step_index')}] Replaced in {os.path.basename(target)}")
            elif name == 'multi_replace_file_content':
                chunks = args.get('ReplacementChunks', [])
                if not os.path.exists(target) or not chunks:
                    continue
                with open(target, 'r', encoding='utf-8') as f_in:
                    file_data = f_in.read()
                for chunk in chunks:
                    tc_val = chunk.get('TargetContent', '')
                    rep_val = chunk.get('ReplacementContent', '')
                    if tc_val in file_data:
                        file_data = file_data.replace(tc_val, rep_val)
                with open(target, 'w', encoding='utf-8') as f_out:
                    f_out.write(file_data)
                print(f"[{step.get('step_index')}] Multi-Replaced in {os.path.basename(target)}")

print("Restoration finished!")
