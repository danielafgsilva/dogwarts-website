"use client";

import { useState } from "react";
import { Mail, MessageSquare, Phone, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  /** Address the message is sent to. */
  recipientEmail: string;
  submitLabel?: string;
  /**
   * Optional handler for wiring a server-side email provider later
   * (e.g. Resend / Nodemailer). When omitted, the form falls back to
   * opening the visitor's mail client via a mailto: link.
   */
  onSubmit?: (data: ContactMessage) => Promise<void> | void;
  className?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY: ContactMessage = { name: "", email: "", phone: "", message: "" };

export function ContactForm({
  recipientEmail,
  submitLabel = "Enviar mensagem",
  onSubmit,
  className,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactMessage>(EMPTY);
  const [submitting, setSubmitting] = useState(false);

  const update =
    (field: keyof ContactMessage) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const sendViaMailto = (data: ContactMessage) => {
    const subject = `Pedido de contacto — ${data.name || "Site Dogwarts"}`;
    const body = [
      `Nome: ${data.name}`,
      `Email: ${data.email}`,
      `Telefone: ${data.phone}`,
      "",
      data.message,
    ].join("\n");
    const href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        sendViaMailto(values);
      }
      setValues(EMPTY);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className ?? ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field id="name" label="Nome" icon={User}>
          <Input
            id="name"
            required
            placeholder="O seu nome"
            value={values.name}
            onChange={update("name")}
            className="pl-10"
          />
        </Field>
        <Field id="email" label="Email" icon={Mail}>
          <Input
            id="email"
            type="email"
            required
            placeholder="seu@email.com"
            value={values.email}
            onChange={update("email")}
            className="pl-10"
          />
        </Field>
      </div>

      <Field id="phone" label="Telefone" icon={Phone}>
        <Input
          id="phone"
          type="tel"
          placeholder="+351 912 345 678"
          value={values.phone}
          onChange={update("phone")}
          className="pl-10"
        />
      </Field>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem *
        </label>
        <Textarea
          id="message"
          required
          placeholder="Conte-nos como podemos ajudar..."
          value={values.message}
          onChange={update("message")}
          className="min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
        {submitting ? "A enviar..." : submitLabel}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  icon: Icon,
  children,
}: {
  id: string;
  label: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <Icon
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4"
          aria-hidden="true"
        />
        {children}
      </div>
    </div>
  );
}
