import "./pop-user.css";
import img from "./IMG_2441.jpeg";
import FollowButton from "./follow-button";
export default function PopUser(props) {
  return (
    <div className="pop-user">
      <div className="pop-photo">
        <img
          src={props.img}
          alt="user-img"
          className="user-photo medium pop"
        ></img>
        <div className="f-button">
          <FollowButton />
        </div>
      </div>
      <div className="pop-name-user-name">
        <h1>
          {props.fist} {props.last}{" "}
        </h1>
        <p>
          @{props.first}
          {props.last}
        </p>
        <h2> {props.description}</h2>
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
