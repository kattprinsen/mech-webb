import React, { useState } from 'react';
import './DropDown.css';

const countries = ["Sweden", "Norway", "Denmark", "Iceland"];
const nodes = ["Malmö", "Köpenhamn", "Bergen", "Reykjavik"];
const stores = ["El-giganten", "Media-markt", "Emporia", "Dustin.se"]

const DropDown = () => {

  const [countriesOpen, setCountriesOpen] = useState(false);
  const [nodesOpen, setNodesOpen] = useState(false);
  const [storesOpen, setStoresOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const toggleCountries = () => setCountriesOpen(!countriesOpen);
  const toggleNodes = () => setNodesOpen(!nodesOpen);
  const toggleStores = () => setStoresOpen(!storesOpen);

  const onOptionClicked = value => () => {
    countriesOpen(value);
    setCountriesOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleCountries}>
        {selectedOption || "Countries"}
      </div>
      {countriesOpen && (
      <ul className="dropdown-list">
        {countries.map(option => (
          <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={Math.random()}>
            {option}
          </li>
        ))}
      </ul>
      )}
      <div className="dropdown-header" onClick={toggleNodes}>
        {selectedOption || "Nodes"}
      </div>
      {nodesOpen && (
      <ul className="dropdown-list">
        {nodes.map(option => (
          <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={Math.random()}>
            {option}
          </li>
        ))}
      </ul>
      )}
      <div className="dropdown-header" onClick={toggleStores}>
        {selectedOption || "Store"}
      </div>
      {storesOpen && (
      <ul className="dropdown-list">
        {stores.map(option => (
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
