import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IPoster, IPosters} from "../../interfaces";
import {posterService} from "../../services";

interface IState {
    posters:IPoster[]
}

const initialState: IState = {
    posters:[]

};


const getPosters = createAsyncThunk<IPosters, {movie_id:number}>(
    'posterSlice/getPosters',
    async ({movie_id},thunkAPI) => {
        try {
            const {data} = await posterService.getMoviePosters(movie_id);
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const posterSlice = createSlice({
    name: 'posterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPosters.fulfilled, (state, action) => {
                const {posters} = action.payload;
                state.posters = posters

            })


})

const {reducer: postersReducer, actions} = posterSlice;

const postersActions = {
    ...actions,
    getPosters
}

export {
    postersReducer,
    postersActions
}