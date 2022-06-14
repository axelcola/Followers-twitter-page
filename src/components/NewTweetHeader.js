import img from "./IMG_2441.jpeg";
import { BsCardImage } from "react-icons/bs";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdSchedule } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";

export default function NewTweetHeader() {
  const [focus, setFocus] = useState(false);
  const characterCounter = () => {
    if (document.activeElement.value) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };
  return (
    <>
      <div className="new-twit">
        <div className="new-twit-photo">
          <img src={img} alt="user-img" className="user-photo "></img>
        </div>
        <div className="new-twit-input-box">
          <input
            type="text"
            id="new-twit"
            onChange={characterCounter}
            className="new-twit-input"
            placeholder="What's happening?"
          />
          <div className="privacy-selector">
            <BiWorld />
            <h4>Everyone can reply</h4>
          </div>
          <div className="new-twit-buttons">
            <div className="attach-selector">
              <div className="attach-icon galery">
                <BsCardImage size={22} />
              </div>
              <div className="attach-icon gif">
                <RiFileGifLine size={22} />
              </div>
              <div className="attach-icon poll">
                <BiPoll size={23} />
              </div>
              <div className="attach-icon emoji">
                <HiOutlineEmojiHappy size={22} />
              </div>
              <div className="attach-icon shcedule">
                <MdSchedule size={22} />
              </div>
              <div className="attach-icon location">
                <HiOutlineLocationMarker size={22} />
              </div>
            </div>
            <div className="new-tweet-container">
              {focus ? (
                <>
                  <div className="character-container">
                    <div className="character-counter"></div>
                  </div>
                  <div className="plus-icon">
                    <BsPlus size={25} />
                  </div>
                  <button className="add-tweet">Tweet</button>
                </>
              ) : (
                <>
                  <button className="add-tweet disabled">Tweet</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
