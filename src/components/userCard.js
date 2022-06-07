import "./userCard.css";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import FollowButton from "./follow-button";
import PopUser from "./pop-user";

export default function UserCard(props) {
  const [state, setState] = useState({ likeList: "" });
  let hover = false;

  const renderLikeList = () => {
    return (
      <PopUser
        img={props.img}
        first={props.first}
        last={props.last}
        description={props.description}
      />
    );
  };
  const handleLeave = () => {
    hover = false;
    setTimeout(function () {
      return setState({ likeList: "" });
    }, 700);
  };
  const handleHover = () => {
    hover = true;
    setTimeout(function () {
      if (hover) {
        return setState({ likeList: renderLikeList() });
      }
    }, 700);
  };

  return (
    <>
      <div className="user-card">
        <div className="img-and-data">
          <img src={props.img} alt="user-img" className="user-photo"></img>
          <div className="data">
            <h1
              className="user-name"
              onMouseOver={handleHover}
              onMouseLeave={handleLeave}
            >
              {props.first} {props.last}
              {state.likeList}
            </h1>
            <p>
              @{props.first}
              {props.last}
            </p>
            <h2>{props.description}</h2>
          </div>
        </div>
        <div className="buttons">
          <FollowButton />
          <div className="dots">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </>
  );
}
