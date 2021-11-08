import React from 'react';
import './Content.css';

const Content = ({heading, content}) => {
  heading = heading || 'defaultHeader'; //default prop handler for no heading

  const Heading = ({ heading }) => <h1>{heading}</h1>
  const ContentText = ({ contentText }) => <p>{contentText}</p>

  return (
    <div className="content-header">
      <Heading heading={`Welcome to the ${heading} component`} />
      <ContentText contentText={content} />
      <div className="content-row">
        <div className="content-column">
          <span> Lolwut </span>
          <span> Lolwut </span>
          <span> Lolwut </span>
          <span> Lolwut </span>
          <span> Lolwut </span>
          <span> Lolwut </span>
        </div>
      </div>
    </div>
  );
}

export default Content;
