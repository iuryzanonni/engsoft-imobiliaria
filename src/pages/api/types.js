import PropTypes from "prop-types";

export const commonType = {
    address: {
        street: "",
        neighbourhood: "",
        city: "",
        cep: "",
    },
    rent: 0,
};

export const defaultHouse = {
    room: 0,
    suite: 0,
    livingRoom: 0,
    parking: 0,
    area: 0,
    includesWardrobe: false,
    description: "",
};

export const defaultApartment = {
    room: 0,
    suite: 0,
    livingRoom: 0,
    diningRoom: 0,
    parking: 0,
    area: 0,
    includesWardrobe: false,
    description: "",
    floor: 0,
    condoFee: 0,
    doorman24h: false,
};

commonType.propTypes = {
    address: {
        street: PropTypes.string,
        neighbourhood: PropTypes.string,
        city: PropTypes.string,
        cep: PropTypes.string,
    },
    rent: PropTypes.number,
};

defaultHouse.propTypes = {
    room: PropTypes.number,
    suite: PropTypes.number,
    livingRoom: PropTypes.number,
    parking: PropTypes.number,
    area: PropTypes.number,
    includesWardrobe: PropTypes.bool,
    description: PropTypes.string,
};

defaultHouse.propTypes = {
    room: PropTypes.number,
    suite: PropTypes.number,
    livingRoom: PropTypes.number,
    diningRoom: PropTypes.number,
    parking: PropTypes.number,
    area: PropTypes.number,
    floor: PropTypes.number,
    condoFee: PropTypes.number,
    includesWardrobe: PropTypes.bool,
    doorman24h: PropTypes.bool,
    description: PropTypes.string,
};

const arr = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
};

export default Object.keys(arr).map((value) => ({
    value,
    label: arr[value],
}));

