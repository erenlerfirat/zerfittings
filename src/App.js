import Home from './components/pages/Home/Home.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About.js';
import Contact from './components/pages/Contact/Contact.js';
import Catalog from './components/pages/Catalog/Catalog.js';
import StainlessClamp from './components/pages/Products/hygiene/StainlessClamp.js';
import StainlessTee from './components/pages/Products/hygiene/StainlessTee.js';
import StainlessFilter from './components/pages/Products/hygiene/StainlessFilter.js';
import StainlessJoint from './components/pages/Products/hygiene/StainlessJoint.js';
import WeldedFittings from './components/pages/Products/industry/WeldedFittings.js';
import ThreadedFittings from './components/pages/Products/industry/ThreadedFittings.js';
import Pipe from './components/pages/Products/pipe/Pipe.js';
import Profile from './components/pages/Products/profile/Profile.js';

function App() {

  return (
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Catalog" element={<Catalog/>} /> */}
        <Route path="/urunler/paslanmaz-dirsek" element={<StainlessJoint/>} />
        <Route path="/urunler/paslanmaz-tee" element={<StainlessTee/>} />
        <Route path="/urunler/paslanmaz-boru-kelepce" element={<StainlessClamp/>} />
        <Route path="/urunler/paslanmaz-filtre" element={<StainlessFilter/>} />
        <Route path="/disli-fittings" element={<ThreadedFittings/>} />
        <Route path="/kaynakli-fittings" element={<WeldedFittings/>} />
        <Route path="/boru" element={<Pipe/>} />
        <Route path="/profil" element={<Profile/>} />
      </Routes>
  );
}

export default App;
