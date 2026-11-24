/* ===================================================
   Aapla Bazar - Stylesheet
   Palette: Dark Brown/Maroon (primary), Warm Beige (secondary),
            White/Off-white (background), Golden (accent)
=================================================== */

:root {
  --color-primary: #4a2c1f;      /* dark brown / maroon */
  --color-primary-light: #6b4130;
  --color-secondary: #e9dcc9;    /* warm beige */
  --color-bg: #fdfbf7;           /* off-white */
  --color-white: #ffffff;
  --color-accent: #c8952c;       /* golden */
  --color-accent-light: #e0b158;
  --color-text: #2f241d;
  --color-text-muted: #6f6259;

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;

  --shadow-sm: 0 2px 10px rgba(74, 44, 31, 0.08);
  --shadow-md: 0 10px 30px rgba(74, 44, 31, 0.12);

  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', 'Poppins', Arial, sans-serif;
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

/* ===== Buttons ===== */
.btn {
  display: inline-block;
  padding: 14px 30px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  border: 2px solid transparent;
  transition: var(--transition);
  text-align: center;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
}

.btn-cta {
  background: var(--color-accent);
  color: var(--color-white);
  padding: 10px 22px;
  font-size: 0.9rem;
}

.btn-cta:hover {
  background: var(--color-accent-light);
}

.btn.small {
  padding: 8px 16px;
  font-size: 0.85rem;
}

/* ===== Section Titles ===== */
.eyebrow {
  color: var(--color-accent);
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

.eyebrow.center {
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  color: var(--color-primary);
  margin-bottom: 16px;
  text-align: center;
  font-weight: 800;
}

.section-title.left {
  text-align: left;
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto 50px auto;
}

/* ===================================================
   Header
=================================================== */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(253, 251, 247, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 58px;
  width: 58px;
  border-radius: 50%;
  object-fit: cover;
}

.logo span {
  color: var(--color-accent);
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-weight: 600;
  color: var(--color-text);
  position: relative;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--color-accent);
}

.header-cta {
  display: inline-block;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 26px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
}

/* ===================================================
   Hero
=================================================== */
.hero {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-bg) 60%);
  padding: 100px 0 90px;
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.hero-text {
  flex: 1;
  min-width: 300px;
}

.hero-text h1 {
  font-size: 2.7rem;
  color: var(--color-primary);
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 20px;
}

.hero-text h1 span {
  color: var(--color-accent);
  font-size: 1.5rem;
  display: inline-block;
  margin-top: 8px;
}

.hero-desc {
  color: var(--color-text-muted);
  max-width: 500px;
  margin-bottom: 32px;
  font-size: 1.05rem;
}

.hero-buttons {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.hero-visual {
  flex: 1;
  min-width: 280px;
  display: flex;
  justify-content: center;
}

.hero-graphic {
  position: relative;
  width: 380px;
  height: 380px;
}

.hero-circle {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  opacity: 0.15;
}

.hero-card {
  position: absolute;
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  padding: 18px 22px;
  text-align: center;
  font-weight: 700;
  color: var(--color-primary);
  animation: float 4s ease-in-out infinite;
}

.hero-card-icon {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 6px;
}

.hero-card-1 {
  top: 10%;
  left: 5%;
}

.hero-card-2 {
  top: 45%;
  right: 0%;
  animation-delay: 1s;
}

.hero-card-3 {
  bottom: 8%;
  left: 20%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

/* ===================================================
   About
=================================================== */
.about {
  padding: 90px 0;
  background: var(--color-white);
}

.about-inner {
  display: flex;
  justify-content: center;
}

.about-text {
  max-width: 800px;
  text-align: left;
}

.about-text p {
  color: var(--color-text-muted);
  margin-bottom: 30px;
}

.about-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.highlight-item {
  background: var(--color-secondary);
  border-radius: var(--radius-md);
  padding: 20px 26px;
  text-align: center;
  min-width: 130px;
  box-shadow: var(--shadow-sm);
}

.highlight-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-primary);
}

.highlight-label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-weight: 600;
}

/* ===================================================
   Services
=================================================== */
.services {
  padding: 90px 0;
  background: var(--color-bg);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.service-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 32px 26px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid transparent;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent);
}

.service-icon {
  font-size: 2.3rem;
  margin-bottom: 16px;
}

.service-card h3 {
  color: var(--color-primary);
  margin-bottom: 10px;
  font-size: 1.15rem;
}

.service-card p {
  color: var(--color-text-muted);
  font-size: 0.92rem;
}

/* ===================================================
   Why Choose Us
=================================================== */
.why-choose {
  padding: 90px 0;
  background: var(--color-secondary);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.why-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 30px 20px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.why-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

.why-icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.why-card h3 {
  color: var(--color-primary);
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.why-card p {
  color: var(--color-text-muted);
  font-size: 0.88rem;
}

/* ===================================================
   Enquiry Form
=================================================== */
.enquiry {
  padding: 90px 0;
  background: var(--color-white);
}

.enquiry-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: flex-start;
}

.enquiry-text p {
  color: var(--color-text-muted);
}

.enquiry-form {
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  padding: 36px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.form-row input,
.form-row select {
  flex: 1;
  min-width: 200px;
}

input,
select,
textarea {
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid #ddd0bd;
  background: var(--color-white);
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--color-text);
  width: 100%;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(200, 149, 44, 0.15);
}

textarea {
  resize: vertical;
}

.form-message {
  font-weight: 600;
  color: var(--color-primary);
  min-height: 20px;
}

/* ===================================================
   Contact
=================================================== */
.contact {
  padding: 90px 0;
  background: var(--color-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.contact-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 30px 20px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

.contact-icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.contact-card h3 {
  color: var(--color-primary);
  margin-bottom: 6px;
  font-size: 1rem;
}

.contact-card p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

/* ===================================================
   Footer
=================================================== */
.footer {
  background: var(--color-primary);
  color: var(--color-secondary);
  padding: 70px 0 0;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-logo {
  margin-bottom: 14px;
  color: var(--color-white);
}

.footer-logo .logo-img {
  height: 64px;
  width: 64px;
}

.footer-logo span {
  color: var(--color-accent-light);
}

.footer-col h4 {
  color: var(--color-accent-light);
  margin-bottom: 16px;
  font-size: 1rem;
}

.footer-col ul li {
  margin-bottom: 10px;
  color: var(--color-secondary);
  opacity: 0.9;
  font-size: 0.92rem;
}

.footer-col ul li a:hover {
  color: var(--color-accent-light);
}

.footer-bottom {
  text-align: center;
  padding: 20px 0;
  font-size: 0.85rem;
  opacity: 0.8;
}

/* ===================================================
   Responsive
=================================================== */
@media (max-width: 992px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .why-grid,
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .enquiry-inner {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .logo-img {
    height: 34px;
    width: 34px;
  }

  .logo {
    font-size: 1.15rem;
    gap: 8px;
  }

  .footer-logo .logo-img {
    height: 38px;
    width: 38px;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-white);
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
    box-shadow: var(--shadow-md);
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .header-cta {
    display: none;
  }

  .hero-inner {
    flex-direction: column;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .about-highlights {
    justify-content: center;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .why-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
}