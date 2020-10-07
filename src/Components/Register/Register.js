import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import Logo from '../../images/logos/Group 1329.png';
import { Link, useParams, } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState({
        name:"",
        email: "",
        date: "",
        description: "",
        eventName: "",
    });
    useEffect(()=>{
        setEvent({
            ...event,
            name:loggedInUser.name,
            email:loggedInUser.email,
            eventName: name,
        })
    },[])
    const handleChangeInput = (e) => {
        setEvent({...event,[e.target.name]:e.target.value})
    };

    const handelRegister = () => {
        fetch('https://dry-cove-21090.herokuapp.com/addNewRegister', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
         },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            });
    };

    return (
        <div className="register">
            <div className="container">
                <div className="logo-container text-center p-4">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <form action="/addNewRegister" method="post" >
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e)=>handleChangeInput(e)}
                            name="name"
                            type="text"
                            defaultValue={loggedInUser.name}
                            placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e)=>handleChangeInput(e)}
                            name="email"
                            type="email"
                            defaultValue={loggedInUser.email}

                            placeholder="Your email" />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e)=>handleChangeInput(e)}
                            name="date"
                            type="date"
                            defaultValue={event.date}
                            placeholder="Date" />

                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e)=>handleChangeInput(e)}
                            name="description"
                            type="text"
                            defaultValue={event.description}
                            placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e)=>handleChangeInput(e)}
                            name="eventName"
                            type="text"
                            defaultValue= {name}
                            placeholder="Event name" />

                    </div>
                    <div className="form-group">
                        <Link to="/registerEvents"> <button type="submit" onClick={handelRegister} className="registerBtn btn btn-block">
                            Register
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;