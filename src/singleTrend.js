import "./signleTrend.css";
import { BsThreeDots } from "react-icons/bs";

export default function SingleTrend() {
  return (
    <div className="single-trend">
      <div className="trend-first-div">
        <div className="trend-category">
          <h1>Trending in uruguay</h1>
        </div>
        <div className="trend-dots">
          <BsThreeDots size={16} />
        </div>
      </div>
      <div className="trend-name">
        <h3>Paraguay</h3>
      </div>
      <div className="number-tweets">
        <p>15.32K Tweets</p>
      </div>
    </div>
  );
}
