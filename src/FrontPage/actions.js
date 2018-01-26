import { CHANGE_FIGHTER } from "./actionTypes";

//Action Creator
export function changeFighter(fighter) {
  const action = {
    type: CHANGE_FIGHTER,
    fighter
  };
  return action;
}
