import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"}
      `}
    >
      <section className="py-2">
        <Container>
          <nav className="flex items-center justify-between">
            <HashLink
              smooth
              to="/#hero"
              className="hover:text-gray-700 transition"
            >
              <img src={logo} className="w-10 h-10" alt="Logo" />
            </HashLink>

            <div className="flex items-center">
              <ul className="flex gap-6 text-gray-500 text-sm mr-5">
                <li>
                  <HashLink
                    smooth
                    to="/#price"
                    className="hover:text-gray-700 transition"
                  >
                    Features
                  </HashLink>
                </li>

                <li>
                  <HashLink
                    smooth
                    to="/#faq"
                    className="hover:text-gray-700 transition"
                  >
                    FAQ
                  </HashLink>
                </li>
              </ul>

              {/* Neuer Download-Button */}
              {/*  <HashLink
                smooth
                to="/#download"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                Jetzt herunterladen
              </HashLink> */}
              <a
                rel="noopener noreferrer"
                href="https://github.com/fortyninelabs/notes/releases/download/v1.0.0/Notes-Setup-1.0.0.exe"
                className="
    px-6 py-2.5
    rounded-full
    text-sm font-semibold
    text-white
    bg-linear-to-b from-[#6EB6FF] to-[#1E7BFF]
    shadow-[0_8px_20px_rgba(30,123,255,0.35)]
    hover:shadow-[0_12px_28px_rgba(30,123,255,0.45)]
    hover:brightness-110
    active:scale-[0.97]
    transition-all duration-300
    backdrop-blur-xl
  "
              >
                Jetzt herunterladen
              </a>
            </div>
          </nav>
        </Container>
      </section>
    </nav>
  );
}
