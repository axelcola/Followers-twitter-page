import "./signleTrend.css";
import { BsThreeDots } from "react-icons/bs";

export default function SingleTrend(props) {
  return (
    <div className="single-trend">
      <div className="trend-first-div">
        <div className="trend-category">
          <h1>{props.category}</h1>
        </div>
        <div className="trend-dots">
          <BsThreeDots size={16} />
        </div>
      </div>
      <div className="trend-name">
        <h3>{props.name}</h3>
      </div>
      <div className="number-tweets">
        <p>{props.tweets}</p>
      </div>
    </div>
  );
}
