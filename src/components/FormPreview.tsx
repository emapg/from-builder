import React from 'react';
import { FormField, FormTheme } from '../types/form';

interface FormPreviewProps {
  fields: FormField[];
  theme: FormTheme;
}

export default function FormPreview({ fields, theme }: FormPreviewProps) {
  const formStyle = {
    '--primary-color': theme.primaryColor,
    '--bg-color': theme.backgroundColor,
    '--text-color': theme.textColor,
    '--border-radius': theme.borderRadius,
  } as React.CSSProperties;

  return (
    <div className="max-w-2xl mx-auto" style={formStyle}>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {fields.map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium mb-1">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {field.type === 'text' && (
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            )}
            {field.type === 'email' && (
              <input
                type="email"
                placeholder={field.placeholder}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            )}
            {field.type === 'phone' && (
              <input
                type="tel"
                placeholder={field.placeholder}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            )}
            {field.type === 'select' && (
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="">Select an option</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        {fields.length > 0 && (
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Form
          </button>
        )}
      </form>
    </div>
  );
}