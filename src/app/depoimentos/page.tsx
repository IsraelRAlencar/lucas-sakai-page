'use client'

import { Quote, Star } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from '../components/ui/Card';

const testimonials = [
  {
    id: 1,
    name: "Maria e João Silva",
    ceremony: "Casamento",
    date: "Setembro 2023",
    content: "Lucas tornou nosso casamento ainda mais especial. Sua cerimônia foi emocionante, personalizada e tocou o coração de todos os presentes. Recomendamos de olhos fechados!",
    rating: 5,
    image: "https://images.unsplash.com/photo-806800052052-a08af7148866?w=80&h=80&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "Ana Carolina",
    ceremony: "Renovação de Votos",
    date: "Março 2024",
    content: "Após 15 anos de casamento, decidimos renovar nossos votos. Lucas criou uma cerimônia linda que nos fez reviver toda a emoção do primeiro dia. Foi perfeito!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "Pedro e Carlos",
    ceremony: "União Estável",
    date: "Janeiro 2024",
    content: "Procurávamos alguém que entendesse nossa história e nossos valores. Lucas foi incrível, criou uma cerimônia única que representou perfeitamente nosso amor.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces"
  },
  {
    id: 4,
    name: "Família Santos",
    ceremony: "Batizado",
    date: "Dezembro 2023",
    content: "O batizado da nossa filha foi lindo. Lucas conseguiu criar um momento solene e ao mesmo tempo acolhedor para toda a família. Muito profissional e carinhoso.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces"
  },
  {
    id: 5,
    name: "Claudia Rodrigues",
    ceremony: "Cerimônia de Despedida",
    date: "Fevereiro 2024",
    content: "Em um momento tão difícil, Lucas nos trouxe conforto e dignidade. Sua sensibilidade e palavras nos ajudaram a celebrar a vida do nosso querido pai.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616c5e3e18f?w=80&h=80&fit=crop&crop=faces"
  },
  {
    id: 6,
    name: "Roberto e Fernanda",
    ceremony: "Casamento",
    date: "Maio 2024",
    content: "Não conseguimos imaginar nosso casamento sem Lucas. Ele entendeu nossa visão desde o primeiro encontro e criou uma cerimônia que superou todas as expectativas!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces"
  }
];

export default function page() {
    const handleContactClick = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        } else {
        window.location.href = '/contato';
        }
    };

  return (
     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 gradient-text">
            Depoimentos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Histórias reais de quem confiou em mim para celebrar seus momentos mais especiais
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-lg font-semibold text-muted-foreground">
              4.9/5 baseado em 50+ avaliações
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-card/80 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.ceremony} • {testimonial.date}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up-delay">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
              Pronto para criar sua própria história?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como posso tornar seu momento especial ainda mais memorável
            </p>
            <button
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
