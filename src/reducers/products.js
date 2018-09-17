import C from '../constants';
import omit from 'lodash.omit';

const initialState = {
  byId: {},
  allIds: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case C.ADD_PRODUCT:
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
      case C.EDIT_PRODUCT:
        return {
          ...state,
          byId: {
            ...state.byId,
            [action.payload.id]: action.payload
          }
        }
      case C.REMOVE_PRODUCT:
        return {
          byId: omit(state.byId, action.payload),
          allIds: state.allIds.filter(id => id !== action.payload)
        }
      case C.INCREMENT_PRODUCT_COUNT: 
        return {
          ...state,
          byId: {
            ...state.byId,
            [action.payload]: {
              ...state.byId[action.payload],
              count: state.byId[action.payload].count + 1
            }
          }
        }
      case C.DECREMENT_PRODUCT_COUNT: 
        return {
          ...state,
          byId: {
            ...state.byId,
            [action.payload]: {
                ...state.byId[action.payload],
                count: state.byId[action.payload].count - 1
            }
          }
        }
      default:
        return state
  }
};