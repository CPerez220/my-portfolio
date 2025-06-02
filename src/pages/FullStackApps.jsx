import ProjectCard from '../components/ProjectCard';

function FullStackApps() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'white', marginBottom: '2rem' }}>Full-Stack Applications</h2>

      <ProjectCard
        title="Carfarm"
        description="An AI-powered car shopping platform with smart search and transparent pricing."
        image="https://via.placeholder.com/600x300" // Replace with your image later
        stack="React, Node.js, Express, MongoDB, OpenAI API"
        link="https://github.com/cmperez0730/carfarm"
      />

      <ProjectCard
        title="Circulo"
        description="A community-based social media app for sharing posts and ideas."
        image="https://via.placeholder.com/600x300"
        stack="React, Firebase, Node.js, React Native"
        link="https://github.com/cmperez0730/circulo"
      />
    </div>
  );
}

export default FullStackApps;