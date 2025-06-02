import ProjectCard from '../components/ProjectCard';

function Videogames() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'white', marginBottom: '2rem' }}>Videogames</h2>

      <ProjectCard
        title="Codefowl"
        description="A 2D platformer game developed as part of a bootcamp capstone."
        image="https://via.placeholder.com/600x300"
        stack="JavaScript, HTML5 Canvas, Tiled"
        link="https://github.com/cmperez0730/codefowl"
      />
    </div>
  );
}

export default Videogames;