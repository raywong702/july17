import { createStore, applyMiddleware, compose } from 'redux';

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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
);

export default (initialData) => {
  const store = createStore(mainReducer, initialData, enhancer);

  return store;
};
