import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";
import {IGenre, IGenres} from "../../interfaces";

interface IState {
    genres:IGenre[]
}

const initialState: IState = {
   genres:[]

};


const getGenres = createAsyncThunk<IGenres, void>(
    'genreSlice/getGenres',
    async (_,thunkAPI) => {
        try {
            const {data} = await genreService.getGenres();
            return data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres

            })


})

const {reducer: genresReducer, actions} = genreSlice;

const genresActions = {
    ...actions,
    getGenres
}

export {
    genresReducer,
    genresActions
}