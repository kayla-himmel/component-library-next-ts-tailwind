import { useState } from 'react';
import { DropdownProps } from './Dropdown.interfaces';

const Dropdown: React.FC<DropdownProps> = ({ data, title }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {
          /*if selected item show its label, if not show the dropdown title */
          selectedItem ? selectedItem.id : title
        }
        <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map((item) => (
          <div className="dropdown-item" onClick={(e) => handleItemClick(e.currentTarget.id)} id={item.id as string}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
