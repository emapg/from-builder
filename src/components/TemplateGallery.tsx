import React, { useState } from 'react';

interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  fields: any[]; // Adjust to match the structure of a form's fields
}

interface TemplateGalleryProps {
  onSelectTemplate: (fields: any[]) => void;
}

const templates: Template[] = [
  {
    id: 'template-1',
    name: 'Contact Form',
    description: 'A basic contact form with name, email, and message fields.',
    thumbnail: '/images/contact-form-thumbnail.png',
    fields: [
      { id: 'name', label: 'Name', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'message', label: 'Message', type: 'textarea', required: true },
    ],
  },
  {
    id: 'template-2',
    name: 'Feedback Form',
    description: 'A form to collect user feedback.',
    thumbnail: '/images/feedback-form-thumbnail.png',
    fields: [
      { id: 'rating', label: 'Rating', type: 'number', required: true },
      { id: 'comments', label: 'Comments', type: 'textarea', required: false },
    ],
  },
  // Add more templates as needed
];

export default function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      onSelectTemplate(selectedTemplate.fields);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Template Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(template => (
          <div
            key={template.id}
            className={`border rounded-lg p-4 shadow-sm ${
              selectedTemplate?.id === template.id ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => handleSelect(template)}
          >
            <img
              src={template.thumbnail}
              alt={`${template.name} Thumbnail`}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.description}</p>
          </div>
        ))}
      </div>
      {selectedTemplate && (
        <div className="mt-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={handleUseTemplate}
          >
            Use Selected Template
          </button>
        </div>
      )}
    </div>
  );
}
