import axios from "axios";

const baseUrl = "https://engsoft-imobiliaria.vercel.app/api";

const get = async (address) => {
    return axios.get(`${baseUrl}/${address}`).then((res) => {
        console.log(res);
        return res ? res.data : null;
    });
};

export { get };
