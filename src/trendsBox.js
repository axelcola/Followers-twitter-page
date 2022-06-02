import SingleTrend from "./singleTrend";
import "./trendsBox.css";
const TrendBox = () => {
  return (
    <>
      <div>
        <div className="trends-box">
          <div className="title-box">
            <h1 className="trend-title">Trends for you</h1>
          </div>
          <SingleTrend />
          <SingleTrend />
          <SingleTrend />
          <SingleTrend />
          <SingleTrend />
          <SingleTrend />
          <SingleTrend />
          <SingleTrend />
          <div className="showmore-trend">
            <h3>Show more</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendBox;
