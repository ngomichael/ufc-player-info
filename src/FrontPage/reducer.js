import { CHANGE_FIGHTER } from "./actionTypes";

//Reducer
export function fighter(
  state = {
    fighter: {}
    // otherProp: null
  },
  action
) {
  switch (action.type) {
    //Copies over state and overrides fighterData
    case CHANGE_FIGHTER:
      return {
        ...state,
        fighter: action.fighter
      };
    default:
      return state;
  }
}
