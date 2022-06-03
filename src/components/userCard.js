import img from "./IMG_2441.jpeg";
import "./userCard.css";
import { BsThreeDots } from "react-icons/bs";
import { useState, renderLikeList, handleLeave, handleHover } from "react";

export default function UserCard() {
  const [state, setState] = useState({ likeList: "" });

  renderLikeList = () => {
    return <div className="pop-user">Likes to be rendered specifically</div>;
  };
  handleLeave = () => {
    return setState({ likeList: "" });
  };
  handleHover = () => {
    console.log("hola");
    return setState({ likeList: renderLikeList() });
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
            <h2>descripción sobre lo efimero de la vida</h2>
          </div>
        </div>
        <div className="buttons">
          <button className="follow-button">Follow</button>
          <div className="dots">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </>
  );
}
