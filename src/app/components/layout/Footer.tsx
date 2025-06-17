import { Instagram, MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Lucas Sakai</h3>
            <p className="text-sm">Criando cerimônias que emocionam e conectam pessoas.</p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Navegue</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link href="/depoimentos" className="hover:text-primary transition-colors">Depoimentos</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Conecte-se</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/lucassakaicelebrant/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <MessageSquare size={24} />
              </a>
              <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Telefone">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-10 pt-8 text-center text-sm mb-12">
          <p>&copy; {new Date().getFullYear()} Lucas Sakai. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">Desenvolvido por <a href="https://israelalencar.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary">Israel Alencar</a>.</p>
        </div>
      </div>
    </footer>
  )
}
