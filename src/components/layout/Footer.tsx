import React from 'react';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">© {new Date().getFullYear()} Form Builder. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}