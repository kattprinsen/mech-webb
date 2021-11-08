import React from 'react';

import Hero from '../../components/Hero/Hero';
import Content from '../../components/Content/Content';

const Contact = () => {

  const contact = {
    heading: 'Contact',
    content: 'Welcome to the Contact component'
  };

  return (
    <div>
      <Hero />
      <Content {...contact} />
    </div>
  );
}

export default Contact;
