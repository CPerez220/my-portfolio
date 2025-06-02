import ProjectCard from '../components/ProjectCard';

function MobileApps() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'white', marginBottom: '2rem' }}>Mobile Apps</h2>

      <ProjectCard
        title="TrackPay"
        description="A location-based employee time tracker app for construction and logistics."
        image="https://via.placeholder.com/600x300"
        stack="React Native, Firebase, Expo"
        link="https://github.com/cmperez0730/trackpay"
      />
    </div>
  );
}

export default MobileApps;