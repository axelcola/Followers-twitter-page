import "./follow-button.css";

export default function FollowButton() {
  const handleHover = () => {
    return;
  };
  const handleLeave = () => {};
  return (
    <>
      <button className="follow-button unfollow">Unfollow</button>
      <button className="follow-button llow">Follow</button>
      <button
        className="follow-button llowing"
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        Following
      </button>
    </>
  );
}
