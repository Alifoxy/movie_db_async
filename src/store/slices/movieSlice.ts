import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IMovie, IMovieDetails} from "../../interfaces";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    movieByID: IMovieDetails|null,
    total_pages:number
    current_page:number
}

const initialState: IState = {
    total_pages: 500,
    movies:[],
    current_page:0,
    movieByID:null,
};

// @ts-ignore

const getAll = createAsyncThunk<IMovie[], {page:string}>(
    'movieSlice/getAll',
    // @ts-ignore
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e:any) {
            const error = e as AxiosError
            // @ts-ignore
            return rejectWithValue(error.response.data)
        }

    }
)
const getById = createAsyncThunk<IMovie[], {movie_id:number}>(
    'movieSlice/getMovieById',
    async ({movie_id}, {rejectWithValue} ) => {
        try {
            const {data} = await movieService.getById(movie_id);
            return data
        } catch (e:any) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }

    }
)
const getMoviePosters = createAsyncThunk(
    'movieSlice/getPosters',
    async ({movie_id}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviePosters(movie_id);
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)
const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (thunkAPI) => {
        try {
            const {data} = await movieService.getGenres();
            return data
        } catch (error:any) {
            return thunkAPI.reject(error.response.data)
        }

    }
)
const getMoviesByGenreId = createAsyncThunk(
    'movieSlice/getAll',
    async ({with_genres}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByGenreID(with_genres);
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
            .addCase(getAll.fulfilled, (state:IMovies, action) => {
                const {page:current_page, results} = action.payload;
                state.page = current_page
                state.results = results
            })


})

const {reducer: moviesReducer, actions} = movieSlice;

const moviesActions = {
    ...actions,
    getAll
}

export {
    moviesReducer,
    moviesActions
}