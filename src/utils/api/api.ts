import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/76341?api_key=c9fde5e777b977a51de08d907ef41529",
});

export { api };
