import React, { useEffect, useState } from 'react';
import CovidCard from './CovidCard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const Covid = () =>{
    const [model ,setModel] = useState([]); 

    useEffect(()=>{
        const fetchApi = async() =>{
            
                const url = `https://covid19-api.org/api/status`
                const response = await fetch(url);
                const resJson = await response.json();
                setModel(resJson);
                console.log(resJson);
            };          
        
        fetchApi(); 
    },[]);
       
    return(   
        <>
         <div className="my-5">
            <h4 className="text-center"> Covid  Statstics</h4>
        </div>
        {
            !model.length ? (<p> No  data  </p>): (
            <div>
            <div className= "container-fluid mb-5">
            <div className="row">
                <div className=" col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            model.map((val,index) => {
                                console.log(val);
                                    return <CovidCard
                                            key={index}
                                            cases={val.cases} 
                                            deaths={val.deaths} 
                                            recovered={val.recovered} 
                                            country={val.country}/>                                                
                                            
                            })
                        }
                    </div>                  
                </div>
            </div>
        </div>
        </div>    

            )
        }
           
        
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status" >
                    <span className="visually-hidden">Loading...</span>
            </div> 
        </div> 
            
    </>
    );
}

export default Covid;