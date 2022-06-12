import "./FollowersHeader.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const HomeHeader = (props) => {
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
    </div>
  );
};
export default HomeHeader;
