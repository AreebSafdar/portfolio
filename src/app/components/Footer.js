"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-mono text-lg font-semibold mb-4">
              Areeb Safdar
            </h3>
            <p className="text-sm mb-4">
              Frontend Developer passionate about building clean, responsive, and
              user-friendly web interfaces.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              <span>Rahim Yar Khan, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-mono text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-sm hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Project"
                  className="text-sm hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/Skill"
                  className="text-sm hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-mono text-lg font-semibold mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:officialareebsafdar@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>officialareebsafdar@gmail.com</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/AreebSafdar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/areeb-safdar-59b881386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Areeb Safdar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
