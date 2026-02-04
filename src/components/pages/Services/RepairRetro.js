import img1 from '../../../assets/welding.jpg'
import { Link } from 'react-router-dom';
import ContactForm from '../Home/ContactForm';
import Footer from '../../layout/Footer';
import MainNavigation from '../../layout/MainNavigation';

export default function RepairRetro() {

  return (
    <>
    <MainNavigation/>
    <div className="min-h-screen bg-white text-gray-600 flex flex-col md:flex-row md:w-4/5 flex justify-self-center m-2">

      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-64 border-r px-6 py-8 space-y-6">

        {/* Services Navigation */}
        <nav className="space-y-3 text-sm font-medium">
          <h3 className="text-xs font-semibold uppercase mb-2">Services</h3>
          <ul className="space-y-2 flex flex-col  ">  
            <Link to="/Services/TechnicalSupply" className="hover:text-blue-600 cursor-pointer ">Technical Ship Supply &<br></br> Spare Parts</Link>        
            <Link to="/Services/RepairRetro" className="hover:text-blue-600 cursor-pointer bg-gray-200">Repair And Retrofit Services</Link>
            <Link to="/Services/MarineAutomation" className="hover:text-blue-600 cursor-pointer">Marine Automation Services</Link>             
            <Link to="/Services/DryDocking"  className="hover:text-blue-600 cursor-pointer">Dry-docking Services</Link>
          </ul>
        </nav>

       {/* OFFICE INFO */}
        <div >
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Office</h3>
          <p className="text-sm leading-5">
            Pınar Sokak ,Yayla, 34944 Tuzla/İstanbul<br />
            Tuzla / Istanbul
          </p>

          <h3 className="text-xs font-semibold text-gray-500 uppercase mt-4">Contact</h3>
          <p className="text-sm leading-5">
            sales@portlineglobal.co<br />
            (+90) 544 442 49 55
          </p>

          <h3 className="text-xs font-semibold text-gray-500 uppercase mt-4">Opening Hours</h3>
          <p className="text-sm leading-5">
            Mo–Fr: 8:00–19:00<br />
            Sa: 8:00–14:00<br />
            Su: closed
          </p>
        </div>

        {/* MAP */}
        <div className="pt-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.4527010838075!2d29.309765628299708!3d40.83347048905902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc317b8e1849%3A0x922b0b73a2ec059f!2sYayla%2C%20P%C4%B1nar%20Sk.%2C%2034944%20Tuzla%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1765282056086!5m2!1str!2str"
            width="100%"
            height="200"
            className="rounded border"
            allowFullScreen
            loading="lazy"
            title="Map"
          />
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-6 lg:px-12 py-8">

        {/* HERO IMAGE */}
        <div className="md:w-4/5 w-full h-72 md:h-96 overflow-hidden rounded-lg">
          <img
            src={img1}
            alt="Ship Spare Parts"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
            {/* PAGE HEADER */}
        <h1 className="mt-8 text-2xl font-bold tracking-wide text-gray-600 uppercase">
          Repair And Retrofit Services
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-gray-700">
          We can deliver full project management of repair and retrofit works, including:
        </p>

        {/* List */}
        <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600 list-disc pl-5 ">
          <li>Tank sludge, sediment, and contamination cleaning</li>
          <li>Corrosion control and surface preparation</li>
          <li>Work processes in compliance with IMO standards</li>
          <li>Preparation of design drawings</li>
          <li>3D scanning and modelling</li>
          <li>Engineering calculations</li>
          <li>Handling of plan approval process where necessary</li>
          <li>Supervision of repair and retrofit projects on site</li>
        </ul>
        </div>
      </main>
    </div>
    <ContactForm/>
    <Footer/>
    </>
  );
}
