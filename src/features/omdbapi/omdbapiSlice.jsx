import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Movie_URL = "https://www.omdbapi.com/?s=marvel&apikey=68e1bba8";

const initialState = {
  entities: [],
  detail: [],
  search: [],
  loading: false,
  error: null,
};

export const Movies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await axios.get(Movie_URL);
  return res.data;
});

export const movieDetails = createAsyncThunk(
  "deatail/detailMovies",
  async (movieId) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=68e1bba8`
    );
    return res.data;
  }
);

export const moviesSearch = createAsyncThunk(
  "search/searchMovie",
  async (search) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?t=${search}&apikey=68e1bba8`
    );
    return res.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // .addCase(Movies.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(Movies.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload.Search;
      })
      // .addCase(Movies.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      // .addCase(moviesSearch.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(movieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload.Search;
      })
      // .addCase(moviesSearch.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      // .addCase(moviesSearch.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(moviesSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload.Search;
      });
    // .addCase(moviesSearch.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export default movieSlice.reducer;
