import executeQuery from '../../lib/db';

async function HandlerUser(request, response){
	
	try{
		const results = await executeQuery({
			query: 'SELECT * FROM users'

		});
		response.json(results);

	}catch(error){
		response.json({ message: error.message })
	}
	
}

export default HandlerUser;