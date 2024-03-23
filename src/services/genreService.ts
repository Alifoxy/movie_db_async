import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getGenres:():IRes<IGenres> => apiService.get(urls.genres),
}

export {
    genreService
}