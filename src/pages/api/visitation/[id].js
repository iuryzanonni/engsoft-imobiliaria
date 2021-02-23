import database from "../../../database";

async function HandlerUser(request, response) {
    try {
        const id = request.query.id;
        const date = request.query.date;

        const resp = await database.select().from("visitation").where({
            realEstate: id,
            dateVisit: date,
        });
        return response.json(resp);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export default HandlerUser;
