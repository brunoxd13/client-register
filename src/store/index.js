import { createStore } from "redux";
import { Reducers } from "../reducers";

export const Store = createStore(Reducers);

Store.subscribe(() => {
  console.log("The new state is: ", Store.getState());
});
