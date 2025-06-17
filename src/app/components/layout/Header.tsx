'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import NavLink from '../ui/NavLink';
import { ThemeButton } from '../ui/ThemeButton'

const navLinks = [
  { title: 'Início', path: '/' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Depoimentos', path: '/depoimentos' },
];


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeLinkClass = 'text-white border-b-2 border-white';
    const inactiveLinkClass = 'border-b-2 text-foreground border-transparent hover:text-white transition-colors duration-300';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-md' : 'bg-primary'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-serif font-bold text-foreground hover:text-white transition-colors duration-300">
          Lucas Sakai
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              href={link.path}
              activeClassName={`${activeLinkClass} font-sans font-medium pb-1`}
              inactiveClassName={`${inactiveLinkClass} font-sans font-medium pb-1`}
            >
              {link.title}
            </NavLink>
          ))}
          <Button asChild className="rounded-full bg-background hover:bg-accent hover:text-white dark:bg-accent transition-colors duration-300">
            <Link href="/contato">Contato</Link>
          </Button>
          <ThemeButton />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeButton />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg absolute top-0 left-0 w-full h-screen animate-fade-in">
          <div className="container mx-auto p-4 flex justify-between items-center">
             <Link href="/" className="text-2xl font-serif font-bold text-foreground" onClick={() => setIsMenuOpen(false)}>
              Lucas Sakai
            </Link>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-8 mt-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                activeClassName="text-primary text-3xl font-serif"
                inactiveClassName="text-foreground text-3xl font-serif"
              >
                {link.title}
              </NavLink>
            ))}
            <Button asChild size="lg" className="mt-8 rounded-full text-lg">
              <Link href="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
