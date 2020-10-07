import React from 'react';
import fakeData from '../../fakeData';
import Event from '../Event/Event';

const Events = () => {
  const data = fakeData;

  console.log(data);
  return (
    <div className="container">
      <div className="row my-4 p-4">
        {data.map((item) => (
          <Event item={item}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;