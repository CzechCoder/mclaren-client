import { ActionType } from "../action-types";

const initialState = 0;

type Action = {
  type: string;
  payload?: number;
};

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.EXPAND:
      return state = 240;
    case ActionType.CONTRACT:
      return state = 0;
    default:
      return state;
  }
};

export default reducer;
