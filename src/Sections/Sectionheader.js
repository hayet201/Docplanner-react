import React from 'react';

const Sectionheader = (props) =>
{return(
    <div className="head-part">
        <div className="logo">
            <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>

        </div>
            <div className="menu-head">

                <div className="menu-nav">
                    <div className="about-us"><a href="https://www.docplanner.com/about-us">About us</a></div>
                    <div className="career"><a href="https://www.docplanner.com/career">Career</a> </div>

                    <div className="departement">
                        <a className="dropbtn" href="#">Departments</a>
                        <div className="dropdown-content">
                            <ul>
                                <li><a href="#">Marketing & PR</a></li>
                                <li><a href="#">Customer Success & Sales</a></li>
                                <li> <a href="#">IT, Product, Design & UX</a></li>
                                <li><a href="#">Finance & Administration</a></li>
                                <li><a href="#">HR & More</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
             </div>
    </div>


);

}
export default Sectionheader;