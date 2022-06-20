import "./Header.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link } from "wouter";
import { useState } from "react";

const Head = (props) => {
  const [list, setList] = useState(true);
  const followList = () => {
    setList(false);
    console.log(list);
  };
  const followingList = () => {
    setList(true);
    console.log(list);
  };
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
        <Link
          to="/Followers-twitter-page/profile/followers"
          onClick={followList}
        >
          <button className="follow followers">
            Followers
            {list ? <></> : <div className="selected ok"></div>}
          </button>
        </Link>
        <Link
          to="/Followers-twitter-page/profile/following"
          onClick={followingList}
        >
          <button className="follow following">
            Following
            {list ? <div className="selected ok"></div> : <></>}
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Head;
