import React from 'react';
import './Content.css';
import { FiChevronsRight } from 'react-icons/fi';
import Videobar from '../../components/Videobar/Videobar';

const Content = ({heading, content}) => {

  const Heading = ({ heading }) => <h1>{heading}</h1>
  const ContentText = ({ contentText }) => <p>{contentText}</p>

  return (
    <div className="content-header">
      <Heading heading={`Welcome to the ${heading || 'defaultHead'} component`} />
      <ContentText contentText={content} />
      <div className="content-container">
        <div className="content-row">
          <div className="content-column">
            Hehe mixed grid layout
          </div>
            <div className="content-arrow">
              <FiChevronsRight />
            </div>
          <div className="content-column">
            Hehe mixed grid layout
          </div>
            <div className="content-arrow">
              <FiChevronsRight />
            </div>
          <div className="content-column">
            Hehe mixed grid layout
          </div>
            <div className="content-arrow">
              <FiChevronsRight />
            </div>
          <div className="content-column">
            Hehe mixed grid layout
          </div>
        </div>
        <Videobar />
      </div>
    </div>
  );
}

export default Content;
