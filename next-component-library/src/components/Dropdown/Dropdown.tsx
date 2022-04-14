import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { DropdownProps } from './Dropdown.interfaces';

const Dropdown: React.FC<DropdownProps> = ({ data, title }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // set the dropdown to open or closed
  const toggleDropdown = () => setOpen(!isOpen);

  // set option as selected when clicked or spacebar is pressed on focus and close dropdown
  const handleItemClick = (id, item) => {
    selectedItem === item ? setSelectedItem(null) : setSelectedItem(item);
    setOpen(false);
  };

  // style logic for open (270*) and closed (90*) view of button in dropdown
  const chevronButtonClass = `rotate-270 ${isOpen && 'rotate-90'}`;

  return (
    <div className="dropdown border-2 w-full">
      <div id="dropdown-root">
        <ul className="dropdown-topList">
          <li>
            <Button
              className="dropdown-header p-2 flex justify-between align-items-center w-full"
              onClick={toggleDropdown}
              onKeyDown={toggleDropdown}
            >
              {/* if item is selected show its title, otherwise show the dropdown default text */}
              <span>{selectedItem ? selectedItem.label : title}</span>
              <Image
                width="24"
                height="24"
                src="/assets/iconChevronSign.svg"
                alt="click to display open or close dropdown menu items"
                className={chevronButtonClass}
              />
            </Button>
            <ul className={`dropdown-body p-1 ${isOpen ? 'open block border-t' : 'hidden'}`}>
              {data.map((item) => (
                <li key={`id-${item.id}`}>
                  <Button
                    className={`dropdown-item p-2 pl-3 hover:cursor-pointer w-full text-left ${
                      item === selectedItem ? 'selected bg-slate-300' : ''
                    }`}
                    onClick={(e) => handleItemClick(e.currentTarget.id, item)}
                    onKeyDown={(e) => handleItemClick(e.currentTarget.id, item)}
                    data-id={item.id as string}
                    data-parent-id={title}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
