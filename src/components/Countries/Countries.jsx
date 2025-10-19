import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    console.log(countriesPromise)
    const countries=use(countriesPromise)
    console.log(countries)
    return (
        <div>
            <h2>Traveling Contries {countries.length}</h2>
            {
                countries.map(country=><Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;