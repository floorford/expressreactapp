import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    /* placing tags we want to be rendered into the Helmet library */
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  // manual dispatch calls the fetchUsers actionCreator, pass the result into store.dispatch
  // makes a network request to the API, return a promise representing the network request
  // to make sure the promise gets back to the index.js file we need to return everything
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersListPage),
  loadData
};
