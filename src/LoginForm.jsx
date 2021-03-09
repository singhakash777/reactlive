import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LoginForm = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });

    const inputEvent = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const {name,value} = event.target;

        setFormData((preValue) =>{
            console.log(preValue);
            return {
            ...preValue,
            [name]: value,
            };           
        });
    };

    const onSubmits = (event) =>{
        event.preventDefault();
        alert("form submitted");
    }

    return(
        <>
        <div>
            <form onSubmit = {onSubmits}>
                <h1> My Name is  {formData.fname} {formData.lname}</h1>
                <p> email : {formData.email}</p>
                <p>phone : {formData.phone}</p>

                <input type = "text" 
                placeholder = "Enter your first Name"
                name = "fname"
                onChange= {inputEvent}
                value={formData.fname} />
                <br />

                <input type = "text" 
                placeholder = "Enter your last Name"
                name = "lname"
                onChange= {inputEvent}
                value={formData.lname} />
                <br />

                <input type = "text" 
                placeholder = "Enter your email"
                name = "email"
                onChange= {inputEvent}
                value={formData.email} />
                <br />

                <input type = "number" 
                placeholder = "Enter your phone"
                name = "phone"
                onChange= {inputEvent}
                value={formData.phone} />
                
            </form>
        </div>
        </>
    );



}



export default LoginForm;