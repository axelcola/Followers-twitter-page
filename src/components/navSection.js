import { BsTwitter } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { FiHash } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { BsCardText } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import "./navSection.css";
const NavSection = () => {
  return (
    <div className="nav-section">
      <div className="logo">
        <div className="icon">
          <BsTwitter size={30} />
        </div>
      </div>
      <div className="nav-button home">
        <div className="icon">
          <GoHome size={23} />
        </div>
        <div className="box"></div>
        <h1 className="button-text">Home</h1>
      </div>
      <div className="nav-button explore">
        <div className="icon">
          <FiHash size={23} />
        </div>
        <div className="box"></div>
        <h1 className="button-text">Explore</h1>
      </div>
      <div className="nav-button notifications">
        <div className="icon">
          <RiNotification2Line size={23} />
        </div>
        <div className="box"></div>

        <h1 className="button-text">Notifications</h1>
      </div>
      <div className="nav-button messages">
        <div className="icon">
          <HiOutlineMail size={23} />
        </div>
        <div className="box"></div>

        <h1 className="button-text">Messages</h1>
      </div>
      <div className="nav-button bookmarks">
        <div className="icon">
          <FiBookmark size={23} />
        </div>
        <div className="box"></div>

        <h1 className="button-text">Bookmarks</h1>
      </div>
      <div className="nav-button lists">
        <div className="icon">
          <BsCardText size={23} />
        </div>
        <div className="box"></div>

        <h1 className="button-text">Lists</h1>
      </div>
      <div className="nav-button profile">
        <div className="icon">
          <AiOutlineUser size={23} />
        </div>
        <div className="box"></div>

        <h1 className="button-text">Profile</h1>
      </div>
      <div className="nav-button profile">
        <div className="icon">
          <HiOutlineDotsCircleHorizontal size={23} />
        </div>
        <div className="box"></div>

        <h1 className="button-text">More</h1>
      </div>
      <div>
        <div className="new-tweet-button">
          <h1>Tweet</h1>
        </div>
      </div>
    </div>
  );
};
export default NavSection;
