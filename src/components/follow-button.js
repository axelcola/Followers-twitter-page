import { useState } from "react";
import "./follow-button.css";

export default function FollowButton() {
  const [state, setState] = useState("Following");
  const handleHover = () => {
    setState("Unfollow");
  };
  const handleLeave = () => {
    setState("Following");
  };

  return (
    <>
      <button
        className={`follow-button ${state}`}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        {state}
      </button>
    </>
  );
}
