import { Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left: Brand Info */}
        <div className="mb-10 md:mb-0">
          <h2 className="text-[40px] font mb-2">URVESTIE</h2>
          <p className="text-[24px] text-white mb-4">
            Fashion advice. Real stylists. Every budget.
          </p>
          <p className="text-[24px] text-white mt-10">
            © 2025 Urvestie. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start md:items-start">
          {/* Explore */}
          <div className="text-[24px]">
            <h3 className="mb-2">Explore</h3>
            <ul className="space-y-1 text-white font-abel">
              <li>
                <Link to="/" className="font-abel">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  Stylists
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  Chat Now
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-[24px]">
            <h3 className="mb-2">Support</h3>
            <ul className="space-y-1 text-white font-abel">
              <li>
                <Link to="/" className="font-abel">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link to="/" className="font-abel">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start">
            <div className="flex gap-4">
              <Link to="/" aria-label="Instagram">
                <Instagram className="w-[45px] h-[45px] text-white hover:text-gray-300" />
              </Link>
              <Link to="/" aria-label="LinkedIn">
                <Linkedin className="w-[45px] h-[45px] text-white hover:text-gray-300" />
              </Link>
              <Link to="/" aria-label="Pinterest">
                <svg
                  className="w-[45px] h-[45px] fill-current text-white hover:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.3 0 12c0 4.7 2.7 8.7 6.7 10.6-.1-.9-.2-2.2 0-3.2.2-1.1 1.4-6 1.4-6s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.8.9 1.8 2 0 1.2-.8 2.9-1.2 4.5-.4 1.5.8 2.7 2.3 2.7 2.8 0 4.7-3.6 4.7-7.8 0-3.2-2.2-5.6-6-5.6-4.4 0-7.1 3.3-7.1 6.9 0 1.3.5 2.7 1.2 3.4.1.1.1.2.1.3-.1.3-.3 1-.4 1.1-.1.2-.2.3-.4.2-1.5-.7-2.4-3-2.4-4.9 0-3.9 2.9-7.4 8.4-7.4 4.4 0 7.8 3.1 7.8 7.2 0 4.4-2.8 7.9-6.7 7.9-1.3 0-2.6-.7-3-1.5 0 0-.6 2.4-.7 2.9-.3 1.1-1.1 2.4-1.6 3.2C10.3 23.8 11.1 24 12 24c6.6 0 12-5.3 12-12S18.6 0 12 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
