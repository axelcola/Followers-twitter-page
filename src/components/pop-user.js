import "./pop-user.css";
import img from "./IMG_2441.jpeg";
import FollowButton from "./follow-button";
export default function PopUser() {
  return (
    <div className="pop-user">
      <div className="pop-photo">
        <img src={img} alt="user-img" className="user-photo medium pop"></img>
        <div className="f-button">
          <FollowButton />
        </div>
      </div>
      <div className="pop-name-user-name">
        <h1>Axelcola </h1>
        <p>@axelcola</p>
        <h2> Lorem ipsum dolor sit amet consectetur.</h2>
      </div>
      <div className="numbers-follow">
        <div className="pop-numbers following">
          {" "}
          <strong>280</strong> Following
        </div>
        <div className="pop-numbers followers">
          {" "}
          <strong>1000 </strong> Followers
        </div>
      </div>
    </div>
  );
}
