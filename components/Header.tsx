
import React, { useState, useEffect } from 'react';
import { BrainCircuitIcon } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (body) {
        body.style.overflow = 'auto';
      }
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'サービス', href: '#services' },
    { name: '特長', href: '#merits' },
    { name: '導入の流れ', href: '#flow' },
    { name: '料金', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (!targetElement) return;

    if (isMenuOpen) {
      closeMenu();
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Match transition duration
    } else {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center space-x-2" onClick={handleSmoothScroll}>
              <BrainCircuitIcon className="h-8 w-8 text-cyan-600" />
              <span className="text-xl font-bold text-slate-800">AI Growth Partners</span>
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={handleSmoothScroll} className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">
                  {link.name}
                </a>
              ))}
            </nav>
            <a href="#cta" onClick={handleSmoothScroll} className="hidden md:inline-block bg-cyan-600 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              無料で相談する
            </a>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600 focus:outline-none z-50" aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}>
                {isMenuOpen ? (
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="pt-24 px-8 h-full flex flex-col">
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
                {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={handleSmoothScroll} className="text-2xl text-slate-700 hover:text-cyan-600 transition-colors font-medium">
                    {link.name}
                </a>
                ))}
            </nav>
            <div className="py-8 text-center">
                 <a href="#cta" onClick={handleSmoothScroll} className="w-full max-w-xs mx-auto inline-block bg-cyan-600 text-white font-bold py-4 px-8 rounded-full hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    無料で相談する
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;