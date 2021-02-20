import executeQuery from '../../database';
// import knex from 'knex';
import database from '../../database';

async function HandlerUser(request, response){
	
	try{
		// const results = await executeQuery({
		// 	query: 'SELECT * FROM users'

		// });
		const resp = await database.select('*').from('Users');
		console.log(resp);
		// const results = [
		// 	{
		// 		name:"Leo",
		// 		lastName:"Leite"
		// 	},
		// 	{
		// 		name:"Lucca",
		// 		lastName:"Miranda"
		// 	},
		// 	{
		// 		name:"Savio",
		// 		lastName:"Cabral"
		// 	}
		// ]
			
		return response.json(resp);

	}catch(error){
		response.json({ message: error.message })
	}
	
}

export default HandlerUser;