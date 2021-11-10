import React from 'react';

import Content from '../../components/Content/Content';
import Table from '../../components/Table/Table';

const Contact = () => {

  const contact = {
    heading: 'Contact',
    content: 'Welcome to the Contact component'
  };

  return (
    <React.Fragment>
      <Content {...contact} />
      <Table />
    </React.Fragment>
  );
}

export default Contact;
