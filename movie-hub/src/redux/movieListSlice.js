import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api-client";
import { API_STATE } from "../constants";

// Thunk that dispatches those action creators
export const fetchMovieList = createAsyncThunk("movieList", async () => {
    const response = await api.get("/upcoming");
    return response;
});

// Following are selectors
export const getMovieList = (state) => state.movieList.list;
export const getMovieListStatus = (state) => state.movieList.status;
export const getMovieListError = (state) => state.movieList.error;

export const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        status: API_STATE.IDLE,
        list: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchMovieList.pending]: (state, action) => {
            state.status = API_STATE.LOADING;
        },
        [fetchMovieList.fulfilled]: (state, action) => {
            state.status = API_STATE.SUCCEEDED;
            state.list = action.payload;
        },
        [fetchMovieList.rejected]: (state, action) => {
            state.status = API_STATE.FAILED;
            state.error = action.error.message;
        },
    },
});

const { reducer } = movieListSlice;

export default reducer;
