import { TOGGLE } from "./actions";

function rootReducer(state = { status: false }, action) {
  if (action.type === TOGGLE) {
    return { status: !state.status };
  } else return state;
}

export default rootReducer;
