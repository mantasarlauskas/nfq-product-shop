import C from '../constants';

export default (state = null, action) => {
  switch(action.type) {
    case C.SET_EDIT_ID:
      return action.payload
    case C.CLEAR_EDIT_ID:
      return null
    default: 
      return state
  }
};