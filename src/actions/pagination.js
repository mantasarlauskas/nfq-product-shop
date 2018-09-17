import C from '../constants';

export const changePage = page => ({
  type: C.CHANGE_PAGE,
  payload: page
});

export const resetPagination = () => ({
  type: C.RESET_PAGINATION
});

export const isPageEmpty = (selector, id) => (dispatch, getState) => {
  const { pageNumber } = getState().pagination;
  const ids = selector(getState(), id);
  pageNumber > 0 && ids.length === 0 && dispatch(changePage(pageNumber - 1));
};