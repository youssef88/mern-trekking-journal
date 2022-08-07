import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TrailDataService from "../services/trail.service";
const initialState = [];
export const createTrail = createAsyncThunk(
  "trails/create",
  async ({ title, description }) => {
    const res = await TrailDataService.create({ title, description });
    return res.data;
  }
);
export const retrieveTrails = createAsyncThunk("trails/retrieve", async () => {
  const res = await TrailDataService.getAll();
  return res.data;
});
export const updateTrail = createAsyncThunk(
  "trails/update",
  async ({ id, data }) => {
    const res = await TrailDataService.update(id, data);
    return res.data;
  }
);
export const deleteTrail = createAsyncThunk("trails/delete", async ({ id }) => {
  await TrailDataService.delete(id);
  return { id };
});

const trailSlice = createSlice({
  name: "trail",
  initialState,
  extraReducers: {
    [createTrail.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveTrails.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateTrail.fulfilled]: (state, action) => {
      const index = state.findIndex((trail) => trail.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteTrail.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});
const { reducer } = trailSlice;
export default reducer;
