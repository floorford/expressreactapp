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
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          React SSR
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
