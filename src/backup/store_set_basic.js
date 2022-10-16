import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//thunk 

const getMovie = createAsyncThunk(
    '영화 받아오기',
    async (set) => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${set.limit}&page=${set.pagenum}`);
        { console.log(res.data.data) }
        return res.data.data
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