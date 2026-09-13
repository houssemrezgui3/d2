import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">Cabinet dentaire Dr rezgui Houssem</Link>
            <span className="footer-gold-line"></span>
            <p className="footer-tagline">
              L&apos;excellence en soins dentaires.<br />Où la précision rencontre le confort.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Liens Rapides</h4>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Accueil</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/#areas" className="footer-link">Implantations</Link></li>
              <li><Link href="/#consultation" className="footer-link">Réserver une consultation</Link></li>
              <li>
                <a
                  href="https://www.instagram.com/cabinet_dr.rezgui_houssem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-social-link"
                >
                  <svg className="footer-social-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/cabinet-dentaire-dr-rezgui-houssem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-social-link"
                >
                  <svg className="footer-social-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact &amp; Horaires</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon">&#9679;</span>
                23 Av. Iben Kholdoun, Tunis, Tunisie
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">&#9679;</span>
                +216 50 149 159
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">&#9679;</span>
                Lundi&nbsp;9h00 &ndash; 17h00<br />
                Mardi&nbsp;8h30 &ndash; 19h00<br />
                Mercredi&nbsp;8h30 &ndash; 19h00<br />
                Jeudi&nbsp;8h30 &ndash; 19h00<br />
                Vendredi&nbsp;8h30 &ndash; 19h00<br />
                Samedi&nbsp;8h30 &ndash; 13h30<br />
                Dimanche&nbsp;Fermé
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">&copy; 2026 Cabinet dentaire Dr rezgui Houssem. Tous droits réservés.</span>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">Politique de Confidentialité</a>
            <a href="#" className="footer-legal-link">Conditions d&apos;Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
