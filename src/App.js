import { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/pages/Home/Home.js'));
const About = lazy(() => import('./components/pages/About/About.js'));
const Contact = lazy(() => import('./components/pages/Contact/Contact.js'));
const StainlessClamp = lazy(() => import('./components/pages/Products/hygiene/StainlessClamp.js'));
const StainlessTee = lazy(() => import('./components/pages/Products/hygiene/StainlessTee.js'));
const StainlessFilter = lazy(() => import('./components/pages/Products/hygiene/StainlessFilter.js'));
const StainlessJoint = lazy(() => import('./components/pages/Products/hygiene/StainlessJoint.js'));
const WeldedFittings = lazy(() => import('./components/pages/Products/industry/WeldedFittings.js'));
const ThreadedFittings = lazy(() => import('./components/pages/Products/industry/ThreadedFittings.js'));
const Pipe = lazy(() => import('./components/pages/Products/pipe/Pipe.js'));
const Profile = lazy(() => import('./components/pages/Products/profile/Profile.js'));
const IndustrialCard = lazy(() => import('./components/pages/Home/ProductMenu/IndustrialCard.js'));
const StainlessHygieneCard = lazy(() => import('./components/pages/Home/ProductMenu/StainlessHygieneCard.js'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/urunler/paslanmaz-dirsek" element={<StainlessJoint />} />
        <Route path="/urunler/paslanmaz-tee" element={<StainlessTee />} />
        <Route path="/urunler/paslanmaz-boru-kelepce" element={<StainlessClamp />} />
        <Route path="/urunler/paslanmaz-filtre" element={<StainlessFilter />} />
        <Route path="/urunler/disli-fittings" element={<ThreadedFittings />} />
        <Route path="/urunler/kaynakli-fittings" element={<WeldedFittings />} />
        <Route path="/boru" element={<Pipe />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/industrial" element={<IndustrialCard />} />
        <Route path="/stainless" element={<StainlessHygieneCard />} />
      </Routes>
    </Suspense>
  );
}

export default App;