'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Shawarma Kareem Logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-tight text-ink font-heading">Shawarma Kareem</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-ink hover:text-primary transition-colors">Home</Link>
            <Link href="/menu" className="text-sm font-semibold text-ink hover:text-primary transition-colors">Menu</Link>
            <a 
              href="https://wa.me/96178979892" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              Order Now
            </a>
          </nav>

          <button 
            className="md:hidden p-2 text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-ink/5 px-5 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-ink">Home</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-ink">Menu</Link>
          <a 
            href="https://wa.me/96178979892" 
            className="bg-primary text-white px-6 py-3 rounded-xl text-center font-bold"
          >
            Order via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
