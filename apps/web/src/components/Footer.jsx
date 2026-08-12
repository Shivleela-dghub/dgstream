import {
  Facebook,
  FacebookIcon,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container px-6 py-10 md:py-14 lg:py-5">
        <div className="grid gap-10 sm:gap-12 grid-cols-2 lg:grid-cols-4 lg:gap-14">

          {/* Company */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-black">
              <img
                src="https://res.cloudinary.com/dl7dr0bmb/image/upload/v1785403656/DG_Stream_logo_ohyji9.png"
                alt="DG Stream Logo"
                className="h-9 md:h-12 w-auto"
              />
            </h3>

            <p className="mt-5 md:mt-6 leading-7 md:leading-8 text-sm md:text-base text-slate-400 max-w-xs">
              Building AI-powered creative experiences through
              design, technology and storytelling.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 md:mb-6 text-xs md:text-sm font-bold uppercase tracking-widest text-lime-400">
              Services
            </h4>

            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-400">
              <li>
                <Link to="/product-design">AI Creative</Link>
              </li>
              <li>
                <Link to="/work">3D Visualization</Link>
              </li>
              <li>
                <Link to="/brand-growth">Brand Identity</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 md:mb-6 text-xs md:text-sm font-bold uppercase tracking-widest text-lime-400">
              Company
            </h4>

            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-400">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="mb-4 md:mb-6 text-xs md:text-sm font-bold uppercase tracking-widest text-lime-400">
              Contact
            </h4>

            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center gap-3 text-sm md:text-base text-slate-400 break-all">
                <Mail size={18} className="shrink-0" />
                contact@dgstream.in
              </div>

              <div className="flex items-center gap-3 text-sm md:text-base text-slate-400">
                <Phone size={18} className="shrink-0" />
                +91 9731361100
              </div>

              <div className="mt-6 md:mt-8 flex gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/company/d-g-stream/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-2.5 md:p-3 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://www.instagram.com/_dg_stream_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-2.5 md:p-3 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61588735341504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-2.5 md:p-3 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 md:mt-10 border-t border-white/10 pt-6 md:pt-8 text-center text-xs md:text-sm text-slate-500">
          © {new Date().getFullYear()} DG Stream. All rights reserved.
        </div>
      </div>
    </footer>
  );
}