import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, MovieDetailsPage, GenresPage} from "./pages";
import {MoviesByGenrePage} from "./pages/MoviesByGenrePage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies/1'}/>
            },
            {
                path: 'movies', element: <MoviesPage/> , children: [
                    {
                        path: ':page',element: <MoviesPage/>
                    },
                ]
            },
            {
                path: 'genres',element: <GenresPage/>, children:[
                    {
                        path: ':genre_id/:genre_name', element: <MoviesByGenrePage/>
                    },
                ]
            },
            {
                path: 'movies/:page/details/:movie_id', element: <MovieDetailsPage/>
            },
            {
                path: 'genres/:genre_id/:genre_name/details/:movie_id', element: <MovieDetailsPage/>
            },

        ]
    }
]);

export {
    router
}