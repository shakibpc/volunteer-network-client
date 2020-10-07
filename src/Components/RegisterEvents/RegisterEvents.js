import React, { useContext, useEffect, useState } from 'react';
import './RegisterEvents.css';
import { UserContext } from '../../App';
import ShowRegisterEvents from '../ShowRegisterEvents/ShowRegisterEvents';

  
const RegisterEvents = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [registerEvent, setRegisterEvent] = useState([]);
  
  useEffect( () =>{
      fetch('https://dry-cove-21090.herokuapp.com/registerUserEvents?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data => setRegisterEvent(data));
  }, [])

  return (
    <div className="container">
    <div className="row my-4 p-4">
      {registerEvent.map((event) => (
        <ShowRegisterEvents event={event}></ShowRegisterEvents>
      ))}
    </div>
  </div>
  );
};
export default RegisterEvents;