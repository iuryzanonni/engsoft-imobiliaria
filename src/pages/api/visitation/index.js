import database from "../../../database";

async function HandlerUser(request, response) {
    const method = request.method;
    let resp;
    try {
        const id = request.query.id;
        const date = request.query.date;

        resp = await database.select().from("visitation").where({
            realEstate: id,
            dateVisit: date,
        });

        return response.json(resp);
    } catch (error) {
        return response.json({ message: error.message }).send(404);
    }
}

export default HandlerUser;
