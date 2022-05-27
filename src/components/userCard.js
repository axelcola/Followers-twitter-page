import img from "./IMG_2441.jpeg";
import "./userCard.css";
import { BsThreeDots } from "react-icons/bs";

export default function UserCard() {
  return (
    <>
      <div className="user-card">
        <div className="img-and-data">
          <img src={img} alt="user-img" className="user-photo"></img>
          <div className="data">
            <h1>Axel</h1>
            <p>@axel</p>
            <h2>descripción</h2>
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
