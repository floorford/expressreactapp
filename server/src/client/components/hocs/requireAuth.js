import React, { Component } from "react";
import { connect } from "react-redux";

// using term ChildComponent so can use for multiple components
export default ChildComponent => {
  // needs to be aware of users status, set up by authReducers (either null, false or an object)
  class RequireAuth extends Component {
    render() {
      return <div></div>;
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
