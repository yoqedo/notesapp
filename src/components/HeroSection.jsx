import Container from "../layout/Container";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="pt-30 pb-7 text-center">
      <Container>
        <div className="mb-7 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-xs font-medium text-gray-700 tracking-wide">
            AVAILABLE ON WINDOWS
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-extrabold text-center 
               tracking-tight leading-[1.1] text-gray-900"
        >
          Deine Gedanken.
          <br />
          <span className="text-blue-600">Deine Daten.</span>
          <br />
          Deine Kontrolle.
        </h1>

        <div className="flex items-center justify-center gap-4 mt-10 mb-5">
          <a
            rel="noopener noreferrer"
            href="https://github.com/fortyninelabs/notes/releases/download/v1.0.0/Notes-Setup-1.0.0.exe
"
            className="
      relative
      flex items-center gap-3
      px-8 py-4
      rounded-full
      text-lg font-semibold
      text-white
      bg-linear-to-b from-[#6EB6FF] to-[#1E7BFF]
      shadow-[0_10px_25px_rgba(30,123,255,0.35)]
      hover:shadow-[0_14px_32px_rgba(30,123,255,0.45)]
      hover:brightness-110
      active:scale-[0.97]
      transition-all duration-300
      backdrop-blur-xl
    "
          >
            {/* gestrichelte Border */}
            <span
              className="
        pointer-events-none
        absolute inset-0 rounded-full
        border-[3px] border-transparent
        before:content-['']
        before:absolute before:inset-0 before:rounded-full
        before:border-[3px] before:border-white/70
        before:border-dashed
        before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
        before:mask-exclude]
        p-0.75
      "
            />
            <Download size={20} className="opacity-90" />
            Download
          </a>
        </div>
      </Container>
    </section>
  );
}
