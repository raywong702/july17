import React from 'react';
import Deal from './deal';
import PropTypes from 'prop-types';

class DealList extends React.Component {
  render() {
    return (
      <div>
        {this.props.deals.map((deal) =>
          <Deal
            key={deal.key}
            id={deal.key}
            {...deal}
          />
        )}
      </div>
    );
  }
}

DealList.propTypes = {
  deals: PropTypes.array
};

DealList.defaultProps = {
  deals: [],
};

export default DealList;
