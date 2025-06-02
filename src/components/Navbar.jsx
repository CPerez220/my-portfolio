import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
    <Link to="/" style={{ margin: '1rem', color: '#fff' }}>Home</Link>
    <Link to="/fullstack" style={{ margin: '1rem', color: '#fff' }}>Full-Stack</Link>
    <Link to="/mobile" style={{ margin: '1rem', color: '#fff' }}>Mobile Apps</Link>
    <Link to="/games" style={{ margin: '1rem', color: '#fff' }}>Videogames</Link>
  </nav>
);

export default Navbar;