import { Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServicesDropdown() {
  return (
    <Dropdown
      renderTrigger={() => (
        <span className="cursor-pointer hover:text-teal-600 ">
          Services <FontAwesomeIcon icon={faChevronDown} />
        </span>
      )}
      inline // keeps it inline with your navbar
    >

      <DropdownItem>
        <Link to="/Services/TechnicalSupply">Technical Ship Supply & Spare Parts</Link>
      </DropdownItem>

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