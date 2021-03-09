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

        <div className="col-md-4 col-10 mx-auto ">
            <div className="card my-5" >                    
                    <div className="container-fluid">
                            <span class="icon"><i class="fa fa-search"></i></span>                       
                            <input type="search"
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
                                             <h5> Pressure: {model.pressure}  Cel</h5>
                                             <h5> humidity: {model.humidity}  Cel</h5>
                                        </div>
                                    </div>
                             )
                        }                       
                       
                    </div>
                    <NavLink to="/service" class="btn btn-primary">Back</NavLink>
            </div>                            
        </div>
       
    );
}

export default Weather;