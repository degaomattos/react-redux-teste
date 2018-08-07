import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
  newValue: 'Nome do usuário'
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        newValue: action.newValue
      };
    default:
      return state;
  }
};