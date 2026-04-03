import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import Download from "./DownloadButton";
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

                <li>
                  <Link
                    to="/changelog"
                    className="hover:text-gray-700 transition"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </section>
    </nav>
  );
}
