//axios is library to make requests to the end point of API
import axios from 'axios';

//whenever I make request I don't have to include beginning of URL
//appends this to the beginning of the requests.js URLs
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;
