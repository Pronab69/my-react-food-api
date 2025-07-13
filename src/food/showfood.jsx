import React from 'react';

const Showfood = ({show,func}) => {
  

    return (
        <div>
           <p>{show.strCategory}</p>
           <button onClick={()=>func(show)}>click</button>
        </div>
    );
};

export default Showfood;