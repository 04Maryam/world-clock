import Clock from "./Clock.jsx";
// import "./App.css";

export default function WorldClock({ clockData }) {
  return (
    <div className="d-md-flex flex-wrap w-100 my-md-3 ps-md-3">
      {clockData.map((timeZone, index) => (
        <div className="col-12 col-md-6 mb-md-3" key={index}>
          <Clock timeZone={timeZone} />
        </div>
      ))}
    </div>
  );
}
