import { useState } from "react";
import Container from "../layout/Container";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Sind meine Daten wirklich nur lokal?",
      a: "Ja. Notes speichert alle Notizen ausschließlich auf deinem Gerät. Es gibt keine Cloud, keine Server und keine Übertragung deiner Daten nach außen.",
    },
    {
      q: "Gibt es eine Cloud oder ein Online‑Backup?",
      a: "Nein. Notes ist vollständig offline‑first. Deine Daten bleiben zu 100% lokal und unter deiner Kontrolle.",
    },
    {
      q: "Kann ich meine Notizen exportieren?",
      a: "Ja. Du kannst jede Notiz als Textdatei exportieren oder den gesamten lokalen Speicher manuell sichern.",
    },
    {
      q: "Ist die App kostenlos?",
      a: "Ja. Die aktuelle Version ist kostenlos. Eine optionale Pro‑Version mit erweiterten Funktionen ist geplant.",
    },
    {
      q: "Kommt eine mobile Version?",
      a: "Der Fokus liegt aktuell auf Windows. Mobile Versionen sind möglich, aber derzeit nicht in Entwicklung.",
    },
    {
      q: "Wie funktioniert der Light/Dark Mode?",
      a: "Notes passt sich automatisch deinem Windows‑Design an. Du kannst den Modus auch manuell in den Einstellungen anpassen.",
    },
    {
      q: "Wie sicher sind meine Daten?",
      a: "Da alles lokal gespeichert wird und nichts übertragen wird, bleiben deine Notizen vollständig privat. Du hast die volle Kontrolle.",
    },
    {
      q: "In welchen Sprachen ist Notes verfügbar?",
      a: "Notes ist vollständig auf Deutsch und Englisch lokalisiert. Weitere Sprachen können später folgen.",
    },
  ];

  return (
    <section id="faq" className="py-18">
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Häufige Fragen
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <span className="font-medium text-gray-900">{q}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        className={`
          px-6 overflow-hidden transition-all duration-300 
          ${open ? "max-h-40 py-2" : "max-h-0 py-0"}
        `}
      >
        <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
