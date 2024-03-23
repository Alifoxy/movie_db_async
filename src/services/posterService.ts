import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IPosters} from "../interfaces";

const posterService = {
    getMoviePosters:(movie_id: number, language:string='en'):IRes<IPosters> => apiService.get(urls.movies.images(movie_id),{params:{language:language}}),
}

export {
    posterService
}