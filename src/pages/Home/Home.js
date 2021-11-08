import React from 'react';

import Hero from '../../components/Hero/Hero';
import Content from '../../components/Content/Content';

const Home = () => {

  const home = {
    heading: 'Home',
    content: 'This is the home component'
  };

  return (
    <div>
      <Hero />
      <Content {...home} />
    </div>
  );
}

export default Home;
