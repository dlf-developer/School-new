import React, { useState, useEffect } from 'react'
import { useSiteData } from '../../hooks/useSiteData'
import FieldEditor from '../components/FieldEditor'
import CardRepeater from '../components/CardRepeater'
import ImageUrlPicker from '../components/ImageUrlPicker'
import SaveBar from '../components/SaveBar'
import { School, Settings, Sparkles, HelpCircle, BookOpen, Layers, CheckCircle } from 'lucide-react'

export default function SchoolsEditor() {
  const { schools, saveSchool, resetSchool } = useSiteData()
  const [selectedSchoolId, setSelectedSchoolId] = useState('dlf-sahibabad')
  const [schoolData, setSchoolData] = useState(null)
  const [activeTab, setActiveTab] = useState('general')
  const [isDirty, setIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Load school data when selected school changes or hook state updates
  useEffect(() => {
    if (schools[selectedSchoolId]) {
      setSchoolData(JSON.parse(JSON.stringify(schools[selectedSchoolId])))
      setIsDirty(false)
    }
  }, [selectedSchoolId, schools])

  if (!schoolData) return <div className="text-gray-400">Loading school database...</div>

  const handleFieldChange = (field, value) => {
    setSchoolData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleNestedFieldChange = (parent, field, value) => {
    setSchoolData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }))
    setIsDirty(true)
  }

  // Specific nested collections updating helpers
  const handleUpdateHeroStats = (updatedStats) => {
    setSchoolData(prev => ({
      ...prev,
      hero: { ...prev.hero, stats: updatedStats }
    }))
    setIsDirty(true)
  }

  const handleUpdateAdmissionsSteps = (updatedSteps) => {
    setSchoolData(prev => ({
      ...prev,
      admissions: { ...prev.admissions, steps: updatedSteps }
    }))
    setIsDirty(true)
  }

  const handleUpdateCurriculumStages = (updatedStages) => {
    setSchoolData(prev => ({
      ...prev,
      curriculum: { ...prev.curriculum, stages: updatedStages }
    }))
    setIsDirty(true)
  }

  const handleUpdateCampusImages = (updatedImages) => {
    setSchoolData(prev => ({
      ...prev,
      campus: { ...prev.campus, images: updatedImages }
    }))
    setIsDirty(true)
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      // Loop over sections to save them to our storage
      // In useSiteData.js: saveSchool(schoolId, sectionKey, data)
      // Wait! The saveSchool function in useSiteData takes (schoolId, sectionKey, data).
      // If we save the whole school object, does it expect section-by-section saves?
      // Let's check useSiteData.js saveSchoolSection implementation:
      // saveSchoolSection = (schoolId, sectionKey, data) => {
      //   existing[schoolId][sectionKey] = data
      // }
      // So yes! We can save section-by-section or let's see. Can we just pass specific sections?
      // The keys of the school object are: name, shortLocation, cbseInfo, phone, active, coverImage, theme, hero, admissions, curriculum, holistic, campus.
      // Let's call saveSchool for each top-level key of schoolData! That's very clean and works perfectly with the existing hook!
      Object.keys(schoolData).forEach(key => {
        saveSchool(selectedSchoolId, key, schoolData[key])
      })
      setIsSaving(false)
      setIsDirty(false)
    }, 500)
  }

  const handleReset = () => {
    if (confirm(`Are you sure you want to reset all parameters of ${schoolData.name} to defaults?`)) {
      // Reset all keys
      Object.keys(schoolData).forEach(key => {
        resetSchool(selectedSchoolId, key)
      })
      setIsDirty(false)
    }
  }

  const subTabs = [
    { id: 'general', label: 'General Info', icon: Settings },
    { id: 'hero', label: 'Hero Banner', icon: Sparkles },
    { id: 'admissions', label: 'Admissions Steps', icon: HelpCircle },
    { id: 'curriculum', label: 'Curriculum & Campus', icon: BookOpen },
    { id: 'holistic', label: 'Holistic & Sports', icon: Layers }
  ]

  return (
    <div className="space-y-6 pb-28">
      {/* School Picker Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-800 gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <School className="h-5 w-5 text-brand-gold" />
            Branch Schools Editor
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Configure branch-specific landing headers, local admissions criteria, campus photos, and programs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Select School Branch:</span>
          <select
            value={selectedSchoolId}
            onChange={(e) => {
              if (isDirty && !confirm('You have unsaved changes. Switching branches will discard them. Continue?')) {
                return
              }
              setSelectedSchoolId(e.target.value)
            }}
            className="bg-[#12121a] text-white border border-gray-800 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-brand-gold/60"
          >
            <option value="dlf-sahibabad">DLF Public School, Sahibabad</option>
            <option value="dlf-greater-noida">DLF World School, Greater Noida</option>
          </select>
        </div>
      </div>

      {/* Editor Sub-tab Navigation */}
      <div className="flex border-b border-gray-800 overflow-x-auto gap-2 py-1 scrollbar-none">
        {subTabs.map(tab => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all border whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-brand-gold/10 border-brand-gold/40 text-brand-gold shadow-[0_0_10px_rgba(197,155,39,0.1)]'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'
              }`}
              type="button"
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Panels */}
      <div className="space-y-6">
        {/* PANEL: General & Theme */}
        {activeTab === 'general' && (
          <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-wider border-b border-gray-800/60 pb-2">School Metadata</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FieldEditor
                label="Full School Name"
                value={schoolData.name}
                onChange={(val) => handleFieldChange('name', val)}
                placeholder="e.g. DLF Public School"
              />
              <FieldEditor
                label="Location Tag"
                value={schoolData.shortLocation}
                onChange={(val) => handleFieldChange('shortLocation', val)}
                placeholder="e.g. Sahibabad"
                description="City label used in mega menus"
              />
              <FieldEditor
                label="CBSE Affiliation Info"
                value={schoolData.cbseInfo}
                onChange={(val) => handleFieldChange('cbseInfo', val)}
                placeholder="e.g. CBSE Affiliation No. 2130384"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FieldEditor
                label="Contact Phone"
                value={schoolData.phone}
                onChange={(val) => handleFieldChange('phone', val)}
                placeholder="e.g. +91-9871034444"
              />
              <FieldEditor
                label="Status in Mega Menu"
                type="select"
                options={[
                  { label: 'Active (Show in Nav Menu)', value: 'true' },
                  { label: 'Inactive (Hide from Nav Menu)', value: 'false' }
                ]}
                value={schoolData.active?.toString()}
                onChange={(val) => handleFieldChange('active', val === 'true')}
                description="Toggle visibility in header navigation dropdowns"
              />
              <ImageUrlPicker
                label="Nav Header Hover Cover Image"
                value={schoolData.coverImage}
                onChange={(val) => handleFieldChange('coverImage', val)}
                description="Optional cover photo in header hover tab"
              />
            </div>
          </div>
        )}

        {/* PANEL: Hero Banner */}
        {activeTab === 'hero' && (
          <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-wider border-b border-gray-800/60 pb-2">Hero Section Customization</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageUrlPicker
                label="Hero Background Image"
                value={schoolData.hero?.image}
                onChange={(val) => handleNestedFieldChange('hero', 'image', val)}
                description="Banner image shown at top of school homepage"
              />
              <div className="space-y-4">
                <FieldEditor
                  label="Accolade Legacy Badge Text"
                  value={schoolData.hero?.legacy}
                  onChange={(val) => handleNestedFieldChange('hero', 'legacy', val)}
                  placeholder="e.g. 28+ Years of Educational Legacy"
                />
                <FieldEditor
                  label="Hero Text Subtitle"
                  type="textarea"
                  value={schoolData.hero?.subtitle}
                  onChange={(val) => handleNestedFieldChange('hero', 'subtitle', val)}
                  placeholder="Hero main introductory paragraph details..."
                  rows={4}
                />
              </div>
            </div>

            {/* Title Words Breakdown */}
            <div className="border-t border-gray-800/80 pt-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Title Heading Components (Three lines layout)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/30 p-4 rounded-lg border border-gray-800/60 space-y-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Line 1 Words</span>
                  <FieldEditor
                    label="Prefix Word"
                    value={schoolData.hero?.titleLine1}
                    onChange={(val) => handleNestedFieldChange('hero', 'titleLine1', val)}
                    placeholder="e.g. Sculpting"
                  />
                  <FieldEditor
                    label="Italic Word Accent"
                    value={schoolData.hero?.italicWord1}
                    onChange={(val) => handleNestedFieldChange('hero', 'italicWord1', val)}
                    placeholder="e.g. Minds"
                  />
                </div>

                <div className="bg-black/30 p-4 rounded-lg border border-gray-800/60 space-y-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Line 2 Words</span>
                  <FieldEditor
                    label="Prefix Word"
                    value={schoolData.hero?.titleLine2}
                    onChange={(val) => handleNestedFieldChange('hero', 'titleLine2', val)}
                    placeholder="e.g. Empowering"
                  />
                  <FieldEditor
                    label="Underlined Word Accent"
                    value={schoolData.hero?.underlineWord}
                    onChange={(val) => handleNestedFieldChange('hero', 'underlineWord', val)}
                    placeholder="e.g. Souls"
                  />
                </div>

                <div className="bg-black/30 p-4 rounded-lg border border-gray-800/60 space-y-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Line 3 Words</span>
                  <FieldEditor
                    label="Prefix Word"
                    value={schoolData.hero?.titleLine3}
                    onChange={(val) => handleNestedFieldChange('hero', 'titleLine3', val)}
                    placeholder="e.g. Creating"
                  />
                  <FieldEditor
                    label="Colored Vibrant Word Accent"
                    value={schoolData.hero?.vibrantWord}
                    onChange={(val) => handleNestedFieldChange('hero', 'vibrantWord', val)}
                    placeholder="e.g. Pioneers"
                  />
                </div>
              </div>
            </div>

            {/* School Hero Accolade Strip */}
            <div className="border-t border-gray-800/80 pt-6">
              <CardRepeater
                items={schoolData.hero?.stats || []}
                onUpdate={handleUpdateHeroStats}
                title="Hero Accolade Indicators (Strip)"
                itemName="Stat Item"
                newItemTemplate={{ value: '100%', label: 'Metric Indicator' }}
                renderItemForm={(item, index, updateField) => (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FieldEditor
                      label="Key Value"
                      value={item.value}
                      onChange={(val) => updateField('value', val)}
                      placeholder="e.g. Ranked #1"
                    />
                    <FieldEditor
                      label="Stat Label Description"
                      value={item.label}
                      onChange={(val) => updateField('label', val)}
                      placeholder="e.g. In Ghaziabad Board Exams"
                    />
                  </div>
                )}
              />
            </div>
          </div>
        )}

        {/* PANEL: Admissions */}
        {activeTab === 'admissions' && (
          <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-wider border-b border-gray-800/60 pb-2">Admissions Information</h3>
            
            <FieldEditor
              label="Admissions Brief Guide Statement"
              type="textarea"
              value={schoolData.admissions?.guide}
              onChange={(val) => handleNestedFieldChange('admissions', 'guide', val)}
              placeholder="Write local school admissions description statement..."
              rows={3}
            />

            <div className="border-t border-gray-800/80 pt-6">
              <CardRepeater
                items={schoolData.admissions?.steps || []}
                onUpdate={handleUpdateAdmissionsSteps}
                title="Admissions Step Guidelines"
                itemName="Admission Step"
                newItemTemplate={{ title: 'Online Enrollment Step', desc: 'Process details instruction...' }}
                renderItemForm={(item, index, updateField) => (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FieldEditor
                      label="Step Title"
                      value={item.title}
                      onChange={(val) => updateField('title', val)}
                      placeholder="e.g. Document Upload"
                      className="md:col-span-1"
                    />
                    <FieldEditor
                      label="Detailed Guidelines Instruction"
                      type="textarea"
                      value={item.desc}
                      onChange={(val) => updateField('desc', val)}
                      placeholder="Write instruction details for the parents..."
                      rows={2.5}
                      className="md:col-span-2"
                    />
                  </div>
                )}
              />
            </div>
          </div>
        )}

        {/* PANEL: Curriculum & Campus */}
        {activeTab === 'curriculum' && (
          <div className="space-y-6">
            {/* Curriculum Info */}
            <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-brand-gold uppercase tracking-wider border-b border-gray-800/60 pb-2">Curriculum Highlights</h3>
              <FieldEditor
                label="Curriculum Brief Highlights Statement"
                type="textarea"
                value={schoolData.curriculum?.info}
                onChange={(val) => handleNestedFieldChange('curriculum', 'info', val)}
                placeholder="Write curriculum description overview..."
                rows={3}
              />

              <div className="border-t border-gray-800/80 pt-6">
                <CardRepeater
                  items={schoolData.curriculum?.stages || []}
                  onUpdate={handleUpdateCurriculumStages}
                  title="Academic Stages/Classes"
                  itemName="Academic Stage"
                  newItemTemplate={{ title: 'Stage (e.g. Primary Years)', desc: 'Stage curriculum detail description...' }}
                  renderItemForm={(item, index, updateField) => (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FieldEditor
                        label="Academic Stage Label"
                        value={item.title}
                        onChange={(val) => updateField('title', val)}
                        placeholder="e.g. Middle Years (VI-VIII)"
                        className="md:col-span-1"
                      />
                      <FieldEditor
                        label="Pedagogy & Subjects Description"
                        type="textarea"
                        value={item.desc}
                        onChange={(val) => updateField('desc', val)}
                        placeholder="Describe focus, pedagogy, and projects..."
                        rows={2.5}
                        className="md:col-span-2"
                      />
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Campus details */}
            <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
              <h3 className="text-sm font-bold text-brand-gold uppercase tracking-wider border-b border-gray-800/60 pb-2">Campus Description & Tour Images</h3>
              
              <FieldEditor
                label="Campus Tour Summary Statement"
                type="textarea"
                value={schoolData.campus?.description}
                onChange={(val) => handleNestedFieldChange('campus', 'description', val)}
                placeholder="Write description summary of campus infrastructure..."
                rows={3}
              />

              <div className="border-t border-gray-800/85 pt-6">
                <CardRepeater
                  items={schoolData.campus?.images?.map((img, idx) => ({ id: `img-${idx}-${Date.now()}`, url: img })) || []}
                  onUpdate={(updatedList) => handleUpdateCampusImages(updatedList.map(item => item.url))}
                  title="Campus Infrastructure Gallery"
                  itemName="Campus Photo"
                  newItemTemplate={{ url: '/images/campus-infrastructure.jpg' }}
                  renderItemForm={(item, index, updateField) => (
                    <ImageUrlPicker
                      label="Infrastructure Photo URL"
                      value={item.url}
                      onChange={(val) => updateField('url', val)}
                      description="Enter public file path or external web image link"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {/* PANEL: Holistic */}
        {activeTab === 'holistic' && (
          <div className="bg-[#0c0c14]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-brand-gold uppercase tracking-wider border-b border-gray-800/60 pb-2">Holistic Development & Sports Wing</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FieldEditor
                label="Performing Arts Arena Description"
                type="textarea"
                value={schoolData.holistic?.performingArts}
                onChange={(val) => handleNestedFieldChange('holistic', 'performingArts', val)}
                placeholder="Describe facilities, dance, music, and theatres..."
                rows={6}
              />
              <FieldEditor
                label="Sports & Athletics Infrastructure Description"
                type="textarea"
                value={schoolData.holistic?.sports}
                onChange={(val) => handleNestedFieldChange('holistic', 'sports', val)}
                placeholder="Describe athletic arrays, football grids, skating, etc..."
                rows={6}
              />
            </div>
          </div>
        )}
      </div>

      {/* Save Bar trigger */}
      <SaveBar
        onSave={handleSave}
        onReset={handleReset}
        isDirty={isDirty}
        isSaving={isSaving}
      />
    </div>
  )
}
