import { timeLineData } from "../ timeLineData";
export const TimeLine = () => {
  return (
    <div className="timeline">
      {timeLineData.map((data, index) => (
        <div
          key={data.key}
          className={`container ${
            index % 2 === 0 ? "left-container" : "right-container"
          }`}
        >
          <h4>{data.key}</h4>
          <div className="textbox">
            <h3>{data.data}</h3>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
