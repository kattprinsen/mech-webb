import React from 'react';

import Content from '../../components/Content/Content';
import Charts from '../../components/Charts/Charts';

const About = () => {

  const about = {
    heading: 'About',
    content: 'All about me here in good looking charts.'
  };

  return (
    <React.Fragment>
      <Content {...about} />
      <Charts />
    </React.Fragment>
  );
}

export default About;
