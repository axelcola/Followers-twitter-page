import img from "./IMG_2441";
export default function NewTweet() {
  return (
    <>
      <div className="new-tweet-card">
        <div className="photo">
          <img src={img} />
        </div>
      </div>
    </>
  );
}
