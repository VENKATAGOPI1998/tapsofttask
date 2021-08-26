import axios from "axios";

export function getOutput() {
    return axios.get(`https://api.citybik.es/v2/networks`)
}