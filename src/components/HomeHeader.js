import "./Header.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { BsStars } from "react-icons/bs";

const HomeHeader = (props) => {
  return (
    <div className="head-box">
      <div className="user-back-box stars">
        <div className="user">
          <h1 className="name">Home</h1>
        </div>
        <button className="back-button">
          <BsStars size={23} />
        </button>
      </div>
    </div>
  );
};
export default HomeHeader;
