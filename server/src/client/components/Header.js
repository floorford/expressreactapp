import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Header = ({ auth }) => {
  // these routes are determined by the api, the /api allows the proxy to intercept and attach the cookies
  // use a not Link as not navigating inside our application, actually making an external request
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
