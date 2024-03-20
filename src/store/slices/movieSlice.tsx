import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IMovies} from "../../interfaces";
import {useSearchParams} from "react-router-dom";

const initialState:IMovies = {
    page: 1,
    total_pages: 500,
    results:[],
};

const getAll = createAsyncThunk(
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
const getById = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({movie_id}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(movie_id);
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
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
            return thunkAPI.rejectWithValue(error.response.data)
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
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.page = page
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