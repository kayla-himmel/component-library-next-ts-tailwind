import { useState } from 'react';
import { DropdownData, DropdownProps } from './Dropdown.interfaces';

const Dropdown: React.FC<DropdownProps> = ({ data, title }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id, item) => {
    selectedItem === item ? setSelectedItem(null) : setSelectedItem(item);
  };

  return (
    <div className="dropdown border-2 rounded-sm w-100">
      <button className="dropdown-header p-2 flex justify-between align-items-center" onClick={toggleDropdown}>
        {
          /*if selected item show its label, if not show the dropdown title */
          selectedItem ? selectedItem.label : title
        }
        <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
      </button>
      <div className={`dropdown-body p-1 ${isOpen ? 'open block' : 'hidden'}`}>
        {items.map((item) => (
          <div
            className={`dropdown-item p-2 hover:cursor-pointer ${item === selectedItem ? 'selected bg-slate-500' : ''}`}
            onClick={(e) => handleItemClick(e.currentTarget.id, item)}
            id={item.id as string}
            key={`id-${item.id}`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
