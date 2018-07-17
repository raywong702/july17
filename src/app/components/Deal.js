import React from 'react';

class Deal extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>{this.props.cause.name}</div>
        <p>${this.props.price / 100}</p>
      </div>
    );
  }
}

export default Deal;
