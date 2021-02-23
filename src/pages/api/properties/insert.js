import database from "../../../database";

async function InsertUser(request, response) {
    try {
        await database
            .insert([
                {
                    isHouse: request.body.isHouse,
                    street: request.body.street,
                    neighbourhood: request.body.neighbourhood,
                    city: request.body.city,
                    cep: request.body.cep,
                    rent: request.body.rent,
                    room: request.body.room,
                    suite: request.body.suite,
                    livingRoom: request.body.livingRoom,
                    diningRoom: request.body.diningRoom,
                    parking: request.body.parking,
                    area: request.body.area,
                    includesWardrobe: request.body.includesWardrobe,
                    description: request.body.description,
                    floor: request.body.floor,
                    condoFee: request.body.condoFee,
                    doorman24h: request.body.doorman24h,
                },
            ])
            .into("properties");

        return response.send(201);
    } catch (error) {
        return response.json({ message: error.message }).send(500);
    }
}

export default InsertUser;
