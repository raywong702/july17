import React from 'react';

class Deal extends React.Component {
  render() {
    return (
      <div className="deal" style={
        { color: this.props.price > 10000 ? 'green' : 'red' }
      }>
        <h3>{this.props.title}</h3>
        <div>{this.props.cause.name}</div>
        <p>${this.props.price / 100}</p>
      </div>
    );
  }
}

export default Deal;
