import C from '../constants';

const initialState = {
  pageNumber: 0,
  itemsPerPage: 5,
  begin: 0,
  end: 5
};

export default (state = initialState, action) => {
  switch(action.type) {
    case C.CHANGE_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
        begin: action.payload * state.itemsPerPage,
        end: action.payload * state.itemsPerPage + state.itemsPerPage
      }
    case C.RESET_PAGINATION:
      return initialState
    default:
      return state
  }
};