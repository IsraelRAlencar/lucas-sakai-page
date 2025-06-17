'use client'

import { ArrowRight, Cake, CalendarIcon, Heart, PartyPopper, Star } from "lucide-react";
import { Button } from "./components/ui/Button";
import { Card, CardContent, CardFooter } from "./components/ui/Card";
import { useForm } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "./components/ui/Form";
import { Input } from "./components/ui/Input";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { PopoverContent } from "./components/ui/Popover";
import { Calendar } from "./components/ui/Calendar";
import { cn } from "./lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Textarea } from "./components/ui/Textarea";
import { toast } from "./components/ui/Sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(10, { message: "Por favor, insira um número de telefone válido." }),
  eventType: z.string().min(3, { message: "Por favor, descreva o tipo de evento." }),
  eventDate: z.date({
    required_error: "A data do evento é obrigatória.",
  }),
  message: z.string().min(10, {
    message: "Sua mensagem deve ter pelo menos 10 caracteres.",
  }).max(500, { message: "A mensagem não pode ter mais de 500 caracteres."}),
});

const testimonials = [
  {
    quote: "Lucas tornou nosso dia inesquecível. Sua sensibilidade e carisma criaram uma cerimônia emocionante, que tocou o coração de todos.",
    name: "Juliana & Ricardo",
    image: "https://images.unsplash.com/photo-1542327897-4141b355e20a?q=80&w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "A cerimônia foi leve, autêntica e cheia de significado. Exatamente como sonhamos! Somos muito gratos pelo seu trabalho incrível.",
    name: "Amanda & Felipe",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&fit=crop&crop=faces",
    rating: 5,
  },
];

const portfolioImages = [
  { src: "/images/portfolio-1.jpg", alt: "Celebração de casamento" },
  { src: "/images/portfolio-2.jpg", alt: "Detalhes de uma cerimônia" },
  { src: "/images/portfolio-3.jpeg", alt: "Casal em momento especial" },
  { src: "/images/portfolio-4.jpg", alt: "Cerimônia na praia" },
];

const services = [
  {
    icon: Heart,
    title: "Casamentos",
    description: "Cerimônias únicas que celebram o amor autêntico",
  },
  {
    icon: Star,
    title: "Bodas",
    description: "Renovação de votos com significado e emoção",
  },
  {
    icon: PartyPopper,
    title: "Debutantes",
    description: "Celebrações inesquecíveis para jovens que estão se tornando adultas",
  },
  {
    icon: CalendarIcon,
    title: "Ocasiões Especiais",
    description: "Momentos únicos que merecem ser celebrados",
  },
];

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form data submitted:", data);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Obrigado por entrar em contato. Retornarei em breve!",
      duration: 5000,
    });
    form.reset();
  }

  return (
      <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('/images/hero-background.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 tracking-tight">
              Celebrações que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">
                emocionam
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Criando momentos únicos e cerimônias que contam a sua história com autenticidade e leveza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/portfolio" className="flex text-white items-center gap-2">
                  Ver Cerimônias
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-white/30 text-primary hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Fazer Contato
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Sobre Lucas Sakai</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                  Histórias únicas merecem cerimônias únicas
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acredito que cada história de amor é única e merece ser contada de uma forma que reflita a essência do casal. Como celebrante, meu papel é tecer palavras que criam uma atmosfera de conexão, emoção e alegria.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transformo seu grande dia em uma memória inesquecível, onde cada palavra é escolhida especialmente para vocês.
                </p>
              </div>
              <Button 
                asChild 
                variant="link" 
                className="text-primary text-lg p-0 hover:text-accent transition-colors duration-300 font-semibold group"
              >
                <Link href="/sobre" className="flex items-center gap-2">
                  Conheça minha história
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img 
                  src="/images/lucas-sakai.jpg" 
                  alt="Lucas Sakai" 
                  className="relative rounded-full shadow-2xl w-80 h-80 object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 transform group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Serviços</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Momentos especiais para cada ocasião
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada cerimônia é única e personalizada para refletir sua história
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card/50 backdrop-blur-sm group"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Momentos capturados
            </h2>
            <p className="text-lg text-muted-foreground">
              Um vislumbre das histórias que tive a honra de celebrar
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {portfolioImages.map((img, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                Ver Galeria Completa
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              O que dizem os casais
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de momentos inesquecíveis
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 p-8 bg-muted/50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20" 
                  />
                  <div>
                    <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">Casal feliz</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Contato</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Vamos criar sua cerimônia única
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e vamos conversar sobre como transformar seu momento especial em uma memória inesquecível
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone / WhatsApp</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(11) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de Evento</FormLabel>
                            <FormControl>
                              <Input placeholder="Casamento, Bodas, Debutante..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Data do Evento</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP", { locale: ptBR })
                                    ) : (
                                      <span>Escolha uma data</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                                  initialFocus
                                  locale={ptBR}
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sua Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Conte-me um pouco sobre o que você imagina para a sua cerimônia..."
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full rounded-full transform hover:scale-105 transition-all duration-300">
                      Enviar Mensagem
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
