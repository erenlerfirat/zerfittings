    import { useState, useEffect, useRef } from "react";
    import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-react";
    import { Link } from "react-router-dom";
    import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


    function ServicesDropdown() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuToggle = (title) => {
    setOpenMenu(prev => (prev === title ? null : title));
  };

  return (
    <Dropdown
      renderTrigger={() => (
        <span className="cursor-pointer hover:text-teal-600">
          Ürünler <FontAwesomeIcon icon={faChevronDown} />
        </span>
      )}
      inline
    >
      
      <SubMenu
        title="Hijyenik Paslanmaz Ürünler"
        isOpen={openMenu === "Hijyenik Paslanmaz Ürünler"}
        onToggle={() => handleMenuToggle("Hijyenik Paslanmaz Ürünler")}
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
        isOpen={openMenu === "Endüstriyel Ürünler"}   
        onToggle={() => handleMenuToggle("Endüstriyel Ürünler")}
        items={[
          { to: "/disli-fittings", label: "Dişli Fittings" },
          { to: "/kaynakli-fittings", label: "Kaynaklı Fittings" },
        ]}
      />

      <DropdownDivider />

      <DropdownItem as={Link} to="/boru">
         Boru
      </DropdownItem>

      <DropdownDivider />
      
      <DropdownItem as={Link} to="/profil">
        Profil
      </DropdownItem>

    </Dropdown>
  );
}


   function SubMenu({ title, items, isOpen, onToggle }) {
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && submenuRef.current && !submenuRef.current.contains(e.target)) {
        onToggle();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={submenuRef}>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
        className={`flex justify-between items-center w-64 px-4 py-2 text-sm cursor-pointer hover:bg-gray-100
          ${isOpen ? "text-teal-600 bg-gray-50" : "text-gray-700"}`}
      >
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`text-[10px] transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="md:absolute md:top-0 md:right-full md:ml-1 min-w-[220px] bg-white shadow-xl border rounded-lg z-[100]">
          <ul className="py-2">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="block px-4 py-2 text-sm hover:bg-teal-50"
                  onClick={onToggle}
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

