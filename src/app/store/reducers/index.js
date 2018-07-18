const mainReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'SAVE_DEAL':
      if (!state.savedDeals) {
        throw new Error('savedDeals cannot be empty');
      }
      return {
        ...state,
        savedDeals: [...state.savedDeals, action.dealId],
      };
    case 'TOGGLE_DEAL':
      if (state.expandedDeals.indexOf(action.dealId) >= 0) {
        return {
          ...state,
          expandedDeals: state.expandedDeals.filter((dealId) => dealId !== action.dealId)
        };
      } else {
        return {
          ...state,
          expandedDeals: [...state.expandedDeals, action.dealId],
        };
      }
    case 'RECEIVED_DEALS':
      return {
        ...state,
        deals: [
          ...state.deals,
          ...action.newDeals,
        ]
      };
    default:
      return state;
  }
};

export default mainReducer;
