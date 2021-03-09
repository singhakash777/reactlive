import React from 'react';
import { NavLink } from 'react-router-dom';


const CovidCard = (props) =>{
    
    return(
        <>
            <div className="col-md-4 col-10 mx-auto ">
                <div className="card" >                    
                        <div className="card-body">
                            <h5 className="text-center">{props.country}</h5>
                            <p> cases: {props.cases} </p><br></br>
                            <p style={{color:"red"}}> deaths: {props.deaths} </p><br></br>
                            <p style={{color:"green"}}> recovered: {props.cases} </p><br></br>
                            <NavLink to="/service" className="btn btn-primary">Back</NavLink>
                        </div>
                </div>                            
        </div>
        </>
       
    );
}

export default CovidCard;