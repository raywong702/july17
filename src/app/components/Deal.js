import React from 'react';
import PropTypes from 'prop-types';

class Deal extends React.Component {
  render() {
    return (
      <div className="deal" style={
        { color: this.props.price > 10000 ? 'green' : 'red' }
      }>
        <h3>{this.props.title}</h3>
        <div>{this.props.cause.name}</div>
        <p>${this.props.price / 100}</p>
        {this.props.media.map((imageUrl) =>
          <img key={imageUrl} src={imageUrl} width={100}/>
        )}
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

export default Deal;
