import React from 'react';


const Card = ({name, email, id}) => {
	
	return (

		 <div className = " ma2-ns tc bg-light-green dib br3 ma2 pa3 grow bw3 shadow-5 "> 

          <img alt='robots'  src={`https://robohash.org/${id}?size=200x200`}/>
          <div>
            <h2> {name} </h2>
            <p> {email} </p>
           

            </div>

        </div>     

		);
}

export default Card;
