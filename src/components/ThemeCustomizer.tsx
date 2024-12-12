import React from 'react';
import { FormTheme } from '../types/form';

interface ThemeCustomizerProps {
  theme: FormTheme;
  setTheme: (theme: FormTheme) => void;
}

export default function ThemeCustomizer({ theme, setTheme }: ThemeCustomizerProps) {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Primary Color
        </label>
        <input
          type="color"
          value={theme.primaryColor}
          onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
          className="w-full h-10 rounded-md cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Background Color
        </label>
        <input
          type="color"
          value={theme.backgroundColor}
          onChange={(e) => setTheme({ ...theme, backgroundColor: e.target.value })}
          className="w-full h-10 rounded-md cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Text Color
        </label>
        <input
          type="color"
          value={theme.textColor}
          onChange={(e) => setTheme({ ...theme, textColor: e.target.value })}
          className="w-full h-10 rounded-md cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Border Radius
        </label>
        <input
          type="range"
          min="0"
          max="20"
          value={parseInt(theme.borderRadius)}
          onChange={(e) => setTheme({ ...theme, borderRadius: `${e.target.value}px` })}
          className="w-full"
        />
      </div>
    </div>
  );
}