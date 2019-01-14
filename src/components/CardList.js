import React from 'react';
import Card from './Card.js';


const CardList = ({getRobots}) => {



	return(

		<div>
		{
		getRobots.map((user,i) => {
			return (


				<Card 
				key = {i}
				name={getRobots[i].name}
				email={getRobots[i].email}
				id = {getRobots[i].id}
				/>


				);



		})
		



		}
		</div>
		);

}

export default CardList;