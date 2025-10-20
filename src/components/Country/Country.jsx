import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountryList,handleFlagsCountry}) => {
    const {name,flags}=country

    const [visited,setVisited]=useState(false)
    const [flagsAdd,setFlagsAdd]=useState(false)
    // const [countvisited,setCountvisited]=useState(0)

    // console.log(handleVisitedCountryList)

    const handleVisited=()=>{
        // if(visited ===true){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        // setVisited(!false)
        visited ? setVisited(false) : setVisited(true)
        // visited ? setCountvisited(countvisited-1) : setCountvisited(countvisited+1)

        visited ? handleVisitedCountryList(country,false) : handleVisitedCountryList(country,true)
        // handleVisitedCountryList(country)
        // console.log(countvisited)
        
    }

    const handleAddFlage=()=>{
        console.log("ffffffffffffff",flagsAdd)
        flagsAdd ? setFlagsAdd(false) : setFlagsAdd(true)
        console.log("ffffffffffffff",flagsAdd)
        flagsAdd ? handleFlagsCountry(flags,false) :handleFlagsCountry(flags,true)
        console.log("ffffffffffffff",flagsAdd)
        // handleFlagsCountry(flags)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            Country Name : {name.common} {} <br />
            <img src={flags.png} alt="" />
            <button className={visited ? 'btn-visited' : 'btn-notVisited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={handleAddFlage}>{flagsAdd ? 'Remove Flag' : 'Add Flag'}</button>
        </div>
    );
};

export default Country;