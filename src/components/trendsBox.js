import SingleTrend from "./singleTrend";
import "./trendsBox.css";
const TrendBox = () => {
  const trends = [
    {
      name: "Valverde",
      tweets: "9,320",
      category: "Sports",
    },
    {
      name: "Dua lipa",
      tweets: "35.6K",
      category: "Music",
    },
    {
      name: "ugarte",
      tweets: "",
      category: "Sports",
    },
    {
      name: "Montevideo",
      tweets: "4,320",
      category: "Trending in Uruguay",
    },
    {
      name: "Muslera",
      tweets: "1,253",
      category: "Sports",
    },
    {
      name: "Suárez",
      tweets: "24.56K",
      category: "Sports",
    },
    {
      name: "Centenario",
      tweets: "4,256",
      category: "Trending in Uruguay",
    },
    {
      name: "Cami",
      tweets: "16,7K",
      category: "Trending in Uruguay",
    },
    {
      name: "Santi",
      tweets: "29.8K",
      category: "Trending in Uruguay",
    },
    {
      name: "Suiza",
      tweets: "5,176",
      category: "Sports",
    },
  ];
  return (
    <>
      <div>
        <div className="trends-box">
          <div className="title-box">
            <h1 className="trend-title">Trends for you</h1>
          </div>
          {trends.map((trend) => (
            <SingleTrend
              key={trend.name}
              name={trend.name}
              category={trend.category}
              tweets={trend.tweets}
            />
          ))}
          <div className="showmore-trend">
            <h3>Show more</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendBox;
