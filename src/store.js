import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//thunk ...

const getMovie = createAsyncThunk(
    '영화 받아오기',
    async (set) => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${set.limit}&page=${set.pagenum}&genre=${set.genre ? set.genre : ''}`);
        { console.log(res.data) }
        return res.data.data
    }
)
export { getMovie }

const listMovie = createSlice({
    name: "영화",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getMovie.fulfilled]: (state, action) => action.payload
    }
});


const toggle = createSlice({
    name: '일반적으로 쓸 toggle',
    initialState: false,
    reducers: {
        setToggle: (state, action) => action.payload
    }
});
export const { setToggle } = toggle.actions;


const store = configureStore({
    reducer: {
        listMovie: listMovie.reducer,
        toggle: toggle.reducer
    }
});

export default store;