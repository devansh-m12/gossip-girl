import React from 'react';
import { MessageSquare, Twitter, FileText, History, TrendingUp } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white border-r border-gray-800">
      <nav className="p-4 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Navigation</h3>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <MessageSquare size={18} />
            <span>Chat History</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <Twitter size={18} />
            <span>Your Tweets</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            <FileText size={18} />
            <span>Leaked Info</span>
          </a>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Trending</h3>
          <div className="space-y-4 px-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <TrendingUp size={14} className="text-gray-400" />
                <span className="text-sm text-gray-400">Upper East Side</span>
              </div>
              <p className="text-sm">Latest scandal at Constance...</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <TrendingUp size={14} className="text-gray-400" />
                <span className="text-sm text-gray-400">Metropolitan</span>
              </div>
              <p className="text-sm">Who was spotted at the Met steps?</p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar