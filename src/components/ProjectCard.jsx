const ProjectCard = ({ title, description, image, stack, link }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '10px',
      padding: '1rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '700px'
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '0.5rem'
          }}
        />
      )}
      <p style={{ marginBottom: '0.5rem' }}>{description}</p>
      <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>🛠 {stack}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007acc', textDecoration: 'none' }}
        >
          🔗 View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;