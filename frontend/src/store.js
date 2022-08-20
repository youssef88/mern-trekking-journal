import { configureStore } from "@reduxjs/toolkit";
import trailreducer from "./slices/trails";
const reducer = {
  tutorials: trailreducer,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
