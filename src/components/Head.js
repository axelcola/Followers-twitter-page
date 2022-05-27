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
          <h1>Aacsel</h1>
          <p>@Aacsell</p>
        </div>
      </div>
      <div className="switch-folow-list">
        <button className="follow">Followers</button>
        <button className="follow">Following</button>
      </div>
    </div>
  );
};
export default Head;
