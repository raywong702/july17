import React from 'react';
import DealList from './DealList';

class App extends React.Component {
  // saveDeal(dealId) {
  //   // store.dispatch({ type: 'SAVE_DEAL', dealId })
  // }
  // isDealSaved(dealId) {
  //   // return this.state.savedDeals.includes(dealId);
  // }
  render() {
    return (
      <DealList />
    );
  }
}

export default App;
