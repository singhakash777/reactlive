import React, { useState } from 'react';


const Contact = () =>{

    const [data,setData] = useState({
        fullName:'',
        phone:'',
        email:'',
        message:''
    });

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return  { 
                    ...preVal,
                    [name]: value
                    };
                 })

    }

    const formSubmit = (event) =>{
            event.preventDefault();
            alert(`My name ${data.fullName} and phone ${data.phone} and email ${data.email}`);            
    }
    return (<>
             <div className="my-5">
                 <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-col-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={InputEvent}
                                    placeholder="Enter your Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" 
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your contact number"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" 
                                name="message"
                                value={data.message}
                                onChange={InputEvent}
                                id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>);
}

export default Contact;