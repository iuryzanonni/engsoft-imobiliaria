import React from "react";
import database from "../../../database";

async function InsertVisitation(request, response) {
    try {
        await database
            .insert([
                {
                    id: request.body.id,
                    dateVisit: request.body.dateVisit,
                    realEstate: request.body.realEstate,
                    hourVisit: request.body.hourVisit,
                    name: request.body.name,
                    cpf: request.body.cpf,
                },
            ])
            .into("visitation");
        return response.send(201);
    } catch (error) {
        return response.send(201);
    }
}

export default InsertVisitation;
