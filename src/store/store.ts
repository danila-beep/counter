import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { loadState, saveState } from "../utils/localStorage";

const reducers = combineReducers({
  counter: counterReducer,
});

//state from LS
const persistedState = loadState();

const store = legacy_createStore(reducers, persistedState);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
