import portfolioData from "@/data/portfolio.json";
import React, { useState } from "react";

const Contact = () => {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied("copy failed");
      window.setTimeout(() => setCopied(null), 1800);
    }
  };

  return (
    <section id="contact" className="section-band">
      <div className="page-shell">
        <div className="ruled-panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title mt-3">Send the work my way.</h2>
            <p className="body-copy mt-6">{contact.message}</p>
          </div>

          <div className="grid content-center gap-4">
            <button
              type="button"
              onClick={() => copyToClipboard("email", contact.email)}
              className="group grid gap-2 border border-[color:var(--line-strong)] bg-[color:var(--paper)] p-5 text-left transition-transform duration-300 ease-out hover:-translate-y-1 hover:bg-[color:var(--oxide-soft)]"
            >
              <span className="text-[0.72rem] font-black uppercase tracking-[0.14em] text-[color:var(--oxide)]">
                Email
              </span>
              <span className="break-all font-heading text-2xl font-black leading-tight">
                {contact.email}
              </span>
              <span className="text-sm font-bold text-[color:var(--ink-muted)]">
                {copied === "email" ? "Copied email" : "Click to copy"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard("phone", contact.phone)}
              className="group grid gap-2 border border-[color:var(--line-strong)] bg-[color:var(--paper)] p-5 text-left transition-transform duration-300 ease-out hover:-translate-y-1 hover:bg-[color:var(--oxide-soft)]"
            >
              <span className="text-[0.72rem] font-black uppercase tracking-[0.14em] text-[color:var(--oxide)]">
                Phone
              </span>
              <span className="font-heading text-2xl font-black leading-tight">
                {contact.phone}
              </span>
              <span className="text-sm font-bold text-[color:var(--ink-muted)]">
                {copied === "phone" ? "Copied phone" : "Click to copy"}
              </span>
            </button>

            {copied === "copy failed" ? (
              <p className="text-sm font-bold text-[color:var(--oxide)]">
                Copy failed. Select the contact text manually.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
