import portfolioData from "@/data/portfolio.json";
import React, { useState } from "react";

const Contact = () => {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
    } catch {
      setCopied("failed");
    }
    window.setTimeout(() => setCopied(null), 1800);
  };

  const channels = [
    {
      key: "email",
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      openLabel: "Email me",
    },
    {
      key: "phone",
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
      openLabel: "Call",
    },
  ];

  return (
    <section id="contact" className="section-band">
      <div className="page-shell">
        <div className="ruled-panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="section-head">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Send the work my way.</h2>
            <p className="body-copy">{contact.message}</p>
          </div>

          <div className="grid content-center gap-4">
            {channels.map((channel) => (
              <div
                key={channel.key}
                className="grid gap-3 border border-[color:var(--line-strong)] bg-[color:var(--paper)] p-5"
              >
                <span className="text-[0.72rem] font-black uppercase tracking-[0.14em] text-[color:var(--oxide)]">
                  {channel.label}
                </span>
                <span className="break-all font-heading text-xl font-black leading-tight sm:text-2xl">
                  {channel.value}
                </span>
                <div className="mt-1 flex flex-wrap gap-2.5">
                  <a href={channel.href} className="print-button px-4 py-2.5 text-[0.78rem]">
                    {channel.openLabel}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(channel.key, channel.value)}
                    className="print-button secondary px-4 py-2.5 text-[0.78rem]"
                    aria-live="polite"
                  >
                    {copied === channel.key ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              </div>
            ))}

            {copied === "failed" ? (
              <p className="text-sm font-bold text-[color:var(--oxide)]">
                Copy failed. Select the text manually.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
