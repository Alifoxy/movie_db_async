import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer, postersReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        posters: postersReducer
    }
})

export {
    store
}