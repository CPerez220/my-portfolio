import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <i className="fas fa-code"></i>,
      title: 'Full-Stack Applications',
      description:
        'Complete web solutions combining front-end and back-end development, including e-commerce, tools, and AI apps.',
      route: '/fullstack',
    },
    {
      icon: <i className="fas fa-mobile-alt"></i>,
      title: 'Mobile Apps',
      description:
        'React Native, Swift, Kotlin apps for tools, utilities, and games across Android and iOS.',
      route: '/mobile',
    },
    {
      icon: <i className="fas fa-gamepad"></i>,
      title: 'VideoGames',
      description:
        'Games for web, mobile, and PC built with Unity and Unreal Engine in 2D and 3D.',
      route: '/games',
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '4rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', color: '#fff' }}>Hi, I'm Carlos Perez</h1>
        <p style={{ fontSize: '1.25rem', color: '#ccc', maxWidth: '700px', margin: '1rem auto' }}>
          Electrical Engineering student and Software Developer passionate about building web, mobile, and AI-powered apps.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/resume.pdf" className="button" download>
            <i className="fas fa-download"></i> Resume
          </a>
          <a href="#projects" className="button">
            <i className="fas fa-folder-open"></i> View Projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ minHeight: '100vh', marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          PROJECTS
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              style={{
                backgroundColor: '#00e0ff',
                width: '100%',
                maxWidth: '480px',
                minHeight: '360px',
                padding: '2rem',
                borderRadius: '6px',
                fontFamily: 'Space Mono, monospace',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                color: '#000',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
            >
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{card.title}</h3>
                <p style={{ fontSize: '1rem', marginTop: '0.75rem' }}>{card.description}</p>
              </div>
              <button className="button" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                MORE INFO
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Projects Section */}
      <section style={{ minHeight: '100vh', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>Latest Projects</h2>
        <p style={{ color: '#aaa', fontSize: '1rem' }}>
          Here are the most recent apps, games, and tools I've been working on — from real-world utility to fun experimental projects.
        </p>
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '480px', minHeight: '360px' }}>
            <h3>BattleRun</h3>
            <p>Mobile action game developed using Unity and C#.</p>
            <a href="https://example.com" className="button">
              <i className="fas fa-play"></i> Play
            </a>
          </div>
          <div className="card" style={{ width: '100%', maxWidth: '480px', minHeight: '360px' }}>
            <h3>Circulo</h3>
            <p>A full-stack social media app for creating interest-based communities.</p>
            <a href="https://example.com" className="button">
              <i className="fas fa-globe"></i> Visit Site
            </a>
          </div>
          <div className="card" style={{ width: '100%', maxWidth: '480px', minHeight: '360px' }}>
            <h3>TrackPay</h3>
            <p>A React Native time and location-based clock-in/out app for employees in logistics and construction.</p>
            <a href="https://example.com" className="button">
              <i className="fas fa-clock"></i> Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;