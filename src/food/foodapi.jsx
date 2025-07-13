import React, { use, useState } from 'react';
import Showfood from './showfood';

const Foodapi = ({data}) => {
    const mydata=use(data)
    
const[khabo,setKhabo]=useState([])

const func=(show)=>{
const newkhabo=[...khabo,show]
setKhabo(newkhabo)
}

    return (
        <div>
            {khabo.map((meal,index)=><h3 key={index}>NOW EATING: {meal.strCategory}</h3>)}
            <h2>Total meal: {mydata.meals.length}</h2>
            {mydata.meals.map((myD,index)=><Showfood func={func} key={index} show={myD}></Showfood>)}
        </div>
    );
};

export default Foodapi;