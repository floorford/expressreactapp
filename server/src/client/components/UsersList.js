import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
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

export { loadData };
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
