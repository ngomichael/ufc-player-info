import { CHANGE_FIGHTER } from "./actionTypes";

//Reducer
export function fighter(
  state = {
    fighter: {
      headerOpacity: "1",
      firstName: "First",
      lastName: "Last",
      country: "Country",
      record: "0-0",

      strikesLandedPerMinute: 0,
      strikeDifferential: 0,
      knockdownsLanded: 0,
      submissionAttempts: 0,
      submissions: 0,
      totalStrikesLanded: 0
    }
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
