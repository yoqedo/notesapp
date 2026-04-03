import React from "react";
import Container from "../layout/Container";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-5 bg-gray-100 border-t border-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Legal */}
          <ul className="flex gap-6 text-gray-500 text-sm">
            <li>
              <Link to="/impressum" className="hover:text-gray-700 transition">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-700 transition">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link to="/changelog" className="hover:text-gray-700 transition">
                Changelog
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Alle Rechte vorbehalten.
          </div>
        </div>
      </Container>
    </footer>
  );
}
