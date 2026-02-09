import { useState, useEffect, useRef } from "react";
import { Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { faChevronDown,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServicesDropdown() {

  const [openSub, setOpenSub] = useState(false);
  const submenuRef = useRef(null);

  // Close submenu if clicking outside the dropdown area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setOpenSub(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Dropdown
      renderTrigger={() => (
        <span className="cursor-pointer hover:text-teal-600 ">
          Services <FontAwesomeIcon icon={faChevronDown} />
        </span>
      )}
      inline // keeps it inline with your navbar
    >

      {/* We use a div instead of DropdownItem here to prevent 
        Flowbite's internal click-handler from throwing errors 
      */}
      <div className="relative" ref={submenuRef}>
        <div 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); 
            setOpenSub(!openSub);
          }}
          className={`flex justify-between items-center w-64 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${openSub ? 'text-teal-600 bg-gray-50' : 'text-gray-700'}`}
        >
          <span>Technical Ship Supply</span>
          <FontAwesomeIcon 
            icon={faChevronRight} 
            className={`text-[10px] transition-transform duration-200 ${openSub ? 'rotate-90' : ''}`} 
          />
        </div>
        
        {/* The Flyout Sub-menu */}
        {openSub && (
          <div className="
            relative left-0 w-full             /* Mobile: Stays inline/accordion */
            md:absolute md:left-full md:top-0   /* Desktop: Flies out to the right */
            md:min-w-[220px] md:ml-1 md:shadow-xl
            bg-gray-50 md:bg-white 
            border-l-4 border-teal-500 md:border-l md:border-gray-200 
            rounded-r-lg z-[100]
          ">
            <ul className="py-2">
              <li>
                <Link 
                  to="/Services/TechnicalSupply/Engine" 
                  className="block px-8 md:px-4 py-2 text-sm text-gray-700 hover:bg-teal-100 md:hover:bg-teal-50 hover:text-teal-600"
                  onClick={() => setOpenSub(false)}
                >
                  Engine Spare Parts
                </Link>
              </li>
              <li>
                <Link 
                  to="/Services/TechnicalSupply/Deck" 
                  className="block px-8 md:px-4 py-2 text-sm text-gray-700 hover:bg-teal-100 md:hover:bg-teal-50 hover:text-teal-600"
                  onClick={() => setOpenSub(false)}
                >
                  Deck & Engine Stores
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <DropdownDivider />

      {/* <DropdownItem>
        <Link to="/Services/TechnicalSupply">Technical Ship Supply & Spare Parts</Link>
      </DropdownItem> */}

      <DropdownDivider />

      <DropdownItem>
        <Link to="/Services/RepairRetro">Repair And Retrofit Services</Link>
      </DropdownItem>

      <DropdownDivider />

      <DropdownItem>
        <Link to="/Services/MarineAutomation">Marine Automation Services</Link>
      </DropdownItem>

      <DropdownDivider />

      <DropdownItem>
        <Link to="/Services/DryDocking">Dry-Docking Services</Link>
      </DropdownItem>
    </Dropdown>
  );
}

export default ServicesDropdown