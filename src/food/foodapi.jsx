import React, { use } from 'react';
import Showfood from './showfood';

const Foodapi = ({data}) => {
    const mydata=use(data)
    
    return (
        <div>
            <h2>Total meal: {mydata.meals.length}</h2>
            {mydata.meals.map((myD,index)=><Showfood key={index} show={myD}></Showfood>)}
        </div>
    );
};

export default Foodapi;