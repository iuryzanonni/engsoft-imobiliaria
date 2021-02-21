import database from '../../../database';

async function HandlerUser(request, response){
	
	try{
		const id = request.query.id;

		const resp = await database.select().from('properties');
			
		return response.json(resp);

	}catch(error){
		response.json({ message: error.message })
	}
	
}

export default HandlerUser;