import React from 'react';
import { FormField } from '../../types/form';
import { useFormAnimation } from '../../hooks/useFormAnimation';

interface TextFieldProps {
  field: FormField;
  onChange?: (value: string) => void;
}

export default function TextField({ field, onChange }: TextFieldProps) {
  const { animationClass } = useFormAnimation(field.type);

  return (
    <div className={`relative ${animationClass}`}>
      <input
        type="text"
        id={field.id}
        placeholder=" "
        className="peer w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent transition-all"
        onChange={(e) => onChange?.(e.target.value)}
      />
      <label
        htmlFor={field.id}
        className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
      >
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );
}