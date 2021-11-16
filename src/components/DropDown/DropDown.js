import React, { useState } from 'react';
import Content from '../Content/Content';
import './DropDown.css';

const countries = ["Sweden", "Norway", "Denmark", "Iceland"];
const nodes = ["Malmö", "Köpenhamn", "Bergen", "Reykjavik"];
const stores = ["El-giganten", "Media-markt", "Emporia", "Dustin.se"]

const DropDown = () => {

  const [countriesOpen, setCountriesOpen] = useState(false);
  const [nodesOpen, setNodesOpen] = useState(false);
  const [storesOpen, setStoresOpen] = useState(false);

  const [selectedCountries, setSelectedCountries] = useState(null);
  const [selectedNodes, setSelectedNodes] = useState(null);
  const [selectedStores, setSelectedStores] = useState(null);

  const [disableCountries, setDisableCountries] = useState(false);
  const [disableNodes, setDisableNodes] = useState(true);
  const [disableStores, setDisableStores] = useState(true);

  const toggleCountries = () => setCountriesOpen(!countriesOpen);
  const toggleNodes = () => setNodesOpen(!nodesOpen);
  const toggleStores = () => setStoresOpen(!storesOpen);


  const data = {
    heading: "Dropdown data",
    content: "the data of your choices",
    country: selectedCountries,
    nodes: selectedNodes,
    store: selectedStores
  };

  const onOptionClicked = value => () => {

    if(countriesOpen) {
      setSelectedCountries(value);
      setCountriesOpen(false);
      setDisableNodes(false);
      setDisableCountries(true);
    }

    if(nodesOpen) {
      setSelectedNodes(value);
      setNodesOpen(false);
      setDisableStores(false);
      setDisableNodes(true);
    }

    if(storesOpen) {
      setSelectedStores(value);
      setStoresOpen(false);
      setDisableStores(true);
    }

  };

  if(selectedCountries, selectedNodes, selectedStores) {
    <Content {...data} />
  }

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" disabled={disableCountries} onClick={toggleCountries}>
        {selectedCountries || "Countries"}
      </div>
      {countriesOpen && (
      <ul className="dropdown-list-countries">
        {countries.map(option => (
          <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={Math.random()}>
            {option}
          </li>
        ))}
      </ul>
      )}
      <div className="dropdown-header" disabled={disableNodes} onClick={toggleNodes}>
        {selectedNodes || "Nodes"}
      </div>
      {nodesOpen && (
      <ul disabled="true" className="dropdown-list-nodes">
        {nodes.map(option => (
          <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={Math.random()}>
            {option}
          </li>
        ))}
      </ul>
      )}
      <div className="dropdown-header" disabled={disableStores} onClick={toggleStores}>
        {selectedStores || "Store"}
      </div>
      {storesOpen && (
      <ul disabled="true" className="dropdown-list-stores">
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
