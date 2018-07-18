import React from 'react';
import DealList from './DealList';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component {
  async handleLoadDealsClick(event) {
    event.preventDefault();
    const resp = await axios.get('/api');
    this.props.addMoreDeals(resp.data);
  }
  render() {
    return (
      <div>
        <DealList />
        <button onClick={this.handleLoadDealsClick.bind(this)}>Load more deals</button>
      </div>
    );
  }
}

// const loadMoreDeals = () => {
//   return async (dispatch) => {
//     dispatch({ type: 'RECEIVED_DEALS', newDeals: resp.data });
//   };
// };

const addMoreDeals = (newDeals) => (
  { type: 'RECEIVED_DEALS', newDeals }
);

export default connect(null, { addMoreDeals })(App);
