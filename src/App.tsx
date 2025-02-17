import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { StateLocations } from './pages/StateLocations';
import { LocationDetails } from './pages/LocationDetails';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-overlay" />
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state/:state" element={<StateLocations />} />
            <Route path="/location/:state/:name" element={<LocationDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;