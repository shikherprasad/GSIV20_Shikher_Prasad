import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./redux/movieListSlice";

export default configureStore({
    reducer: {
        movieList: movieListReducer,
    },
});
