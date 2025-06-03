const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '2rem 1rem',
          maxWidth: '1200px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        {/* Name */}
        <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>
          Carlos Perez
        </h3>

        {/* Contact Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://github.com/CPerez220" target="_blank" rel="noreferrer" title="GitHub" style={{ color: '#00e0ff' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/carlos-manuel-perez" target="_blank" rel="noreferrer" title="LinkedIn" style={{ color: '#00e0ff' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:cmperez0730@gmail.com" title="Email" style={{ color: '#00e0ff' }}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+18317441452" title="Phone" style={{ color: '#00e0ff' }}>
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://cmperez0730.wixstudio.com/mysite" target="_blank" rel="noreferrer" title="My Site" style={{ color: '#00e0ff' }}>
            <i className="fas fa-globe"></i>
          </a>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: '0.9rem', color: '#ccc', margin: 0 }}>
          Built with React + Vite • Deployed on Vercel
        </p>

        {/* Quote */}
        <p style={{ fontStyle: 'italic', color: '#888', margin: 0 }}>
          “Turning dreams into code.”
        </p>

        {/* Copyright */}
        <p style={{ fontSize: '0.8rem', color: '#555', marginTop: '0.5rem' }}>
          © 2025 Carlos M. Perez
        </p>
      </div>
    </footer>
  );
};

export default Footer;