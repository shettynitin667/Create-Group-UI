import React, { useState } from "react";
import "./styles.css";

const User = ({ user }) => {
  let [select, onSelect] = useState(false);
  const onCardClick = () => {
    onSelect(!select);
  };
  return (
    <div className="userCard">
      <div onClick={onCardClick} className="userImage">
        <img src={user.Image} />
        <span className="tick" style={{ display: select ? "block" : "none" }}>
          <i className="fas fa-check"></i>
        </span>
      </div>

      <p className="userName">{user.name}</p>
    </div>
  );
};
export default User;
