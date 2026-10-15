'use client';

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Interactive Before/After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  
  // Lightbox modal state for full-screen inspection of images
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <>
      {/* Top Announcement / Quick Bar */}
      <aside className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="badge-status">
              <span className="status-dot"></span> Atelier ouvert
            </span>
            <span className="topbar-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
              L'Union (31240) • Toulouse Métropole
            </span>
            <span className="topbar-item d-none-mobile">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Lun - Ven : 8h00 - 18h30
            </span>
          </div>
          <div className="topbar-right">
            <span className="topbar-highlight">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              0€ Avance de frais • Toutes assurances
            </span>
            <a href="tel:0981766176" className="topbar-phone" id="topbar-call-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>09 81 76 61 76</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Header */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="main-navbar">
        <div className="container navbar-inner">
          <a href="#hero" className="brand-logo" aria-label="Accueil PROCAR 31">
            <img 
              src="/assets/logo-procar31.png" 
              alt="PROCAR 31 Carrosserie Logo" 
              className="brand-img"
            />
          </a>

          <nav className="nav-links" id="nav-links" aria-label="Menu principal">
            <a href="#hero" className="nav-link active">Accueil</a>
            <a href="#services" className="nav-link">Prestations</a>
            <a href="#technologie-adas" className="nav-link highlight-nav">Calibrage ADAS</a>
            <a href="#realisations" className="nav-link">Avant / Après</a>
            <a href="#assurances" className="nav-link">Vos Avantages</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="nav-actions">
            <a href="tel:0981766176" className="btn btn-outline nav-btn-call" id="nav-call-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="btn-text">09 81 76 61 76</span>
            </a>
            <a href="#devis" className="btn btn-primary" id="nav-devis-btn">
              <span>Devis Gratuit</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <button
              className="burger-menu"
              id="burger-menu-btn"
              aria-label="Ouvrir le menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} id="mobile-drawer">
          <div className="mobile-drawer-links">
            <a href="#hero" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
            <a href="#services" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Prestations</a>
            <a href="#technologie-adas" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Calibrage ADAS & Radar</a>
            <a href="#realisations" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Réalisations Avant / Après</a>
            <a href="#assurances" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Assurances & Vos Droits</a>
            <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Accès & Horaires</a>
            <div className="mobile-cta-group">
              <a href="tel:0981766176" className="btn btn-outline w-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                09 81 76 61 76
              </a>
              <a href="#devis" className="btn btn-primary w-100" onClick={() => setMobileMenuOpen(false)}>Demander un Devis</a>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="hero-section" id="hero">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
          <div className="container hero-container">
            
            <div className="hero-content">
              <div className="hero-pill">
                <span className="pill-dot"></span>
                <span className="pill-text">CARROSSERIE & CALIBRAGE ADAS HAUT DE GAMME</span>
              </div>

              <h1 className="hero-title">
                Votre Spécialiste Carrosserie & Haute Technologie à <span className="gradient-orange">L'Union</span>
              </h1>

              <p className="hero-subtitle">
                Réparation carrosserie toutes marques, peinture haute définition par spectrométrie, géométrie 3D laser et calibrage ADAS dernière génération sur équipement <strong>Autel IA900WA</strong>.
              </p>

              {/* Key Guarantees Bar */}
              <div className="hero-badges-row">
                <div className="hero-badge-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>0€</strong> d'avance de frais</span>
                </div>
                <div className="hero-badge-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Véhicule de prêt</strong> gratuit</span>
                </div>
                <div className="hero-badge-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Toutes assurances <strong>100% acceptées</strong></span>
                </div>
                <div className="hero-badge-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Garantie constructeur <strong>préservée</strong></span>
                </div>
              </div>

              <div className="hero-cta-group">
                <a href="#devis" className="btn btn-primary btn-lg" id="hero-devis-cta">
                  <span>Demander un devis gratuit</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="tel:0981766176" className="btn btn-outline btn-lg" id="hero-call-cta">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>09 81 76 61 76</span>
                </a>
              </div>

              <div className="hero-trust-proof">
                <div className="stars-group">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="trust-text"><strong>Un travail soigné</strong> pour un résultat à la hauteur de vos attentes • <em>Passion, Qualité, Service</em></p>
              </div>
            </div>

            {/* Hero Visual Card: Clean, responsive, high-definition showcase of procar31.jpg */}
            <div className="hero-visual">
              <div className="hero-card-frame">
                <div className="hero-card-header">
                  <div className="window-dots">
                    <span className="dot-red"></span>
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                  </div>
                  <div className="hero-card-title">PROCAR 31 • Résultat Réel Atelier</div>
                  <span className="live-pill">Direct Atelier</span>
                </div>

                <div 
                  className="hero-card-image-wrap clickable-image" 
                  onClick={() => setSelectedImage({ src: '/assets/procar31.jpg', title: 'Carrosserie PROCAR 31 - Avant / Après' })}
                  title="Cliquez pour agrandir l'image"
                >
                  <img 
                    src="/assets/procar31.jpg" 
                    alt="Carrosserie PROCAR 31 Avant et Après réparation Mercedes" 
                    className="hero-main-img" 
                  />
                  <div className="image-zoom-indicator">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                    <span>Agrandir</span>
                  </div>
                  <div className="hero-img-badge">
                    <span className="badge-icon">⚡</span>
                    <div className="badge-text">
                      <strong>Avant / Après Garanti</strong>
                      <small>Mercedes réparée à L'Union</small>
                    </div>
                  </div>
                </div>

                <div className="hero-stats-strip">
                  <div className="stat-col">
                    <span className="stat-number">100%</span>
                    <span className="stat-desc">Assurances acceptées</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-col">
                    <span className="stat-number">0€</span>
                    <span className="stat-desc">Avance de trésorerie</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-col">
                    <span className="stat-number">Autel IA900</span>
                    <span className="stat-desc">Calibrage ADAS</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TRUST STRIP / ASSURANCES BANNER */}
        <section className="trust-strip">
          <div className="container trust-strip-inner">
            <div className="trust-strip-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Agréé Toutes Assurances</span>
            </div>
            <div className="insurance-tags-marquee">
              <span className="ins-tag">AXA</span>
              <span className="ins-tag">Allianz</span>
              <span className="ins-tag">MAIF</span>
              <span className="ins-tag">MACIF</span>
              <span className="ins-tag">Matmut</span>
              <span className="ins-tag">Groupama</span>
              <span className="ins-tag">MMA</span>
              <span className="ins-tag">GMF</span>
              <span className="ins-tag">Direct Assurance</span>
              <span className="ins-tag">Generali</span>
              <span className="ins-tag">Pacifica</span>
              <span className="ins-tag">BPCE Assurances</span>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-header text-center">
              <div className="section-tag">SAVOIR-FAIRE & EXPERTISE</div>
              <h2 className="section-title">Nos Prestations Carrosserie & Haute Technologie</h2>
              <p className="section-desc">
                De la tôle froissée aux réglages électroniques les plus pointus, notre équipe qualifiée prend en charge l'intégralité de vos réparations.
              </p>
            </div>

            <div className="services-grid">
              
              {/* Service 1: Carrosserie */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <div className="service-tag-badge">Toutes marques</div>
                <h3 className="service-name">Carrosserie & Tôlerie</h3>
                <p className="service-text">
                  Réparation de chocs légers ou majeurs, débosselage sans peinture (grêle, impacts de stationnement), redressage au marbre et remplacement d'éléments selon les normes constructeurs.
                </p>
                <ul className="service-features">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Redressage sur marbre laser</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Débosselage sans peinture (DSP)</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Pièces d'origine certifiées</li>
                </ul>
              </div>

              {/* Service 2: Peinture */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                </div>
                <div className="service-tag-badge">Laboratoire Teinte</div>
                <h3 className="service-name">Peinture Automobile en Cabine</h3>
                <p className="service-text">
                  Colorimétrie assistée par spectromètre numérique pour reproduire la teinte exacte de votre véhicule. Application en cabine pressurisée dépoussiérée avec vernis céramique anti-rayures.
                </p>
                <ul className="service-features">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Spectromètre colorimétrique haute fidélité</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Peintures hydrodiluables premium</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Finition lustrée miroir impeccable</li>
                </ul>
              </div>

              {/* Service 3: Calibrage ADAS Autel IA900WA */}
              <div className="service-card service-card-highlight">
                <div className="service-highlight-glow"></div>
                <div className="service-icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <div className="service-tag-badge badge-orange">Technologie Autel IA900WA</div>
                <h3 className="service-name">Calibrage ADAS & Radars</h3>
                <p className="service-text">
                  Étalonnage dynamique et statique des aides à la conduite (caméras pare-brise, radars anticollision, capteurs Lidar, maintien de voie). Indispensable après tout choc ou changement de vitrage.
                </p>
                <ul className="service-features">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Équipement officiel <strong>Autel IA900WA</strong></li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Calibrage Caméras, Radars & Lidar</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Rapport officiel de conformité délivré</li>
                </ul>
              </div>

              {/* Service 4: Géométrie 3D */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div className="service-tag-badge">Précision Laser</div>
                <h3 className="service-name">Géométrie & Parallélisme</h3>
                <p className="service-text">
                  Contrôle et réglage au dixième de millimètre des angles de braquage, du parallélisme, du carrossage et de la chasse des essieux pour une tenue de route irréprochable et sans usure anormale des pneus.
                </p>
                <ul className="service-features">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Banc de géométrie 3D haute précision</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Réglage parallélisme et carrossage</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Essais dynamiques sur route</li>
                </ul>
              </div>

              {/* Service 5: Vitrage & Pare-Brise */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/></svg>
                </div>
                <div className="service-tag-badge">Vitrage Certifié</div>
                <h3 className="service-name">Vitrage & Pare-Brise</h3>
                <p className="service-text">
                  Remplacement de pare-brise, lunette arrière, vitres latérales et toits ouvrants. Recalibrage immédiat de la caméra embarquée dans nos ateliers pour une sécurité totale.
                </p>
                <ul className="service-features">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Vitrages homologués constructeur</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Calibrage ADAS inclus et certifié</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Franchise prise en charge selon contrat</li>
                </ul>
              </div>

              {/* Service 6: Prise en charge Sinistre & Prêt */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                </div>
                <div className="service-tag-badge">Zéro Tracas</div>
                <h3 className="service-name">Gestion Sinistre & Véhicule de Prêt</h3>
                <p className="service-text">
                  Nous gérons les formalités avec votre compagnie d'assurance du constat à l'expertise. Vous bénéficiez d'un véhicule de courtoisie gratuit et soigné pendant toute la durée des travaux.
                </p>
                <ul className="service-features">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> 0€ d'avance de frais (tiers payant)</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Véhicules de prêt récents et propres</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Suivi SMS en direct des réparations</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION FEATURE HAUTE TECHNOLOGIE: ADAS AUTEL IA900WA (FLYER procarImage.jpg CLEARLY SHOWN) */}
        <section className="section tech-section" id="technologie-adas">
          <div className="container">
            <div className="tech-card-wrapper">
              <div className="tech-grid">
                
                <div className="tech-info">
                  <div className="section-tag">ÉQUIPEMENT OFFICIEL DE POINTE</div>
                  <h2 className="tech-title">Géométrie & Calibrage ADAS <span className="gradient-orange">Haut de Gamme</span></h2>
                  <p className="tech-lead">
                    Les véhicules récents intègrent des caméras, radars et capteurs vitaux pour votre sécurité (freinage d'urgence, maintien de voie, régulateur adaptatif). Après tout sinistre ou remplacement de pare-brise, un recalibrage certifié est indispensable.
                  </p>

                  <div className="tech-features-list">
                    <div className="tech-feature-item">
                      <div className="tech-icon-circle">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <h4>Géométrie Précise (Parallélisme & Carrossage)</h4>
                        <p>Contrôle 3D haute définition pour un alignement parfait des essieux et une tenue de route sécurisée.</p>
                      </div>
                    </div>

                    <div className="tech-feature-item">
                      <div className="tech-icon-circle">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <h4>Calibrage ADAS & Radar (Caméras, Radars, Lidar)</h4>
                        <p>Étalonnage dynamique et statique avec cibles optiques officielles constructeurs.</p>
                      </div>
                    </div>

                    <div className="tech-feature-item">
                      <div className="tech-icon-circle">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <h4>Équipement Autel IA900WA (Technologie de Pointe)</h4>
                        <p>La référence mondiale en diagnostic et calibrage électronique automobile.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tech-cta-box">
                    <div className="tech-cta-text">
                      <strong>Prise de rendez-vous immédiate !</strong>
                      <span>Intervention rapide et rapport d'étalonnage remis.</span>
                    </div>
                    <a href="tel:0981766176" className="btn btn-primary" id="tech-call-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      <span>09 81 76 61 76</span>
                    </a>
                  </div>
                </div>

                {/* THE FLYER procarImage.jpg DISPLAYED IN FULL */}
                <div className="tech-media">
                  <div 
                    className="tech-media-frame clickable-image"
                    onClick={() => setSelectedImage({ src: '/assets/procarImage.jpg', title: 'Flyer Officiel - Calibrage ADAS & Géométrie Autel IA900WA PROCAR 31' })}
                    title="Cliquez pour agrandir le flyer en plein écran"
                  >
                    <img 
                      src="/assets/procarImage.jpg" 
                      alt="Affiche Calibrage ADAS et Géométrie Haut de Gamme Autel IA900WA PROCAR 31" 
                      className="tech-flyer-img" 
                    />
                    <div className="tech-floating-tag">
                      <span className="pulse-indicator"></span>
                      Technologie Autel IA900WA
                    </div>
                    <div className="image-zoom-indicator">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      <span>Voir en grand</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* REALISATIONS / AVANT - APRES (WITH INTERACTIVE SLIDER & FULL procard3111.jpg) */}
        <section className="section realisations-section" id="realisations">
          <div className="container">
            
            <div className="section-header text-center">
              <div className="section-tag">PREUVE PAR L'IMAGE</div>
              <h2 className="section-title">Nos Réalisations : Du Choc à la Perfection</h2>
              <p className="section-desc">
                Glissez sur l'image ci-dessous pour comparer directement l'état avant et après intervention dans nos ateliers de L'Union.
              </p>
            </div>

            {/* INTERACTIVE BEFORE / AFTER SLIDER WIDGET */}
            <div className="interactive-slider-wrapper">
              <div className="slider-header-strip">
                <span className="slider-label label-before">◀ AVANT (Accidenté)</span>
                <span className="slider-instructions">Faites glisser au centre pour comparer</span>
                <span className="slider-label label-after">APRÈS (Réparé) ▶</span>
              </div>

              <div 
                className="comparison-slider-container"
                onMouseMove={handleSliderMove}
                onTouchMove={handleSliderMove}
              >
                {/* AFTER IMAGE (Base) */}
                <img 
                  src="/assets/mercedes-after.jpg" 
                  alt="Mercedes réparée après carrosserie PROCAR 31"
                  className="comparison-img img-after"
                />

                {/* BEFORE IMAGE (Clipped overlay) */}
                <div 
                  className="comparison-overlay"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src="/assets/mercedes-before.jpg" 
                    alt="Mercedes accidentée avant carrosserie PROCAR 31"
                    className="comparison-img img-before"
                  />
                </div>

                {/* SLIDER HANDLE */}
                <div 
                  className="comparison-handle"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="handle-line"></div>
                  <div className="handle-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                  <div className="handle-line"></div>
                </div>
              </div>
            </div>

            {/* 3-STEP REAL WORKSHOP PHOTOS */}
            <div className="realisation-steps-grid">
              
              <div className="step-card">
                <div className="step-card-header">
                  <span className="step-number">01</span>
                  <div className="step-meta">
                    <span className="step-badge badge-red">AVANT</span>
                    <span className="step-vehicle">Mercedes Classe A</span>
                  </div>
                </div>
                <div 
                  className="step-img-box clickable-image"
                  onClick={() => setSelectedImage({ src: '/assets/realisation-avant.jpg', title: 'Étape 1 : Véhicule accidenté avant travaux' })}
                  title="Cliquez pour agrandir"
                >
                  <img 
                    src="/assets/realisation-avant.jpg" 
                    alt="Véhicule accidenté avant réparation PROCAR 31" 
                  />
                  <div className="image-zoom-indicator">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                </div>
                <div className="step-card-body">
                  <h4 className="step-title">Choc Avant Sévère</h4>
                  <p className="step-text">Aile déformée, bouclier avant arraché, optique LED détruit et traverse touchée. Diagnostic complet et chiffrage des pièces d'origine.</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-card-header">
                  <span className="step-number">02</span>
                  <div className="step-meta">
                    <span className="step-badge badge-yellow">EN COURS</span>
                    <span className="step-vehicle">Atelier Tôlerie & Peinture</span>
                  </div>
                </div>
                <div 
                  className="step-img-box clickable-image"
                  onClick={() => setSelectedImage({ src: '/assets/realisation-encours.jpg', title: 'Étape 2 : Démontage, redressage et tôlerie' })}
                  title="Cliquez pour agrandir"
                >
                  <img 
                    src="/assets/realisation-encours.jpg" 
                    alt="Véhicule en cours de réparation tôlerie PROCAR 31" 
                  />
                  <div className="image-zoom-indicator">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                </div>
                <div className="step-card-body">
                  <h4 className="step-title">Démontage & Redressage</h4>
                  <p className="step-text">Dépose des éléments endommagés, contrôle des fixations structurelles, redressage au marbre et préparation soignée avant peinture en cabine.</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-card-header">
                  <span className="step-number">03</span>
                  <div className="step-meta">
                    <span className="step-badge badge-green">APRÈS</span>
                    <span className="step-vehicle">Restitution Client</span>
                  </div>
                </div>
                <div 
                  className="step-img-box clickable-image"
                  onClick={() => setSelectedImage({ src: '/assets/realisation-apres.jpg', title: 'Étape 3 : Véhicule restitué comme neuf' })}
                  title="Cliquez pour agrandir"
                >
                  <img 
                    src="/assets/realisation-apres.jpg" 
                    alt="Véhicule entièrement réparé et lustré PROCAR 31" 
                  />
                  <div className="image-zoom-indicator">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                </div>
                <div className="step-card-body">
                  <h4 className="step-title">Résultat Impeccable</h4>
                  <p className="step-text">Remontage précis avec calandre AMG, teintes parfaites sans raccord visible, calibrage radar effectué et nettoyage complet intérieur/extérieur.</p>
                </div>
              </div>

            </div>

            {/* FULL WORKSHOP BANNER (procard3111.jpg CLEARLY SHOWN & CLICKABLE) */}
            <div className="realisation-banner-showcase">
              <div className="banner-showcase-header">
                <div className="banner-title-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <h3>Rapport d'Intervention Complet • Carrosserie PROCAR 31 (L'Union)</h3>
                </div>
                <span className="banner-tag">Travaux Garantis Constructeur</span>
              </div>
              <div 
                className="banner-showcase-img-wrap clickable-image"
                onClick={() => setSelectedImage({ src: '/assets/procard3111.jpg', title: 'Processus Complet PROCAR 31 : Avant, En Cours, Après' })}
                title="Cliquez pour voir en plein écran"
              >
                <img 
                  src="/assets/procard3111.jpg" 
                  alt="Processus complet de réparation de carrosserie avant en cours et après PROCAR 31" 
                  className="full-banner-img"
                />
                <div className="image-zoom-indicator">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span>Cliquer pour voir en plein écran</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ASSURANCES & VOS DROITS (LOI HAMON) */}
        <section className="section assurances-section" id="assurances">
          <div className="container">
            
            <div className="law-banner">
              <div className="law-content">
                <div className="law-pill">Article L211-5-1 du Code des Assurances (Loi Hamon)</div>
                <h2 className="law-title">Vous avez le libre choix de votre carrossier !</h2>
                <p className="law-text">
                  Votre compagnie d'assurance n'a <strong>pas le droit de vous imposer un garage agréé</strong> par leurs soins. Vous êtes 100% libre de confier votre véhicule à l'artisan de votre choix. Chez <strong>PROCAR 31</strong>, nous vous offrons exactement les mêmes avantages, la qualité et l'écoute en plus !
                </p>
              </div>
              <div className="law-action">
                <a href="#devis" className="btn btn-primary btn-lg">Faire réparer chez nous</a>
              </div>
            </div>

            <div className="assurances-perks-grid">
              
              <div className="perk-card">
                <div className="perk-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 6v2m0 8v2"/></svg>
                </div>
                <h3 className="perk-title">0€ d'Avance de Frais</h3>
                <p className="perk-text">Grâce à la cession de créance légale, votre assurance nous règle directement le montant des réparations. Vous n'avez aucun argent à débourser de votre poche.</p>
              </div>

              <div className="perk-card">
                <div className="perk-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                </div>
                <h3 className="perk-title">Véhicule de Prêt Gratuit</h3>
                <p className="perk-text">Restez mobile sans contrainte ! Nous mettons gracieusement à votre disposition un véhicule de prêt propre et récent pour toute la durée des réparations.</p>
              </div>

              <div className="perk-card">
                <div className="perk-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h3 className="perk-title">Démarches 100% Gérées</h3>
                <p className="perk-text">Nous prenons contact directement avec l'expert et l'assurance. Nous transmettons les photos, le devis chiffré et gérons le suivi administratif de A à Z.</p>
              </div>

              <div className="perk-card">
                <div className="perk-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="perk-title">Garantie Constructeur Préservée</h3>
                <p className="perk-text">Nos méthodes d'intervention et pièces d'origine certifiées maintiennent la garantie légale et constructeur de votre véhicule sans aucune restriction.</p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION DEVIS EN LIGNE EXPRESS */}
        <section className="section devis-section" id="devis">
          <div className="container">
            
            <div className="devis-card">
              <div className="devis-header text-center">
                <div className="section-tag">RÉPONSE SOUS 2H OUVRÉES</div>
                <h2 className="devis-title">Demandez Votre Devis Gratuit & Sans Engagement</h2>
                <p className="devis-desc">Remplissez les informations ci-dessous pour une estimation rapide ou appelez-nous directement au <a href="tel:0981766176" className="phone-link">09 81 76 61 76</a>.</p>
              </div>

              {!formSubmitted ? (
                <form className="devis-form" id="devis-form" onSubmit={handleFormSubmit}>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="form-prestation">Type de prestation souhaitée *</label>
                      <select id="form-prestation" name="prestation" defaultValue="" required>
                        <option value="" disabled>Sélectionnez un service...</option>
                        <option value="carrosserie">Réparation Carrosserie / Choc</option>
                        <option value="peinture">Peinture Complète ou Élément</option>
                        <option value="calibrage-adas">Calibrage ADAS & Caméras</option>
                        <option value="geometrie">Géométrie & Parallélisme 3D</option>
                        <option value="pare-brise">Pare-Brise & Vitrage</option>
                        <option value="debosselage">Débosselage sans peinture (Grêle/Coups)</option>
                        <option value="autre">Autre demande spécifique</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-assurance">Prise en charge par une assurance ? *</label>
                      <select id="form-assurance" name="assurance" defaultValue="oui-sinistre" required>
                        <option value="oui-sinistre">Oui - Sinistre déclaré à l'assurance</option>
                        <option value="non-particulier">Non - Règlement personnel (Particulier/Pro)</option>
                        <option value="en-cours">En cours de déclaration</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="form-immat">Immatriculation ou Marque & Modèle *</label>
                      <input type="text" id="form-immat" name="immatriculation" placeholder="Ex: AB-123-CD ou Peugeot 3008" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-annee">Année approximative du véhicule</label>
                      <input type="text" id="form-annee" name="annee" placeholder="Ex: 2021" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="form-nom">Nom & Prénom *</label>
                      <input type="text" id="form-nom" name="nom" placeholder="Votre nom complet" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-telephone">Numéro de téléphone *</label>
                      <input type="tel" id="form-telephone" name="telephone" placeholder="06 .. .. .. .." required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-email">Adresse e-mail</label>
                    <input type="email" id="form-email" name="email" placeholder="votre.email@exemple.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-message">Description des dommages ou besoins *</label>
                    <textarea id="form-message" name="message" rows={3} placeholder="Décrivez l'élément endommagé (aile, pare-chocs, portière, caméra pare-brise...) et si vous avez besoin d'un véhicule de prêt." required></textarea>
                  </div>

                  <div className="form-footer">
                    <div className="form-privacy">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span>Vos informations sont strictement confidentielles. Devis 100% gratuit.</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" id="submit-devis-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <span>Envoyer ma demande de devis</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                <div className="form-success-box" id="form-success-box">
                  <div className="success-icon">✓</div>
                  <h3>Demande de devis transmise avec succès !</h3>
                  <p>Notre chef d'atelier examine vos informations et vous recontactera sous <strong>2 heures ouvrées</strong> avec un chiffrage précis.</p>
                  <div className="success-actions">
                    <a href="tel:0981766176" className="btn btn-outline">Appel direct : 09 81 76 61 76</a>
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* SECTION AVIS & TEMOIGNAGES */}
        <section className="section reviews-section">
          <div className="container">
            
            <div className="section-header text-center">
              <div className="section-tag">SATISFACTION CLIENT</div>
              <h2 className="section-title">Ce que disent nos clients de l'atelier</h2>
              <p className="section-desc">Un travail soigné, le respect des délais et la satisfaction garantie.</p>
            </div>

            <div className="reviews-grid">
              
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"Suite à un accrochage sur ma Mercedes, PROCAR 31 a refait l'aile avant et le pare-chocs. Résultat bluffant, la peinture est identique à l'origine, aucun raccord visible ! Voiture de prêt fournie et 0 euro avancé avec mon assurance."</p>
                <div className="reviewer-meta">
                  <div className="reviewer-avatar">MK</div>
                  <div>
                    <strong>Marc K.</strong>
                    <small>Mercedes-Benz Classe A • L'Union</small>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"Super carrosserie ! J'avais besoin d'un réglage de train avant et d'un calibrage caméra radar suite à un changement de pare-brise. Équipement Autel ultra performant et rapport officiel imprimé. Très pros et ponctuels."</p>
                <div className="reviewer-meta">
                  <div className="reviewer-avatar">SL</div>
                  <div>
                    <strong>Stéphane L.</strong>
                    <small>Audi A4 • Toulouse</small>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"Accueil chaleureux, explications claires et prise en charge intégrale avec la Macif. Voiture rendue nettoyée comme neuve à l'intérieur comme à l'extérieur. Je recommande les yeux fermés !"</p>
                <div className="reviewer-meta">
                  <div className="reviewer-avatar">SC</div>
                  <div>
                    <strong>Sophie C.</strong>
                    <small>Peugeot 3008 • Saint-Jean</small>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION CONTACT & INFOS PRATIQUES */}
        <section className="section contact-section" id="contact">
          <div className="container">
            
            <div className="contact-grid">
              
              <div className="contact-card">
                <div className="section-tag">ATELIER & COORDONNÉES</div>
                <h2 className="contact-title">Nous Rendre Visite à L'Union</h2>
                <p className="contact-desc">
                  Notre carrosserie vous accueille pour un chiffrage immédiat, un diagnostic de carrosserie ou une intervention mécanique de précision.
                </p>

                <div className="contact-details-list">
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <strong>Localisation de l'Atelier</strong>
                      <p>L'Union (31240) • Haute-Garonne<br /><small>Secteur Toulouse Nord-Est / Saint-Jean / Balma</small></p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <strong>Téléphone Direct</strong>
                      <p><a href="tel:0981766176" className="contact-phone-link">09 81 76 61 76</a><br /><small>Appel direct sans attente</small></p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <strong>Horaires d'Ouverture</strong>
                      <p>Du Lundi au Vendredi : <strong>08h00 - 12h00 / 14h00 - 18h30</strong><br /><small>Samedi & Dimanche : Fermé</small></p>
                    </div>
                  </div>

                </div>

                <div className="contact-direct-actions">
                  <a href="tel:0981766176" className="btn btn-primary btn-lg w-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Appeler l'atelier : 09 81 76 61 76
                  </a>
                  <a href="https://maps.google.com/?q=L%27Union+31240+France" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg w-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                    Itinéraire GPS Google Maps
                  </a>
                </div>

              </div>

              {/* Stylized Map & Visual Card */}
              <div className="map-card-container">
                <div className="map-placeholder-card">
                  <div className="map-header">
                    <div className="map-location-tag">
                      <span className="status-dot"></span> Zone d'intervention PROCAR 31
                    </div>
                    <span className="map-badge">Haute-Garonne (31)</span>
                  </div>
                  <div className="map-visual">
                    <div className="map-grid-lines"></div>
                    <div className="map-pin-pulse">
                      <div className="pulse-ring"></div>
                      <div className="pin-dot">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff6b00" stroke="#fff" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3" fill="#fff"/></svg>
                      </div>
                    </div>
                    <div className="map-info-popup">
                      <strong>CARROSSERIE PROCAR 31</strong>
                      <span>L'Union • 31240</span>
                      <small>09 81 76 61 76</small>
                    </div>
                  </div>
                  <div className="map-footer-communes">
                    <span>Interventions fréquentes :</span>
                    <div className="communes-pills">
                      <span className="c-pill">L'Union</span>
                      <span className="c-pill">Toulouse</span>
                      <span className="c-pill">Saint-Jean</span>
                      <span className="c-pill">Balma</span>
                      <span className="c-pill">Launaguet</span>
                      <span className="c-pill">Castelmaurou</span>
                      <span className="c-pill">Aucamville</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          
          <div className="footer-top">
            <div className="footer-brand-col">
              <img src="/assets/logo-procar31.png" alt="PROCAR 31 Logo" className="footer-logo" width="180" />
              <p className="footer-brand-desc">
                Atelier spécialisé en carrosserie, peinture automobile de haute précision, géométrie 3D et calibrage ADAS Autel IA900WA à L'Union. Travail soigné et passion de l'automobile.
              </p>
              <div className="footer-values">
                <span>Passion</span> • <span>Qualité</span> • <span>Service</span>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>Prestations</h4>
              <ul>
                <li><a href="#services">Carrosserie Toutes Marques</a></li>
                <li><a href="#services">Peinture Haute Définition</a></li>
                <li><a href="#technologie-adas">Calibrage ADAS & Radars</a></li>
                <li><a href="#services">Géométrie 3D & Parallélisme</a></li>
                <li><a href="#services">Remplacement Pare-Brise</a></li>
                <li><a href="#services">Débosselage Sans Peinture</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Vos Droits & Garanties</h4>
              <ul>
                <li><a href="#assurances">Loi Hamon (Libre Choix)</a></li>
                <li><a href="#assurances">0€ Avance de Frais</a></li>
                <li><a href="#assurances">Véhicule de Prêt Offert</a></li>
                <li><a href="#assurances">Toutes Assurances Agréées</a></li>
                <li><a href="#assurances">Garantie Constructeur Préservée</a></li>
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4>Atelier PROCAR 31</h4>
              <p><strong>Adresse :</strong> L'Union (31240)</p>
              <p><strong>Téléphone :</strong> <a href="tel:0981766176">09 81 76 61 76</a></p>
              <p><strong>Horaires :</strong> Lun - Ven : 8h00 - 18h30</p>
              <a href="#devis" className="btn btn-primary btn-sm footer-btn">Demander un Devis</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 CARROSSERIE PROCAR 31. Tous droits réservés. Réparation & Peinture Automobile L'Union (31).</p>
            <div className="footer-legal-links">
              <a href="#main-content">Haut de page ↑</a>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING BOTTOM BAR FOR MOBILE */}
      <div className="mobile-floating-bar" id="mobile-floating-bar">
        <a href="tel:0981766176" className="floating-btn floating-call" id="float-call-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>Appeler : 09 81 76 61 76</span>
        </a>
        <a href="#devis" className="floating-btn floating-devis" id="float-devis-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>Devis Rapide</span>
        </a>
      </div>

      {/* FULL-SCREEN IMAGE LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <span className="lightbox-title">{selectedImage.title}</span>
              <button 
                className="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
            <div className="lightbox-img-wrap">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="lightbox-img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
