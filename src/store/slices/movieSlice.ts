import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IMovie, IMovieDetails, IMovies} from "../../interfaces";

interface IState {
    movies: IMovie[],
    moviesByGenre:IMovie[],
    moviesByTitle:IMovie[],
    movieByID: IMovieDetails|null,
    total_pages:number,
    current_page:number,
}

const initialState: IState = {
    movies:[],
    moviesByGenre:[],
    moviesByTitle:[],
    movieByID:null,
    total_pages: 500,
    current_page:0,

};


const getAll = createAsyncThunk<IMovies, {page:string|undefined}>(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)
const getById = createAsyncThunk<IMovieDetails, {movie_id:number}>(
    'movieSlice/getMovieById',
    async ({movie_id}, thunkAPI) => {
        try {
            const {data} = await movieService.getById(movie_id);
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)

const getMoviesByGenreId = createAsyncThunk<IMovies, {with_genres:string|undefined}>(
    'movieSlice/getByGenre',
    async ({with_genres}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByGenreID(with_genres);
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)

const getMoviesByTitle = createAsyncThunk<IMovies, {query:string|undefined}>(
    'movieSlice/getByTitle',
    async ({query}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByTitle(query);
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.current_page = page
                state.movies = results
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieByID = action.payload
            })
            .addCase(getMoviesByGenreId.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.moviesByGenre = results
            })
            .addCase(getMoviesByTitle.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.moviesByTitle = results
            })
            // .addMatcher(!isFulfilled(getMoviesByTitle), (state) => {
            //     state.error = 'Movies not found'
            // })


})

const {reducer: moviesReducer, actions} = movieSlice;

const moviesActions = {
    ...actions,
    getAll,
    getById,
    getMoviesByGenreId,
    getMoviesByTitle
}

export {
    moviesReducer,
    moviesActions
}