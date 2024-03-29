import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage, MovieDetailsPage, SearchPage, MoviesByTitlePage, ErrorPage} from "./pages";
import {MoviesByGenrePage} from "./pages/MoviesByGenrePage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies/1'}/>
            },
            {
                path: 'movies',element:<MoviesPage/>, children: [
                    {
                        path: ':page',element: <MoviesPage/>
                    },
                ]
            },
            {
                path: 'search',element: <SearchPage/>, children:[
                    {
                        path: ':genre_id/:genre_name', element: <MoviesByGenrePage/>
                    },
                    {
                        path: ':query', element: <MoviesByTitlePage/>
                    },
                ]
            },
            {
                path: 'movies/:page/details/:movie_id', element: <MovieDetailsPage/>
            },
            {
                path: 'search/:genre_id/:genre_name/details/:movie_id', element: <MovieDetailsPage/>
            },
            {
                path: 'search/:query/details/:movie_id', element: <MovieDetailsPage/>
            },

        ]
    }
]);

export {
    router
}