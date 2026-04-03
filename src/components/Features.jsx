import Container from "../layout/Container";
import { Star, CircleCheck } from "lucide-react";

export default function Features() {
  return (
    <section id="price" className="py-20 bg-white">
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Features
        </h2>
        {/* Diesen Abschnitt zentrieren */}
        <div className="w-fit mx-auto">
          <div className="p-10 rounded-2xl border border-gray-200 shadow-sm bg-gray-50">
            <ul className="space-y-4 text-gray-700 mb-10">
              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Offline First</span> – Notizen
                (alles bleibt lokal)
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Privacy‑First</span> – keine Cloud,
                kein Tracking, keine Accounts
              </li>
              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">DSGVO‑konform</span> – vollständige
                Datenkontrolle
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Zentrale lokale Datenbank</span> –
                ultraschnell & robust
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Automatisches Speichern</span> jeder
                Änderung
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Kategorien & Volltextsuche</span> –
                alles sofort finden
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Light & Dark Mode</span> –
                automatisch oder manuell
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Deutsch & Englisch</span> –
                vollständige Lokalisierung
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Drag & Drop</span> für Notizen und
                Kategorien
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Minimalistisches Windows‑UI</span> –
                klar, schnell, fokussiert
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Sofort‑Start</span> – App öffnet in
                Millisekunden
              </li>

              <li className="flex items-center">
                <CircleCheck size={18} className="mr-1" color="#9c9c9c" />
                <span className="font-bold">Keine Abhängigkeiten</span> – läuft
                komplett ohne Internet
              </li>
            </ul>

            <a
              rel="noopener noreferrer"
              href="https://github.com/fortyninelabs/notes/releases/download/v1.0.0/Notes-Setup-1.0.0.exe"
              className="
        relative flex items-center gap-3 justify-center
        px-8 py-4 rounded-full text-lg font-semibold text-white
        bg-linear-to-b from-[#6EB6FF] to-[#1E7BFF]
        shadow-[0_10px_25px_rgba(30,123,255,0.35)]
        hover:shadow-[0_14px_32px_rgba(30,123,255,0.45)]
        hover:brightness-110 active:scale-[0.97]
        transition-all duration-300 backdrop-blur-xl
      "
            >
              <span
                className="
          pointer-events-none absolute inset-0 rounded-full
          border-[3px] border-transparent
          before:content-[''] before:absolute before:inset-0 before:rounded-full
          before:border-[3px] before:border-white/70 before:border-dashed
          before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
          before:mask-exclude p-0.75
        "
              />
              Kostenlos herunterladen
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
