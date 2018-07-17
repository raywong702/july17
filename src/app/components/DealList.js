import React from 'react';
import Deal from './deal';

class DealList extends React.Component {
  render() {
    return (
      <div>
        {this.props.deals.map((deal) => <Deal {...deal} />)}
      </div>
    );
  }
}

export default DealList;
