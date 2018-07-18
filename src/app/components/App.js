import React from 'react';
import DealList from './DealList';

import { Provider } from '../appCtx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      savedDeals: [],
    };
  }
  saveDeal(dealId) {
    this.setState((prevState) => ({
      savedDeals: [...prevState.savedDeals, dealId],
    }));
  }
  isDealSaved(dealId) {
    return this.state.savedDeals.includes(dealId);
  }
  render() {
    return (
      <Provider value={{
        discounts: this.props.data.discounts,
        isDealSaved: this.isDealSaved.bind(this),
        saveDeal: this.saveDeal.bind(this),
      }}>
        <DealList
          deals={this.props.data.deals}
        />
      </Provider>
    );
  }
}

export default App;
