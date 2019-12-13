import React from 'react'

const Section2 = (props) => {
    return (<div className="visit">

        {props.obj.map(el => <div className={el.className}>
                                  <div className={el.className1}>
                                        <h1>{el.titre}</h1>
                                        <p>{el.description}</p>
                                            <select >
                                                <option selected>choose country </option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="chile">Chile</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Ozech">Ozech</option>
                                                <option value="France">France</option>
                                                <option value="italy">italy</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="peru">Peru</option>
                                                <option value="poland">Poland</option>
                                                <option value="portugal">portugal</option>
                                                <option value="spain">Spain</option>
                                                <option value="uk">uk</option>
                                                <option value="turkey">turkey</option>
                                            </select>
                                     <img src={el.image} />
                                  </div>
                               
        
                            </div>
        )}

    </div>

    );

}
export default Section2;