import React from 'react';

const Card = ({name, email, id}) => {
	return(

			<div className=" tc bg-white dib br4 pa2 ma2 dim bw2 shadow-5">
			<p>---------</p>
			<div>
			<img alt='avatar' src={`https://robohash.org/${id}?200x200`}/>
			</div>

			<p>{name}</p>
			<p>{email}</p>
			</div>




		);
}

export default Card;