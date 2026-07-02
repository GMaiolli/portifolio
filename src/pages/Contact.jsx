import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import profile from "../data/profile.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: "", email: "", message: "" };
const initialErrors = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState("idle"); // idle | success

  function validate(values) {
    const nextErrors = { name: "", email: "", message: "" };

    if (values.name.trim().length < 2) {
      nextErrors.name = "Informe seu nome completo.";
    }

    if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = "Informe um e-mail válido.";
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setStatus("idle");
      return;
    }

    // Site estático, sem backend: o envio é feito abrindo o cliente de
    // e-mail do usuário com os dados já preenchidos. Para um envio
    // totalmente automatizado, integre um serviço como Formspree ou EmailJS.
    const subject = encodeURIComponent(`Contato via portfólio - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus("success");
    setForm(initialForm);
  }

  return (
    <>
      <SEO
        title={`Contato - ${profile.name}`}
        description={`Entre em contato com ${profile.name} por e-mail, GitHub ou LinkedIn.`}
      />

      <section className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-accent-bright">// contato</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Vamos conversar
          </h1>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            Preencha o formulário abaixo ou me encontre diretamente pelos canais ao lado.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto_1fr]">
          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-muted">
                  nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="mt-2 w-full rounded border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-accent-bright"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-accent-bright">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-muted">
                  e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="mt-2 w-full rounded border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-accent-bright"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-accent-bright">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-muted">
                  mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="mt-2 w-full resize-none rounded border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-accent-bright"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-accent-bright">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded border border-accent bg-accent-dim px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-accent-bright hover:bg-accent/20"
              >
                enviar mensagem
                <Send size={16} aria-hidden="true" />
              </button>

              <p role="status" aria-live="polite" className="text-sm text-muted">
                {status === "success" &&
                  "Formulário validado! Abrindo seu cliente de e-mail padrão..."}
              </p>
            </form>
          </Reveal>

          <div className="hidden w-px bg-border md:block" aria-hidden="true" />

          <Reveal delay={200}>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-ink"
                >
                  <Mail size={18} aria-hidden="true" />
                  <span className="font-mono text-sm">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-ink"
                >
                  <Github size={18} aria-hidden="true" />
                  <span className="font-mono text-sm">{profile.socials.github.label}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-ink"
                >
                  <Linkedin size={18} aria-hidden="true" />
                  <span className="font-mono text-sm">{profile.socials.linkedin.label}</span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
