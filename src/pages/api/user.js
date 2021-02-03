import executeQuery from '../../database';

async function HandlerUser(request, response){
	
	try{
		// const results = await executeQuery({
		// 	query: 'SELECT * FROM users'

		// });
		const results = [
			{
				name:"Leo",
				lastName:"Leite"
			},
			{
				name:"Lucca",
				lastName:"Miranda"
			},
			{
				name:"Savio",
				lastName:"Cabral"
			}
		]
			
		return response.json(results);

	}catch(error){
		response.json({ message: error.message })
	}
	
}

export default HandlerUser;