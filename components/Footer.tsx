import React from 'react';
import { BrainCircuitIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <BrainCircuitIcon className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold text-white">AI Growth Partners</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} AI Growth Partners. All Rights Reserved.</p>
            <nav className="mt-2 space-x-4">
              <a href="http://sneed.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white">会社概要</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;