import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface PageManagerProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function PageManager({ currentPage, totalPages, setCurrentPage }: PageManagerProps) {
  return (
    <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(totalPages + 1)}
          className="p-1 rounded-full hover:bg-gray-200"
          title="Add new page"
        >
          <Plus size={16} />
        </button>
      </div>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}