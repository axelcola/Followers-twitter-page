import img from "./IMG_2441.jpeg";
import "./userCard.css";
export default function UserCard() {
  return (
    <>
      <div className="user-card">
        <div className="img-and-data">
          <img src={img} alt="user-img" className="user-photo"></img>
          <div>
            <h1>Axel</h1>
            <p>@axel</p>
            <p>descripción</p>
          </div>
        </div>
        <button className="follow-button">Follow</button>
      </div>
    </>
  );
}
