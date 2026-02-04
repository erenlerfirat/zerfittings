import Home from './components/pages/Home/Home.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About.js';
import DryDocking from './components/pages/Services/DryDocking.js'
import TechnicalSupply from './components/pages/Services/TechnicalSupply.js'
import RepairRetro from './components/pages/Services/RepairRetro.js'
import MarineAutomation from './components/pages/Services/MarineAutomation.js'
import Contact from './components/pages/Contact/Contact.js';
import Product from './components/pages/Product/Product.js';

function App() {

  return (
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/Services/DryDocking" element={<DryDocking />} />
        <Route path="/Services/TechnicalSupply" element={<TechnicalSupply />} />
        <Route path="/Services/RepairRetro" element={<RepairRetro />} />
        <Route path="/Services/MarineAutomation" element={<MarineAutomation />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Product/>} />
      </Routes>
  );
}

export default App;
