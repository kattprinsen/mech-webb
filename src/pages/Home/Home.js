import React from 'react';

import Content from '../../components/Content/Content';

const Home = () => {

  const home = {
    heading: 'Home',
    content: 'This is the home component'
  };

  return (
    <React.Fragment>
      <Content {...home} />
    </React.Fragment>
  );
}

export default Home;
