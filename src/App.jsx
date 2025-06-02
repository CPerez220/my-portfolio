import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FullStackApps from './pages/FullStackApps';
import MobileApps from './pages/MobileApps';
import Videogames from './pages/Videogames';

/*function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<FullStackApps />} />
        <Route path="/mobile" element={<MobileApps />} />
        <Route path="/games" element={<Videogames />} />
      </Routes>
      <Footer />
    </div>
  );
}*/
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Tailwind CSS is working!</h1>
    </div>
  );
}

export default App;