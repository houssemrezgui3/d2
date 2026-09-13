'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [expanded]);

  const toggle = () => setExpanded((prev) => !prev);
  const close = () => setExpanded(false);

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo" onClick={close}>
          <img src="/logo.webp" alt="Cabinet dentaire Dr rezgui Houssem Logo" className="logo-img" />
        </Link>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          onClick={toggle}
        >
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <nav className={`nav-menu${expanded ? ' active' : ''}`}>
          <ul className="nav-list">
            <li><Link href="/" className="nav-link" onClick={close}>Accueil</Link></li>
            <li><Link href="/services" className="nav-link" onClick={close}>Services</Link></li>
            <li><Link href="/#areas" className="nav-link" onClick={close}>Implantations</Link></li>
          </ul>
          <Link href="/#consultation" className="btn btn-outline nav-btn" onClick={close}>Prendre RDV</Link>
          <a href="tel:+21650149159" className="btn btn-outline nav-btn" onClick={close}>Appeler : +216 50 149 159</a>
        </nav>
      </div>
    </header>
  );
}
