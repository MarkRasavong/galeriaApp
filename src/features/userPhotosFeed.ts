import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceInitState } from "../app/store";
import { UnsplashDataProps } from "./feed";
import { userProps } from "./userFeed";

const initialState: SliceInitState<UnsplashDataProps> = {
  data: [],
  hasError: false,
  isLoading: false,
  page: 1
}

export const fetchUserFotos = createAsyncThunk('userFotosFeed/fetchUserFotos', async (params: userProps) => {
  const {page, user} = params;
  const res = await fetch(`https://api.unsplash.com/users/${user}/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}`);
  const data = await res.json();
  return data
});

const userFotosFeed = createSlice({
  name: 'userFotosFeed',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1
		}
  },
  extraReducers: builder => {
    builder.addCase(fetchUserFotos.fulfilled, (state, action) => {
      state.data = Array.from(new Set([...state.data as UnsplashDataProps[], ...action.payload]))
      state.hasError = false
      state.isLoading = false
    })
    .addCase(fetchUserFotos.rejected, (state) => {
      state.hasError = true
    })
    .addCase(fetchUserFotos.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const { nextPage } = userFotosFeed.actions
export default userFotosFeed.reducer;