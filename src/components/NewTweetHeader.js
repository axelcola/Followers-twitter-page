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

import CircleProgress from "./CircleProgress";
import TextareaAutosize from "react-autosize-textarea/lib";

export default function NewTweetHeader() {
  const [focus, setFocus] = useState(false);
  const [count, setCount] = useState(280);
  const [size, setSize] = useState(10);

  const characterCounter = (e) => {
    setCount(280 - e.target.value.length);
    console.log(count);
    if (document.activeElement.value) {
      setFocus(true);
    } else {
      setFocus(false);
    }
    if (count > 21) {
      setSize(11);
      document.documentElement.style.setProperty(
        "--color",
        "var(--global-color)"
      );
      document.documentElement.style.setProperty("--size", "69");
    } else if (count > 0) {
      setSize(14);
      console.log(count);
      document.documentElement.style.setProperty("--color", "#fed300");
      document.documentElement.style.setProperty("--size", "88");
    } else {
      document.documentElement.style.setProperty("--color", "#f0212e");
    }
    document.documentElement.style.setProperty(
      "--percent",
      100 - (count * 100) / 280
    );
  };
  return (
    <>
      <div className="new-twit">
        <div className="new-twit-photo">
          <img src={img} alt="user-img" className="user-photo "></img>
        </div>
        <div className="new-twit-input-box">
          <TextareaAutosize
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
                  {count <= 9 ? (
                    <div className="number-counter-single">{count}</div>
                  ) : count <= 20 ? (
                    <div className="number-counter">{count}</div>
                  ) : (
                    <></>
                  )}
                  <div className="character-container">
                    <CircleProgress size={size} count={count} />
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
