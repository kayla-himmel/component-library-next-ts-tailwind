import Image from 'next/image';
import { useState } from 'react';
import { DropdownProps } from './Dropdown.interfaces';

const Dropdown: React.FC<DropdownProps> = ({ data, title }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id, item) => {
    selectedItem === item ? setSelectedItem(null) : setSelectedItem(item);
  };

  return (
    <div className="dropdown border-2 w-full">
      <div id="dropdown-root">
        <ul className="dropdown-topList">
          <li>
            <button
              className="dropdown-header p-2 flex justify-between align-items-center w-full"
              onClick={toggleDropdown}
              data-menu-id="dropdown-root"
            >
              {/* if selected item show its label, if not show the dropdown title */}
              <span>{selectedItem ? selectedItem.label : title}</span>
              <Image
                width="24"
                height="24"
                src="/assets/iconChevronSign.svg"
                alt="arrow to display dropdown menu open or closed"
                className={`rotate-270 ${isOpen && 'rotate-90'}`}
              />
            </button>
            <ul className={`dropdown-body p-1 ${isOpen ? 'open block border-t' : 'hidden'}`}>
              {data.map((item) => (
                <li key={`id-${item.id}`}>
                  <button
                    className={`dropdown-item p-2 pl-3 hover:cursor-pointer w-full text-left ${
                      item === selectedItem ? 'selected bg-slate-300' : ''
                    }`}
                    onClick={(e) => handleItemClick(e.currentTarget.id, item)}
                    id={item.id as string}
                    key={`id-${item.id}`}
                    data-menu-id="dropdown-root"
                    data-parent-id={title}
                  >
                    {item.label}
                  </button>
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
