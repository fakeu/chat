import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Header = props => {
  const { name, usersCount, msgCount, lastMsg, admin } = props;

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="header">
      <h1>{name}</h1>
      <div>
        <span>Users Online: </span>
        <span>{usersCount}</span>
      </div>
      <div>
        <span>Total messages: </span>
        <span>{msgCount}</span>
      </div>
      <div>
        <span>Last message: </span>
        <span>{lastMsg}</span>
      </div>
      {admin ? <NavLink to="/options">Add new User</NavLink> : null}
      <div>
        <button onClick={() => logout()}>LOG OUT</button>
      </div>
    </div>
  );
};

export default Header;
