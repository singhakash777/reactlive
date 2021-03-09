import React from 'react';
import { NavLink } from 'react-router-dom';

import web from "../src/images/home.jpg";


const Common = (props) =>{
    return (<>
        <div className= "container-fluid">
            <div className="row">
                <div className=" col-10 mx-auto">
                    <section id="header">
                        <div style= {{width:"80%", textAlign:"center"}}>            
                            <table style={{width:"100%",textAlign: "center" }}>
                                <tr>
                                    <td style={{width:"40%",textAlign: "right" }}>
                                        <div className="order-2 order-lg-1 d-flex justify-content-center flex-column">
                                            <h2>
                                                My first reactive app has <strong className="brand-name"> Multiple functionalities </strong>
                                            </h2> 
                                            <h3 >
                                                This reactive app has section of service which has covid and weather report.
                                            </h3>
                                            <div >
                                                <NavLink to={props.visit} className="btn-get-started">
                                                    Get {props.name}
                                                </NavLink>
                                            </div>
                                        </div>
                                        
                                    </td>
                                    <td style={{widt:"20%"}}></td>
                                    <td style={{width:"40%",textAlign: "left"}}>
                                    <img src={web} className="img-fluid animated" alt= "home img" /> 
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
           </div>         
    </>);
}

export default Common;