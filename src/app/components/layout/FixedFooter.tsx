import React from 'react'
import { Button } from '../ui/Button'
import { Instagram, MessageSquare } from 'lucide-react'

export default function FixedFooter() {
    const handleContactClick = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        } else {
        
        window.location.href = '/contato';
        }
    };


  return (
     <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={handleContactClick}
            size="sm"
            className="rounded-full px-6 py-2 text-sm font-semibold transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Fazer uma Celebração
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full px-6 py-2 text-sm font-semibold border-2 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <a 
              href="https://www.instagram.com/lucassakaicelebrant/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
