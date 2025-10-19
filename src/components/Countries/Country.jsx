import React from 'react';

const Country = ({country}) => {
    const {name}=country
    return (
        <div>
            Country Name : {name.common} 
        </div>
    );
};

export default Country;