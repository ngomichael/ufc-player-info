import { CHANGE_FIGHTER } from "./actionTypes";

//Reducer
export function fighter(
  state = {
    fighterData: {},
    otherProp: null
  },
  action
) {
  switch (action.type) {
    //Copies over state and overrides fighterData
    case CHANGE_FIGHTER:
      return {
        ...state,
        fighterData: action.fighter
      };
    default:
      return state;
  }
}
