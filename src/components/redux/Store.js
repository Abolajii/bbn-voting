import { createStore } from "redux";
import { staticHousemates } from "../../data";
import { voteReducer } from "./reducer";

const intialState = {
  housemates: staticHousemates,
  maximiumVotes: 10,
};

export const store = createStore(
  voteReducer,
  intialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
