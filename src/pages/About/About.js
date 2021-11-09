import React from 'react';

import Content from '../../components/Content/Content';

const About = () => {

  const about = {
    heading: 'About',
    content: 'All about me here'
  };

  return (
    <React.Fragment>
      <Content {...about} />
    </React.Fragment>
  );
}

export default About;
