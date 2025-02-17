import "./App.css";
import { useState, useEffect } from "react";
import WorldClock from "./WorldClock.jsx";

export default function App() {
  const [currentTimeZone, setCurrentTimeZone] = useState(null);

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCurrentTimeZone(timeZone);
  }, []);

  const timeZones = [
    currentTimeZone,
    "Asia/Singapore",
    "America/Los_Angeles",
    "Europe/London",
  ];

  return (
    <>
      <h1 className="world-clock-header text-center text-dark-emphasis py-3">
        World Clock
      </h1>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary header-container">
        <div className="text-container col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Time at your fingertips</h1>
          <h3 className="fw-normal text-muted mb-3">
            Access real-time clocks from around the world, no matter where you
            are.
          </h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <a className="icon-link" href="#">
              Learn more
            </a>
            <a className="icon-link" href="#">
              Set Up
            </a>
          </div>
        </div>

        <div className="clock clock-1 shadow-sm d-md-block">
          <div className="hour"></div>
          <div className="minute"></div>
          <div className="second"></div>
        </div>

        <div className="clock clock-2 shadow-sm d-md-block">
          <div className="hour"></div>
          <div className="minute"></div>
          <div className="second"></div>
        </div>
      </div>
      <WorldClock clockData={timeZones} />
    </>
  );
}
