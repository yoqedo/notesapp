import { Star } from "lucide-react";
import Container from "../layout/Container";

const testimonials = [
  {
    rating: 5,
    text: "Endlich eine Notiz‑App, die nicht überladen ist. Schnell, klar und komplett privat.",
    name: "Alex Müller",
    role: "IT‑Techniker",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    rating: 5,
    text: "Ich liebe das minimalistische Design. Schreiben fühlt sich leicht und fokussiert an.",
    name: "Sarah Keller",
    role: "Product Designerin",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    rating: 4,
    text: "Keine Cloud, kein Konto, keine Ablenkung. Genau so sollte eine Notiz‑App funktionieren.",
    name: "Daniel Roth",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    rating: 5,
    text: "Schnell, offline und zuverlässig. Perfekt für tägliche Gedanken und Projekte.",
    name: "Julia Steiner",
    role: "Projektmanagerin",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    rating: 4,
    text: "Ich vertraue Notes, weil alles lokal bleibt. Keine Cloud‑Abhängigkeit, kein Tracking.",
    name: "Marco Frei",
    role: "Systemadministrator",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

export default function TestimonialRow() {
  return (
    <div className="relative w-full py-16 bg-white">
      <Container className="relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Was unsere Nutzer sagen
        </h2>
        {/* Fade Left */}
        <div
          className="
      pointer-events-none absolute left-0 top-0 h-full 
      w-35 sm:w-55 md:w-75 lg:w-95 xl:w-105
      bg-linear-to-r from-white/95 via-white/40 to-transparent 
      z-20
    "
        ></div>

        {/* Fade Right */}
        <div
          className="
      pointer-events-none absolute left-0 top-0 h-full 
      w-35 sm:w-55 md:w-75 lg:w-95 xl:w-105
      bg-linear-to-r from-white/95 via-white/40 to-transparent 
      z-20
    "
        ></div>

        <div className="overflow-hidden">
          <div className="flex gap-6 slow-carousel">
            {testimonials.map((t, i) => (
              <Card key={i} t={t} />
            ))}
            {testimonials.map((t, i) => (
              <Card key={`copy-${i}`} t={t} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function Card({ t }) {
  return (
    <div className="min-w-90 border border-gray-200 rounded-xl p-6 shadow-sm bg-white/70 backdrop-blur-sm">
      <div className="flex mb-3 ">
        {[...Array(5)].map((_, idx) => (
          <Star
            key={idx}
            size={18}
            className={
              idx < t.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <p className="text-gray-700 text-base mb-4">"{t.text}"</p>

      <div className="flex items-center gap-3 border-gray-200 border-t p-2">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full border"
        />
        <div>
          <p className="font-semibold text-gray-900">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}
