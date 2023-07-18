import { RootState } from "../store/store";

export const loadState = () => {
  try {
    //getting item from LS
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
    //if empty return undefined
      return undefined;
    }
    //parsing gatcha data
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const saveState = (state: RootState) => {
    //params = our state
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch(err) {
    console.log(err);
  }
};
