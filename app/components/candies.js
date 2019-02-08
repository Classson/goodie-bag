import React, { Component } from 'react';
import store, { requestCandy } from '../store';
import { connect } from 'react-redux';

class Candies extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestCandy()
  }

  render() {
    const currentCandies = this.props.candies;
    console.log('current candies are ', currentCandies)

    return (
      <ul>
        {currentCandies.map(candy => (
          <li key={candy.id}>{candy.name}</li>
        ))}
      </ul>
    );
  }
}

const mapState = (state) => {
  return {
    candies: state.candies,
  };
};

const mapDispatch = (dispatch) => {
  return {
    requestCandy: () => dispatch(requestCandy())
  };
};

export default connect(mapState, mapDispatch)(Candies);
