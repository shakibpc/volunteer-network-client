import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css';

const Event = (props) => {
  const event = props.item;

  const handleClick = () => {
    console.log('hello');
  };

  return (
    <div className="col-md-3">
      <div onClick={handleClick} className="card-item m-3">
        <Link to={`/register/${event.name}`}>
          <img className="w-100" src={event.photo} alt=""/>
        <p
          style={{ color: '#fff', fontSize: '18px' }}
          className="text-center px-2 py-4"
        >
          {event.name}
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Event;