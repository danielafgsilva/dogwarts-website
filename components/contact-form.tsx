"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useForm } from '@/hooks/use-form'
import { useLanguage } from '@/hooks/use-language'
import { Phone, Mail, User, MessageSquare } from 'lucide-react'

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; phone: string; message: string }) => void | Promise<void>
  className?: string
}

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const { t } = useLanguage()
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    values,
    errors,
    isSubmitting,
    isValid,
    handleSubmit,
    handleChange,
    handleBlur,
    reset,
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: async (data) => {
      try {
        await onSubmit?.(data)
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      } catch (error) {
        console.error('Form submission error:', error)
      }
    },
  })

  if (isSuccess) {
    return (
      <Card className={className}>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Mensagem Enviada!
              </h3>
              <p className="text-green-600">
                Obrigado pelo seu contacto. Responderemos em breve.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Enviar Mensagem
        </CardTitle>
        <CardDescription>
          Preencha o formulário abaixo e entraremos em contacto consigo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="name"
                  type="text"
                  placeholder="O seu nome"
                  value={values.name ?? ''}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
              </div>
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={values.email ?? ''}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefone *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="phone"
                type="tel"
                placeholder="+351 912 345 678"
                value={values.phone ?? ''}
                onChange={handleChange('phone')}
                onBlur={handleBlur('phone')}
                className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="text-sm text-red-500">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensagem *
            </label>
            <Textarea
              id="message"
              placeholder="Conte-nos como podemos ajudar..."
              value={values.message ?? ''}
              onChange={handleChange('message')}
              onBlur={handleBlur('message')}
              className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'A Enviar...' : 'Enviar Mensagem'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
