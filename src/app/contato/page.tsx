'use client'

import { Button } from '@/app/components/ui/Button'
import { Calendar } from '@/app/components/ui/Calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/ui/Form'
import { Input } from '@/app/components/ui/Input'
import { Textarea } from '@/app/components/ui/Textarea'
import { cn } from '@/app/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon, MessageSquare } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from "zod";

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

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-24 animate-fade-in-up">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Vamos conversar sobre sua cerimônia. Preencha o formulário ou entre em contato diretamente pelo WhatsApp para uma resposta mais rápida.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-center md:text-left">Envie uma mensagem</h2>
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
                            format(field.value, "PP", { locale: ptBR })
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
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Conte-me um pouco sobre o que você imagina para a sua cerimônia..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full rounded-full">Enviar Mensagem</Button>
          </form>
        </Form>
        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-serif font-semibold mb-6">Disponibilidade e Orçamento</h2>
          <p className="mb-6">Para uma resposta mais ágil, especialmente sobre datas e orçamentos, me chame no WhatsApp. Será um prazer conversar com você!</p>
          <Button size="lg" asChild className="bg-green-500 hover:bg-green-600 text-white rounded-full">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </Button>
          <p className="text-sm mt-4 text-muted-foreground">Disponibilidade sujeita a confirmação.</p>
        </div>
      </div>
    </div>
  );
}
