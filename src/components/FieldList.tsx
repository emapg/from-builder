import React from 'react';
import { FormField } from '../types/form';
import { Trash2, GripVertical, Type, Mail, Phone, List, CheckSquare, Hash } from 'lucide-react';

interface FieldListProps {
  fields: FormField[];
  setFields: (fields: FormField[]) => void;
  onAddField: (type: FormField['type']) => void;
}

export default function FieldList({ fields, setFields, onAddField }: FieldListProps) {
  const removeField = (id: string) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <button
          onClick={() => onAddField('text')}
          className="p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-2"
        >
          <Type size={20} />
          Text Field
        </button>
        <button
          onClick={() => onAddField('email')}
          className="p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-2"
        >
          <Mail size={20} />
          Email Field
        </button>
        <button
          onClick={() => onAddField('phone')}
          className="p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-2"
        >
          <Phone size={20} />
          Phone Field
        </button>
        <button
          onClick={() => onAddField('select')}
          className="p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-2"
        >
          <List size={20} />
          Dropdown
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <div
            key={field.id}
            className="border rounded-lg p-4 bg-white shadow-sm flex items-start gap-4"
          >
            <div className="cursor-move text-gray-400">
              <GripVertical size={20} />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={field.label}
                onChange={(e) => updateField(field.id, { label: e.target.value })}
                className="font-medium text-gray-900 border-0 focus:ring-0 p-0 w-full"
              />
              <div className="mt-2 flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) => updateField(field.id, { required: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Required
                </label>
              </div>
            </div>
            <button
              onClick={() => removeField(field.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}