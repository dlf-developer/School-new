import json
import os

log_path = '/Users/mohd2002monish/.gemini/antigravity-ide/brain/14360ea8-042b-42f9-ae5f-71763b2c566f/.system_generated/logs/transcript.jsonl'
output_path = '/Users/mohd2002monish/Documents/GitHub/DLF-school/src/data/schoolsData.js'

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        if not line.strip():
            continue
        try:
            obj = json.loads(line)
            if 'tool_calls' in obj and obj['tool_calls']:
                for tc in obj['tool_calls']:
                    if tc.get('name') == 'write_to_file' and 'schoolsData.js' in tc.get('args', {}).get('TargetFile', ''):
                        print("Found schoolsData.js content in step:", obj.get('step_index'))
                        code = tc['args']['CodeContent']
                        # Write code to output
                        with open(output_path, 'w', encoding='utf-8') as out_f:
                            out_f.write(code)
                        print("Successfully restored schoolsData.js!")
                        exit(0)
        except Exception as e:
            pass

print("Not found in write_to_file. Let's check for replace_file_content.")
