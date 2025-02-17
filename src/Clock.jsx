import { useState, useEffect } from "react";
import { DateTime } from "luxon";

export default function Clock({ timeZone }) {
  const [date, setDate] = useState(DateTime.local());
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(DateTime.local());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const localDateTime = DateTime.local();
    const targetDateTime = localDateTime.setZone(timeZone);

    let offsetDifference =
      localDateTime.offset / 60 - targetDateTime.offset / 60;

    if (offsetDifference < -12) {
      offsetDifference += 24; // Adjust for different days
    }

    const formattedTimeDifference =
      offsetDifference === 0
        ? `Today, +0HRS`
        : offsetDifference === 24
        ? `Tomorrow, +0HRS`
        : offsetDifference < 0
        ? `Tomorrow, +${Math.abs(offsetDifference)}HRS`
        : `Today, -${offsetDifference}HRS`;

    setTimeDifference(formattedTimeDifference);
  }, [timeZone]);

  const dateString = date.setZone(timeZone).toLocaleString({
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="clock-card bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3 d-sm-flex justify-content-between">
        <div className="d-sm-flex flex-column align-items-start">
          <p className="fw-light text-secondary">{timeDifference}</p>
          <p className="fs-4">{timeZone}</p>
        </div>
        <div className="d-sm-flex flex-column justify-content-center align-items-end">
          <p className="lead fs-1">{dateString}</p>
        </div>
      </div>
    </div>
  );
}
