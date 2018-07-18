import React from 'react';
import DealList from './DealList';

import { Provider } from '../appCtx';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider value={{ discounts: this.props.data.discounts }}>
        <DealList
          deals={this.props.data.deals}
        />
      </Provider>
    );
  }
}

export default App;
