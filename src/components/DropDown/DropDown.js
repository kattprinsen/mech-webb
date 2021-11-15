import React, { useState } from 'react';
import './DropDown.css';

const options = ["React", "HTML", "JavaScript", "CSS"];

const DropDown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggling}>
        {selectedOption || "Frontend"}
      </div>
      {isOpen && (
      <ul className="dropdown-list">
        {options.map(option => (
          <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={Math.random()}>
            {option}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default DropDown;
