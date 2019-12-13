import React from 'react'


const Section3 = (props) => {
    return(
    <div className="company">
        <div className="global">
            <h1>We are a global company
                    with local culture</h1>

        </div>
        <div>
                {props.comp.map(el =>
                    <img src={el} />


            )}
        </div>
       
    </div>

    );}
export default Section3;
