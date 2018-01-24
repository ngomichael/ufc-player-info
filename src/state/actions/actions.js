//Action Type
export const CHANGE_FIGHTER = "CHANGE_FIGHTER";

//Action Creator
export function changeFighter(fighter) {
  const action = {
    type: CHANGE_FIGHTER,
    fighter
  };
}
