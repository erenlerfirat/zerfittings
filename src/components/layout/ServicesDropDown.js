import { useState, useEffect, useRef } from "react";
import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ServicesDropdown() {
  return (
    <Dropdown
      renderTrigger={() => (
        <span className="cursor-pointer hover:text-teal-600 ">
          Ürünler <FontAwesomeIcon icon={faChevronDown} />
        </span>
      )}
      inline 
    >
      <SubMenu 
        title="Hijyenik Paslanmaz Ürünler" 
        items={[
          { to: "/urunler/paslanmaz-dirsek", label: "Paslanmaz Dirsek" },
          { to: "/urunler/paslanmaz-tee", label: "Paslanmaz Tee" },
          { to: "/urunler/paslanmaz-boru-kelepce", label: "Paslanmaz Boru Kelepçe" },
          { to: "/urunler/paslanmaz-filtre", label: "Paslanmaz Filtre" },
        ]} 
      />

      <DropdownDivider />

      <SubMenu 
        title="Endüstriyel Ürünler" 
        items={[
          { to: "/urunler/disli-fittings", label: "Dişli Fittings" },
          { to: "/urunler/kaynakli-fittings", label: "Kaynaklı Fittings" },
        ]} 
      />

      <DropdownDivider />

      <DropdownItem>
        <Link to="/urunler/boru">Boru</Link>
      </DropdownItem>

      <DropdownDivider />
      
      <DropdownItem>
        <Link to="/urunler/profil">Profil</Link>
      </DropdownItem>
    </Dropdown>
  );
}

function SubMenu({ title, items }) {
  const [open, setOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={submenuRef}>
      <div 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation(); 
          setOpen(!open);
        }}
        className={`flex justify-between items-center w-64 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${open ? 'text-teal-600 bg-gray-50' : 'text-gray-700'}`}
      >
        <span>{title}</span>
        <FontAwesomeIcon 
          icon={faChevronRight} 
          className={`text-[10px] transition-transform duration-200 ${open ? 'rotate-90' : ''}`} 
        />
      </div>
      
      {open && (
        <div className="relative left-0 w-full md:absolute md:left-full md:top-0 md:min-w-[220px] md:ml-1 md:shadow-xl bg-gray-50 md:bg-white border-l-4 border-teal-500 md:border-l md:border-gray-200 rounded-r-lg z-[100]">
          <ul className="py-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.to} 
                  className="block px-8 md:px-4 py-2 text-sm text-gray-700 hover:bg-teal-100 md:hover:bg-teal-50 hover:text-teal-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


export default ServicesDropdown;

