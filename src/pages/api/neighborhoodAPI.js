import axios from 'axios';

const getNeighborhoodList = async () => {
    try {

        let response = await axios.get("http://geocoder.pbh.gov.br/geocoder/v2/bairros?limite=10000");

        if (response.status >= 200 && response.status < 300) {
            console.log(response);
            return {
                status: true,
                neighborhoodList: response.data
            }
        }
        return {
            status: false,
            data: "Erro ai pai"
        }

    } catch (ex) {
        return {
            status: true,
            data: ex,
        }
    }
}

export default getNeighborhoodList;
