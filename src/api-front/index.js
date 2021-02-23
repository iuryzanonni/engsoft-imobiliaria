import axios from "axios";

const baseUrl = "https://engsoft-imobiliaria.vercel.app/api";

const get = async (address, params = {}) => {
    let query = "?";
    for (const key in params) {
        query += `${key}=${params[key]}`;
    }

    query = query.slice(0, -1);

    return axios.get(`${baseUrl}/${address}${query}`).then((res) => {
        return res ? res.data : null;
    });
};

const post = async (data) => {
    const url = `${baseUrl}/properties/insert`;

    axios
        .post(url, data)
        .then(function (response) {
            console.error(response);
        })
        .catch(function (error) {
            console.error(error);
        });
};

export { get, post };
