const ProjectCard = ({ title, description, image, stack, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>

      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '0.75rem',
          }}
        />
      )}

      <p>{description}</p>
      <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>🛠 {stack}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <i className="fas fa-arrow-right"></i> View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;