import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../appCtx';

class Deal extends React.Component {
  displayPrice(discounts) {
    let { price } = this.props;
    if (discounts.includes(this.props.id)) {
      price = price / 2;
    }
    return price / 100;
  }
  render() {
    return (
      <Consumer>
        {(appCtxValue) => {
          const isDealSaved = appCtxValue.isDealSaved(this.props.id);
          return (
            <div className="deal" style={
              { color: this.props.price > 10000 ? 'green' : 'red' }
            }>
              <h3>{this.props.title}</h3>
              <div>{this.props.cause.name}</div>
              <p>${this.displayPrice(appCtxValue.discounts)}</p>
              {this.props.media.map((imageUrl) =>
                <img key={imageUrl} src={imageUrl} width={100}/>
              )}
              <div>
                <button disabled={isDealSaved} onClick={() => appCtxValue.saveDeal(this.props.id)}>
                  {isDealSaved ? 'Saved...': 'Save'}
                </button>
              </div>
            </div>
          );
        }}
      </Consumer>
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

export default Deal;
