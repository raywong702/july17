import { createStore } from 'redux';

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_DEAL':
      return {
        ...state,
        savedDeals: [...state.savedDeals, action.dealId],
      };
    default:
      return state;
  }
};

export default (initialData) => {
  const store = createStore(mainReducer, initialData);

  return store;
};
