import "./Header.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link } from "wouter";

const Head = (props) => {
  return (
    <div className="head-box">
      <div className="user-back-box">
        <button className="back-button">
          <HiOutlineArrowSmLeft size={23} />
        </button>
        <div className="user">
          <h1 className="name">Aacsel</h1>
          <p className="user-name">@Aacsell</p>
        </div>
      </div>
      <div className="switch-folow-list">
        <Link to="/profile/followers">
          <button className="follow followers">
            Followers<div className="selected "></div>
          </button>
        </Link>
        <Link to="/profile/following">
          <button className="follow following">
            Following <div className="selected ok"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Head;
