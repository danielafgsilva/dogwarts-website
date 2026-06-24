"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MessageSquare, Phone, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  submitLabel?: string;
  successMessage?: string;
  className?: string;
}

interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY: ContactMessage = { name: "", email: "", phone: "", message: "" };

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({
  submitLabel = "Enviar mensagem",
  successMessage = "Obrigado pelo seu contacto — respondemos em breve.",
  className,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactMessage>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const update =
    (field: keyof ContactMessage) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Não foi possível enviar a mensagem.");
      }
      setValues(EMPTY);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erro ao enviar.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center ${className ?? ""}`}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-lg font-serif font-semibold text-foreground">
          Mensagem enviada!
        </h3>
        <p className="text-muted-foreground mt-1">{successMessage}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className ?? ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field id="name" label="Nome" icon={User}>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="O seu nome"
            value={values.name}
            onChange={update("name")}
            className="pl-10"
          />
        </Field>
        <Field id="email" label="Email" icon={Mail}>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
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
          name="phone"
          type="tel"
          autoComplete="tel"
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
          name="message"
          required
          placeholder="Conte-nos como podemos ajudar..."
          value={values.message}
          onChange={update("message")}
          className="min-h-[120px]"
        />
      </div>

      {status === "error" && error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
        {sending ? "A enviar..." : submitLabel}
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
