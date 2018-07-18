import mainReducer from './index';

describe('mainReducer', () => {
  it('saves a deal', () => {
    const newState = mainReducer({
      savedDeals: [1]
    }, { type: 'SAVE_DEAL', dealId: 7 });

    expect(newState.savedDeals).toContain(1);
    expect(newState.savedDeals).toContain(7);
  });
});
