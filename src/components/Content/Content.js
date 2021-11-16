import React from 'react';
import './Content.css';
import { FiChevronsRight } from 'react-icons/fi';
import Videobar from '../../components/Videobar/Videobar';

const Content = ({heading, content, country, node, store}) => {

  const Heading = ({ heading }) => <h1>{heading}</h1>
  const ContentText = ({ contentText }) => <p>{contentText}</p>
  const CountryText = ({ countryText }) => <p>{countryText}</p>
  const NodeText = ({ nodeText }) => <p>{nodeText}</p>
  const StoreText = ({ storeText }) => <p>{storeText}</p>

  return (
    <div className="content-header">
      <Heading heading={`Welcome to the ${heading || 'defaultHead'} component`} />
      <ContentText contentText={content} />
      <div className="content-container">
        <div className="content-row">
          <div className="content-column">
            <CountryText countryText={country} />
          </div>
            <div className="content-arrow">
              <FiChevronsRight />
            </div>
          <div className="content-column">
            <NodeText nodeText={node} />
          </div>
            <div className="content-arrow">
              <FiChevronsRight />
            </div>
          <div className="content-column">
            <StoreText storeText={store} />
          </div>
        </div>
        <Videobar />
      </div>
    </div>
  );
}

export default Content;
