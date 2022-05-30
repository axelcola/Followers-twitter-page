import "./Head.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Head = () => {
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
        <button className="follow followers">Followers</button>
        <button className="follow following">Following</button>
      </div>
    </div>
  );
};
export default Head;
