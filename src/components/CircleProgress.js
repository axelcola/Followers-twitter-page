import "./circleProgress.css";
export default function CircleProgress() {
  return (
    <div className="circle-box">
      <div className="percent">
        <svg className="svg">
          <circle cx="10" cy="10" r="10"></circle>
          <circle cx="10" cy="10" r="10"></circle>
        </svg>
      </div>
    </div>
  );
}
