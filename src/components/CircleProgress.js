import "./circleProgress.css";
export default function CircleProgress(props) {
  return (
    <>
      <div className="circle-box">
        <div className="percent">
          <svg className="svg">
            <circle cx={props.size} cy={props.size} r={props.size}></circle>
            <circle cx={props.size} cy={props.size} r={props.size}></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
