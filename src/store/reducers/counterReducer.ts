type ActionsType =
  | ReturnType<typeof increaseAC>
  | ReturnType<typeof resetAC>
  | ReturnType<typeof setMaxCountAC>
  | ReturnType<typeof setMinCountAC>;
type CounterStateType = {
  count: number;
  maxCount: number;
  minCount: number;
};

const initialState = {
  count: 0,
  maxCount: 4,
  minCount: 0,
};

export const counterReducer = (
  state: CounterStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "RESET":
      return { ...state, count: state.minCount };
    case "SETMAX":
      return {...state, maxCount: action.maxValue};
    case "SETMIN":
      return {...state, minCount: action.minValue, count: action.minValue}
    default:
      return state;
  }
};

export const increaseAC = () => {
  return { type: "INCREASE" } as const;
};
export const resetAC = () => {
  return { type: "RESET" } as const;
};
export const setMaxCountAC = (maxValue: number) => {
  return { type: "SETMAX", maxValue } as const;
};
export const setMinCountAC = (minValue: number) => {
  return { type: "SETMIN", minValue } as const;
};
