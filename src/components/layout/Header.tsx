import React from 'react';
import { FormSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <FormSquare size={32} className="text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Form Builder</h1>
          <p className="mt-1 text-gray-600">Create custom forms with drag-and-drop simplicity</p>
        </div>
      </div>
    </header>
  );
}