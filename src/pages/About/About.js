import React from 'react';

import Hero from '../../components/Hero/Hero';
import Content from '../../components/Content/Content';

const About = () => {

  const about = {
    heading: 'About',
    content: 'All about me here'
  };

  return (
    <div>
      <Hero />
      <Content {...about} />
    </div>
  );
}

export default About;
