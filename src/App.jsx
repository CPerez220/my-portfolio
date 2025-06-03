import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FullStackApps from './pages/FullStackApps';
import MobileApps from './pages/MobileApps';
import Videogames from './pages/Videogames';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#111',
      }}
    >
      <Navbar />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullstack" element={<FullStackApps />} />
          <Route path="/mobile" element={<MobileApps />} />
          <Route path="/games" element={<Videogames />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;