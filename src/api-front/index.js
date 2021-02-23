import axios from "axios";

const baseUrl = "https://engsoft-imobiliaria.vercel.app/api";

const get = async (address, params = {}) => {
    let query = "?";
    for (const key in params) {
        query += `${key}=${params[key]}`;
    }

    query = query.slice(0, -1);
    console.log(query);
    console.log(`${baseUrl}/${address}${query}`);

    return axios.get(`${baseUrl}/${address}${query}`).then((res) => {
        console.log(res);
        return res ? res.data : null;
    });
};

const post = async (data) => {
    const url = `${baseUrl}/properties/insert`;

    axios
        .post(url, data)
        .then(function (response) {
            console.log("AAAA", response);
        })
        .catch(function (error) {
            console.log("AAAdfgdfgA", error);
        });
};

export { get, post };
