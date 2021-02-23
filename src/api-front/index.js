import axios from "axios";

const baseUrl = "https://engsoft-imobiliaria.vercel.app/api";

const get = async (address) => {
    return axios.get(`${baseUrl}/${address}`).then((res) => {
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
