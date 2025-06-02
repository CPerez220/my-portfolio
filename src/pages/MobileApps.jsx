import mobileProjects from '../data/mobile';
import ProjectCard from '../components/ProjectCard';

function MobileApps() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-white text-3xl font-bold mb-4">Mobile Apps</h2>

      {mobileProjects.map((project, index) => (
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

export default MobileApps;