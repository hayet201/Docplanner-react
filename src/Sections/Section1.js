import React from 'react';
import logo from '../logo.png';


const Section1 = (props) => {
    return ( <div className="healthcare">
        
            <img className="docplannerlogo" src={logo} />
            <h1>Making the healthcare experience more human</h1>
           <div className="para" > {props.tab.map(el => <p>{el}</p>)}
        
        </div>
         </div> );
}
 
export default Section1;