import React from 'react';


const Section6 =(props) =>
{ return (<div className="leader">

             <div class="country">
                
               We are leaders in 10 countries:
               
               {props.pied.map(el => <a href="#">{el},</a>

        )}
            </div>
            <div class="cookies">
            
                 This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify 
                 the conditions for storing or accessing cookies on your browser.
            
            </div>
             <div class="copyright">
                www.docplanner.com © 2019
            </div>


        </div>

);

}
export default Section6;