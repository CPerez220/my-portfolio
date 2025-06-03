import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Full-Stack', path: '/fullstack' },
    { name: 'Mobile Apps', path: '/mobile' },
    { name: 'Videogames', path: '/games' },
  ];

  const visibleLinks = links.filter(link => link.path !== currentPath);

  return (
    <nav
      style={{
        background: '#111',
        color: '#fff',
        padding: '1.2rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
      }}
    >
      {/* Left: CMP Logo */}
      <a
        href="https://cmperez0730.wixstudio.com/mysite"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#00e0ff',
          textDecoration: 'none',
        }}
      >
        CMP
      </a>

      {/* Center: Navigation Links */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        {visibleLinks.map(link => (
          <Link
            key={link.name}
            to={link.path}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              padding: '0.3rem 0.6rem',
              borderRadius: '5px',
              transition: '0.3s',
            }}
            onMouseEnter={e => {
              e.target.style.background = '#333';
              e.target.style.color = '#00e0ff';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#fff';
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Social Icons */}
      <div style={{ display: 'flex', gap: '1.2rem' }}>
        <a
          href="https://github.com/CPerez220"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '1.3rem' }}
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-manuel-perez"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '1.3rem' }}
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;