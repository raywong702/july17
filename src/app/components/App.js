import React from 'react';
import DealList from './DealList';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <DealList deals={this.props.data} />
      </div>
    );
  }
}

export default App;
