import React from 'react'
import { Card, CardContent } from '../components/ui/Card';
import { Award, Heart, Star, Users } from 'lucide-react';

export default function page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Sobre Mim
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Criando momentos únicos e inesquecíveis através de cerimônias personalizadas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Personal Story */}
            <div className="mb-16 animate-fade-in-up-delay">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">Minha História</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Olá! Sou Lucas Sakai, celebrante apaixonado por criar momentos únicos e significativos 
                  na vida das pessoas. Minha jornada como celebrante começou há mais de 5 anos, quando 
                  descobri meu verdadeiro propósito: conectar pessoas através de cerimônias emocionantes 
                  e personalizadas.
                </p>
                <p className="mb-6">
                  Acredito que cada casal, cada família, cada pessoa tem uma história única para contar. 
                  Meu papel é ajudar a traduzir essa história em uma cerimônia que reflita verdadeiramente 
                  quem vocês são, seus valores e seus sonhos para o futuro.
                </p>
                <p>
                  Com formação em Comunicação Social e especialização em Cerimonial, trago para cada 
                  celebração não apenas técnica, mas principalmente coração e dedicação para que seu 
                  momento especial seja exatamente como vocês sempre sonharam.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-12 text-center">Meus Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-semibold mb-4">Autenticidade</h3>
                    <p className="text-muted-foreground">
                      Cada cerimônia deve refletir a verdadeira essência do casal, 
                      sem máscaras ou formalidades desnecessárias.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-semibold mb-4">Conexão</h3>
                    <p className="text-muted-foreground">
                      Criar pontes entre as pessoas, unindo famílias e amigos 
                      em momentos de pura emoção e celebração.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-semibold mb-4">Excelência</h3>
                    <p className="text-muted-foreground">
                      Dedicação total a cada detalhe, garantindo que tudo 
                      seja perfeito no seu dia mais especial.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-semibold mb-4">Personalização</h3>
                    <p className="text-muted-foreground">
                      Cada cerimônia é única, criada especialmente para 
                      contar a história de amor de cada casal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">Experiência</h2>
              <div className="bg-muted/50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-muted-foreground">Cerimônias Realizadas</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <div className="text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Casais Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Minha Missão</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                "Transformar sonhos em realidade através de cerimônias que tocam o coração, 
                conectam almas e criam memórias que durarão para sempre. Cada palavra, 
                cada gesto, cada momento é cuidadosamente pensado para celebrar o amor 
                de forma única e inesquecível."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
