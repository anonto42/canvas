import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-violet-100 to-indigo-200 flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-violet-600 rounded-full"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-violet-800 mb-2">Loading Your Content</h2>
        <p className="text-violet-600">Just a moment while we prepare everything...</p>
        
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-violet-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}