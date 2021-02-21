import executeQuery from '../../database';
// import knex from 'knex';
import database from '../../database';

async function HandlerUser(request, response){
	
	try{		
		const resp = await database.select('*').from('teste').where('id',2);
		console.log(resp);
			
		return response.json(resp);

	}catch(error){
		response.json({ message: error.message })
	}
	
}

export default HandlerUser;