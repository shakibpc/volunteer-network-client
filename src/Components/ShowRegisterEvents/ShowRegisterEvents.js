import React from 'react';
import './ShowRegisterEvents.css';

const ShowRegisterEvents = (props) => {
    const event = props.event;
    console.log(props);


    return (
    <div className="col-md-3">
      <div  className="card-item m-3">
          <img className="w-100" src={event.photo} alt=""/>
        <h5
          style={{ color: '#fff', fontSize: '18px' }}
          className="text-center px-2 py-4">
          Event Name: {event.eventName}
        </h5>
        <h5
          style={{ color: '#fff', fontSize: '18px' }}
          className="text-center px-2 py-4">
          Event Discription: {event.description}
        </h5>
        <h5
          style={{ color: '#fff', fontSize: '18px' }}
          className="text-center px-2 py-4">
          Event Date: {event.date}
        </h5>
        <button className="btnsre">Cansel</button>
      </div>
    </div>
    );
};

export default ShowRegisterEvents;