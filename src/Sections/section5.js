import React from 'react';

const Section5 =(props) =>
{
    return (<div className="improve">
           <div class="improve-team">
            <h1>Improve the lives of millions.Change yours forever</h1>

              </div>  
        <div class="team">
            <p> More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw,
            Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
        </div>
        <div className="galerie-images">{props.improve.map(el => <div className={el.className}>
                                                                            <img src={el.image}/>
                                                                            <h1>{el.name}</h1>
                                                                            <span>{el.btn}</span>

                                                                      
                                                                        
                                                                   

                                                                 </div>)}

        </div>


        </div>

);

}
export default Section5;