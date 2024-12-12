import React, { useState } from 'react';
import { PlusCircle, Palette, Eye, Template } from 'lucide-react';
import { useFormBuilder } from '../hooks/useFormBuilder';
import FieldList from './FieldList';
import FormPreview from './FormPreview';
import ThemeCustomizer from './form/ThemeCustomizer';
import TemplateGallery from './form/TemplateGallery';
import PageManager from './PageManager';
import Toast from './ui/Toast';
import TabButton from './ui/TabButton';

export default function FormBuilder() {
  const {
    fields,
    theme,
    currentPage,
    setFields,
    setTheme,
    setCurrentPage,
    addField,
    removeField,
    updateField,
    moveField,
    loadTemplate,
  } = useFormBuilder();

  const [activeTab, setActiveTab] = useState<'fields' | 'preview' | 'theme' | 'templates'>('fields');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b">
          <TabButton
            icon={<PlusCircle size={20} />}
            label="Fields"
            active={activeTab === 'fields'}
            onClick={() => setActiveTab('fields')}
          />
          <TabButton
            icon={<Eye size={20} />}
            label="Preview"
            active={activeTab === 'preview'}
            onClick={() => setActiveTab('preview')}
          />
          <TabButton
            icon={<Palette size={20} />}
            label="Theme"
            active={activeTab === 'theme'}
            onClick={() => setActiveTab('theme')}
          />
          <TabButton
            icon={<Template size={20} />}
            label="Templates"
            active={activeTab === 'templates'}
            onClick={() => setActiveTab('templates')}
          />
        </div>

        <div className="p-6">
          {activeTab === 'fields' && (
            <>
              <PageManager
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={Math.max(...fields.map(f => f.page || 1), 1)}
              />
              <FieldList
                fields={fields.filter(f => f.page === currentPage)}
                setFields={setFields}
                onAddField={addField}
                onRemoveField={removeField}
                onUpdateField={updateField}
                onMoveField={moveField}
                showToast={showToast}
              />
            </>
          )}
          {activeTab === 'preview' && (
            <FormPreview fields={fields} theme={theme} />
          )}
          {activeTab === 'theme' && (
            <ThemeCustomizer theme={theme} setTheme={setTheme} />
          )}
          {activeTab === 'templates' && (
            <TemplateGallery onSelectTemplate={loadTemplate} />
          )}
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
