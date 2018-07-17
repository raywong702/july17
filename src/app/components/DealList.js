import React from 'react';
import Deal from './deal';

class DealList extends React.Component {
  render() {
    return (
      <div>
        {this.props.deals.map((deal) => <Deal key={Math.random()} {...deal} />)}
      </div>
    );
  }
}

export default DealList;
