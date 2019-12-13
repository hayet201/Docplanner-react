
import React from 'react';

const Section4 =(props) =>
{
    return (<div className="healthcare-platform">
                <div className="healthcare-description">
                    <h1>The world's <br/>
                        biggest healthcare platform</h1>
                    <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                   <img src="https://www.docplanner.com/img/logo.png" />      
                </div>
                
        <div className="platform-leaders">{props.platform.map(el =><div className ={el.className}>
                                                    <div className={el.className1}>
                                                        <img src={el.image} />
                                                        <h1>{el.title}</h1>
                                                        <p>{el.description}</p>
                                                        
                                                    </div>
                                                   
                                            

                                              </div>
                        
                        
                        
                        )}

                </div>
        



            </div>





);}
export default Section4;









