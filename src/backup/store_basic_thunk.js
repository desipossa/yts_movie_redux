import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//thunk 

const getMovie = createAsyncThunk(
    '영화 받아오기',
    async () => {
        const res = await axios.get('https://yts.mx/api/v2/list_movies.json?limit=5&page=1');
        return res.data.data.movies
    }
)
export { getMovie }

const listMovie = createSlice({
    name: "영화",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getMovie.fulfilled]: (state, action) => state = action.payload
    }
});


const store = configureStore({
    reducer: {
        listMovie: listMovie.reducer
    }
});

export default store;