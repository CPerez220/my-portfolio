import fullstackProjects from '../data/fullstack';
import ProjectCard from '../components/ProjectCard';

function FullStackApps() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-white text-3xl font-bold mb-4">Full-Stack Applications</h2>

      {fullstackProjects.map((project, index) => (
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

export default FullStackApps;