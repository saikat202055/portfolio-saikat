import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

import { SOCIAL_LINKS } from '@/data/social';

import './Footer.css';


const FOOTER_LINKS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Education',
    href: '#education',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Certificates',
    href: '#certificates',
  },
  {
    label: 'Leadership',
    href: '#leadership',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];


const EMAIL_ADDRESS =
  'arafsaikat6@gmail.com';


export function Footer() {
  const currentYear =
    new Date().getFullYear();


  /* =========================================================
     BACK TO TOP
  ========================================================= */

  const scrollToTop = () => {
    const homeSection =
      document.querySelector('#home');

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      window.history.replaceState(
        null,
        '',
        '#home',
      );
    }
  };


  /* =========================================================
     GMAIL COMPOSE
  ========================================================= */

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      EMAIL_ADDRESS,
    )}`;


  return (
    <footer className="footer">

      {/* =====================================
          BACKGROUND EFFECTS
      ====================================== */}

      <div
        className="footer-glow"
        aria-hidden="true"
      />

      <div
        className="footer-grid"
        aria-hidden="true"
      />


      <div className="footer-container">

        {/* =====================================
            MAIN FOOTER
        ====================================== */}

        <div className="footer-main">

          {/* =====================================
              BRAND
          ====================================== */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
              aria-label="Go to home"
            >
              Saikat
              <span>.</span>
            </a>


            <p className="footer-description">
              Electrical &amp; Electronic Engineering
              student exploring AI, software development,
              embedded systems, and digital technology.
            </p>


            <div className="footer-tech">
              <span>
                Engineering
              </span>

              <span>
                AI
              </span>

              <span>
                Software
              </span>

              <span>
                Technology
              </span>
            </div>

          </div>


          {/* =====================================
              QUICK LINKS
          ====================================== */}

          <div className="footer-navigation">

            <p className="footer-heading">
              Quick Links
            </p>


            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

          </div>


          {/* =====================================
              CONNECT
          ====================================== */}

          <div className="footer-connect">

            <p className="footer-heading">
              Connect
            </p>


            <div className="social-links">

              {/* LINKEDIN */}

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin
                  size={17}
                  aria-hidden="true"
                />

                <span>
                  LinkedIn
                </span>
              </a>


              {/* GITHUB */}

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
              >
                <Github
                  size={17}
                  aria-hidden="true"
                />

                <span>
                  GitHub
                </span>
              </a>


              {/* EMAIL / GMAIL */}

              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to Saikat"
              >
                <Mail
                  size={17}
                  aria-hidden="true"
                />

                <span>
                  Email
                </span>
              </a>

            </div>

          </div>

        </div>


        {/* =====================================
            BOTTOM BAR
        ====================================== */}

        <div className="footer-bottom">

          <div className="footer-copyright">

            <p>
              © {currentYear} Saikat.
              All Rights Reserved.
            </p>


            <p className="footer-built">
              Built with React • TypeScript • Tailwind CSS
            </p>

          </div>


          {/* BACK TO TOP */}

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp
              size={17}
              aria-hidden="true"
            />
          </button>

        </div>

      </div>

    </footer>
  );
}


export default Footer;