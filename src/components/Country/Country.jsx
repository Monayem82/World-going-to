import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountryList,handleFlagsCountry}) => {
    const {name,flags}=country

    const [visited,setVisited]=useState(false)
    const [countvisited,setCountvisited]=useState(0)

    // console.log(handleVisitedCountryList)

    const handleVisited=()=>{
        // if(visited ===true){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        // setVisited(!false)
        visited ? setVisited(false) : setVisited(true)
        visited ? setCountvisited(countvisited-1) : setCountvisited(countvisited+1)

        handleVisitedCountryList(country)
        // console.log(countvisited)
        
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            Country Name : {name.common} {countvisited} <br />
            <img src={flags.png} alt="" />
            <button className={visited ? 'btn-visited' : 'btn-notVisited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={()=>handleFlagsCountry(flags)}>Add Flag</button>
        </div>
    );
};

export default Country;