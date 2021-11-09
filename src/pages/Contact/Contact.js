import React from 'react';

import Content from '../../components/Content/Content';

const Contact = () => {

  const contact = {
    heading: 'Contact',
    content: 'Welcome to the Contact component'
  };

  return (
    <React.Fragment>
      <Content {...contact} />
    </React.Fragment>
  );
}

export default Contact;
