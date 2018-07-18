import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Deal extends React.Component {
  displayPrice() {
    let { price } = this.props;
    if (this.props.discounts.includes(this.props.id)) {
      price = price / 2;
    }
    return price / 100;
  }
  render() {
    return (
      <div className="deal" style={
        { color: this.props.price > 10000 ? 'green' : 'red' }
      }>
        <h3>{this.props.title}</h3>
        <div>{this.props.cause.name}</div>
        <p>${this.displayPrice()}</p>
        {this.props.media.map((imageUrl) =>
          <img key={imageUrl} src={imageUrl} width={100}/>
        )}
        <div>
          <button disabled={this.props.isDealSaved}
            onClick={() => { this.props.saveDeal(this.props.id); }}>
            {this.props.isDealSaved ? 'Saved...': 'Save'}
          </button>
        </div>
      </div>
    );
  }
}

Deal.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cause: PropTypes.shape({
    name: PropTypes.string,
  }),
};

const mapStateToProps = (state, origianlProps) => ({
  discounts: state.discounts,
  isDealSaved: state.savedDeals.includes(origianlProps.id),
});

const saveDeal = (dealId) => ({ type: 'SAVE_DEAL', dealId });

export default connect(mapStateToProps, { saveDeal })(Deal);
