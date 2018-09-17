import C from '../constants';

export const addCategory = category => ({
  type: C.ADD_CATEGORY,
  payload: category
});