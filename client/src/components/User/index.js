import React from "react";
import "./style.css";

const User = props => {
  const { avatar, user } = props;

  return (
    <div className="user">
      <div className="user-ava">
        <img src={avatar} alt={user} />
      </div>
      <div className="user-main">
        <div className="user-user">{user}</div>
      </div>
    </div>
  );
};

export default User;
