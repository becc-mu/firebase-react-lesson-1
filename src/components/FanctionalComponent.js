import React from 'react';
import SayHello from './components/SayHello'

const FunctionalComponent = () => {
  const personToSayHelloTo = 'Amanda';

  return (
    <SayHello to={personToSayHelloTo} />
  );
}

export default FunctionalComponent