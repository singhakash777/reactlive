import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';





const Weather = () =>{
    const [search,setSearch]= useState('noida');

    const [model ,setModel] = useState(null);
  

    useEffect(()=>{
        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&&units=metric&appid=6bcb87e868aec276a7232dea5006ce49`
            const response = await fetch(url);
            const resJson = await response.json();
            setModel(resJson.main);
        }
        fetchApi(); 
    },[search]);
   
    
    return( 
        <>
        <div className="my-5">
            <h4 className="text-center"> Weather  search</h4>
        </div>

        <div className="col-md-4 col-10 mx-auto ">
            <div className="card border-3 my-5" style={{backgroundColor:"aliceblue"}} >                    
                    <div className="container-fluid">
                                                 
                            <input type="search" className="my-4 mx-auto "
                                value={search}                                
                                  onChange={(event) => {setSearch(event.target.value)}}></input>
                        
                        <br></br>
                        {
                             !model ? (
                                 <p>No  data  found</p>
                             ) :(
                                    <div className="my-5 mx-mx-auto">
                                        <div >
                                             <h5> location: {search} </h5>
                                             <h5> Min Temp: {model.temp_min}  Cel</h5>
                                             <h5> Max Temp: {model.temp_max}  Cel</h5>
                                             <h5> Pressure: {model.pressure} hPa </h5>
                                             <h5> humidity: {model.humidity}  % </h5>
                                        </div>
                                    </div>
                             )
                        }                       
                       
                    </div>
                    <NavLink to="/service" class="btn btn-primary">Back</NavLink>
            </div>                            
        </div>
       
        </>     
        
    );
}

export default Weather;