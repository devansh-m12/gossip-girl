import React from 'react';
import { Bell, User, PenSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-black text-white px-6 flex items-center justify-between border-b border-gray-800">
      <div className="text-xl font-serif tracking-wider">GOSSIP GIRL</div>
      <div className="flex items-center space-x-6">
        <button className="px-4 py-2 bg-white text-black font-semibold rounded flex items-center gap-2 hover:bg-gray-100 transition-colors">
          <PenSquare size={18} />
          New Post
        </button>
        <div className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
        <User size={20} className="cursor-pointer" />
      </div>
    </header>
  );
}

export default Header