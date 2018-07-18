import React from 'react';
import DealList from './DealList';

import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deals: [],
    };
  }
  async componentDidMount() {
    const resp = await axios.get('https://bakesaleforgood.com/api/deals');
    this.setState({
      deals: resp.data,
    });
  }
  render() {
    return (
      <div>
        <DealList deals={this.state.deals} />
      </div>
    );
  }
}

export default App;
