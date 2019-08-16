import React, { Component } from "react";
import { connect } from "react-redux";
// react component, react router knows if it sees it to send user to the named place
import { Redirect } from "react-router-dom";

// using term ChildComponent so can use for multiple components
export default ChildComponent => {
  // needs to be aware of users status, set up by authReducers (either null, false or an object)
  class RequireAuth extends Component {
    render() {
      // value produced by auth reducer
      switch (this.props.auth) {
        case false:
          // means user defo not authenticated
          return <Redirect to="/" />;
        case null:
          // means not yet fetch authenticated users state
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
