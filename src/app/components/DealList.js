import React from 'react';
import Deal from './deal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  const extraProps = {
    deals: state.deals,
  };
  return extraProps;
};

export default connect(mapStateToProps)(DealList);
