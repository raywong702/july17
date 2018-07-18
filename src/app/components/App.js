import React from 'react';
import DealList from './DealList';

class App extends React.Component {
  render() {
    return (
      <div>
        <DealList />
        <button>Load more deals</button>        
      </div>
    );
  }
}

export default App;
