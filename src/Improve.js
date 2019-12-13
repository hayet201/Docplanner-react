import React, { Component } from 'react';




function Improve( props) {
    return (
    <div className="Improve">
        <div>         
            {places.map(el => {
                return (
                    <div  className="improve">
                        <span>{el.image}</span>
                        <span>{el.name}</span>
                    </div>
                )
            })}
        </div>

    </div >
  );
}

export default Improve;