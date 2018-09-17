import C from '../constants';

const initialState = {
  byId: {},
  allIds: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case C.ADD_CATEGORY:
      return {
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        },
        allIds: [
          ...state.allIds,
          action.payload.id
        ]
      }
    default: 
      return state
  }     
};