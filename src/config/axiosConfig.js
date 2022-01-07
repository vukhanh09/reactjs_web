import axios from "axios";

const instance = axios.create({
    baseURL:'https://news-web-aps.herokuapp.com/api'
});

export default instance;