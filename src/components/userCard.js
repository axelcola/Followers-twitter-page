import img from "./IMG_2441.jpeg";
import "./userCard.css";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import FollowButton from "./follow-button";
import PopUser from "./pop-user";

export default function UserCard() {
  const [state, setState] = useState({ likeList: "" });
  let hover = false;

  const renderLikeList = () => {
    return <PopUser />;
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
          <img src={img} alt="user-img" className="user-photo"></img>
          <div className="data">
            <h1
              className="user-name"
              onMouseOver={handleHover}
              onMouseLeave={handleLeave}
            >
              Axel {state.likeList}
            </h1>
            <p>@axel</p>
            <h2> Lorem ipsum dolor sit amet consectetur.</h2>
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
