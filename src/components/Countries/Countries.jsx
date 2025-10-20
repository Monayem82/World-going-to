import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise)
    const countries=use(countriesPromise)
    // console.log(countries)

    const [visitedcountryList,setVisitedCountryList]=useState([])
    const [flagsCountry,setFlagsCountry]=useState([])

    const handleVisitedCountryList=(country)=>{
        console.log("List of Country list:",country.name.common)
        setVisitedCountryList([...visitedcountryList, country.name.common])
    }

    const handleFlagsCountry=(flags)=>{
        console.log("Flags country ",flags)
        setFlagsCountry([...flagsCountry, flags.png])
    }

    return (
        <div>
            <h2>Traveling Contries {visitedcountryList.length}</h2>
            <h3>Visited Country : {visitedcountryList} </h3>
            
            <div>
                <ol>
                    {
                    visitedcountryList.map(visitedCountry=><li>{visitedCountry}</li>)
                }

                </ol>
                <ol>
                    {
                        flagsCountry.map(flag=><img src={flag} alt="" />)
                    }
                </ol>
            </div>
            <div className='countries'>
                {
                countries.map(country=><Country 
                            country={country}
                            handleVisitedCountryList={handleVisitedCountryList}
                            handleFlagsCountry={handleFlagsCountry}
                            ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;