import React from 'react';

import Content from '../../components/Content/Content';
import Table from '../../components/Table/Table';

const Home = () => {

  const home = {
    heading: 'Home',
    content: 'This is the home component'
  };

  return (
    <React.Fragment>
      <Content {...home} />
      <Table />
    </React.Fragment>
  );
}

export default Home;
