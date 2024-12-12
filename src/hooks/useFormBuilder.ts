import { useState } from 'react';
import { FormField, FormTheme, FormTemplate } from '../types/form';
import { defaultTheme } from '../utils/defaults';

export function useFormBuilder() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [theme, setTheme] = useState<FormTheme>(defaultTheme);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const addField = (type: FormField['type']) => {
    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: `New ${type} field`,
      required: false,
      placeholder: `Enter ${type}...`,
      page: currentPage,
    };
    setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const moveField = (dragIndex: number, hoverIndex: number) => {
    const newFields = [...fields];
    const dragField = newFields[dragIndex];
    newFields.splice(dragIndex, 1);
    newFields.splice(hoverIndex, 0, dragField);
    setFields(newFields);
  };

  const loadTemplate = (template: FormTemplate) => {
    setFields(template.fields);
    setTheme(template.theme);
  };

  return {
    fields,
    theme,
    currentPage,
    isDragging,
    setFields,
    setTheme,
    setCurrentPage,
    setIsDragging,
    addField,
    removeField,
    updateField,
    moveField,
    loadTemplate,
  };
}