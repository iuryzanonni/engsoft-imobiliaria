import database from '../../../database';

async function HandlerUser(request, response){
	
	try{		
		await database.insert([{
			isHouse: request.query.isHouse,
			street: request.query.street,
      neighbourhood: request.query.neighbourhood,
      city: request.query.city,
      cep: request.query.cep,
			rent: request.query.rent,
			room: request.query.room,
    	suite: request.query.suite,
    	livingRoom: request.query.livingRoom,
    	diningRoom: request.query.diningRoom,
    	parking: request.query.parking,
    	area: request.query.area,
    	includesWardrobe: request.query.includesWardrobe,
    	description: request.query.description,
    	floor: request.query.floor,
    	condoFee: request.query.condoFee,
    	doorman24h: request.query.doorman24h,
		}]).into('properties');

		return response.send(201);

	}catch(error){
		return response.json({ message: error.message }).send(500);
	}
	
}

export default HandlerUser;