import React from 'react'
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react'

export default function CardRepeater({
  items = [],
  onUpdate,
  renderItemForm,
  newItemTemplate = {},
  title = '',
  itemName = 'Item'
}) {
  const handleAddItem = () => {
    const newId = `${itemName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`
    const newItem = { id: newId, ...newItemTemplate }
    onUpdate([...items, newItem])
  }

  const handleDeleteItem = (indexToDelete) => {
    const updated = items.filter((_, idx) => idx !== indexToDelete)
    onUpdate(updated)
  }

  const handleMoveItem = (index, direction) => {
    if (direction === 'up' && index === 0) return
    if (direction === 'down' && index === items.length - 1) return

    const targetIndex = direction === 'up' ? index - 1 : index + 1
    const updated = [...items]
    const temp = updated[index]
    updated[index] = updated[targetIndex]
    updated[targetIndex] = temp
    onUpdate(updated)
  }

  const updateItemField = (index, field, value) => {
    const updated = items.map((item, idx) => {
      if (idx === index) {
        return { ...item, [field]: value }
      }
      return item
    })
    onUpdate(updated)
  }

  return (
    <div className="flex flex-col gap-4">
      {title && (
        <div className="flex justify-between items-center pb-2 border-b border-gray-800">
          <h3 className="text-sm font-bold text-brand-gold tracking-wide uppercase">
            {title} ({items.length})
          </h3>
          <button
            onClick={handleAddItem}
            className="flex items-center gap-1 text-xs bg-brand-gold/10 hover:bg-brand-gold/25 border border-brand-gold/40 text-brand-gold px-3 py-1.5 rounded-lg active:scale-95 transition-all font-semibold"
            type="button"
          >
            <Plus className="h-3.5 w-3.5" />
            Add {itemName}
          </button>
        </div>
      )}

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-500 border border-dashed border-gray-800 rounded-lg">
          No {itemName}s added. Click "Add {itemName}" to create one.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-[#101017]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl overflow-hidden p-4 relative group"
            >
              {/* Item Header Controls */}
              <div className="flex items-center justify-between border-b border-gray-900 pb-3 mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {itemName} #{index + 1}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleMoveItem(index, 'up')}
                    disabled={index === 0}
                    className="p-1.5 rounded text-gray-400 hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent"
                    title="Move Up"
                    type="button"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleMoveItem(index, 'down')}
                    disabled={index === items.length - 1}
                    className="p-1.5 rounded text-gray-400 hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent"
                    title="Move Down"
                    type="button"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="p-1.5 rounded text-red-400 hover:bg-red-500/10 ml-2"
                    title="Delete Item"
                    type="button"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Form Content Rendering */}
              <div className="space-y-4">
                {renderItemForm(item, index, (field, val) => updateItemField(index, field, val))}
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && !title && (
        <button
          onClick={handleAddItem}
          className="flex items-center justify-center gap-1.5 text-xs py-3 border border-dashed border-brand-gold/30 text-brand-gold hover:bg-brand-gold/5 rounded-lg active:scale-[0.98] transition-all font-semibold"
          type="button"
        >
          <Plus className="h-4 w-4" />
          Add {itemName}
        </button>
      )}
    </div>
  )
}
