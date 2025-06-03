import gameProjects from '../data/games';
import ProjectCard from '../components/ProjectCard';

function Videogames() {
  return (
    <div className="container space-y-8">
      <h2 className="text-white text-3xl font-bold mb-4">Videogames</h2>

      {gameProjects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          stack={project.stack}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Videogames;