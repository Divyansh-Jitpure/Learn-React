import React, { useEffect, useRef, useState } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let millsec = Math.floor((elapsedTime % 1000) / 10);

    hrs = String(hrs).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    millsec = String(millsec).padStart(2, "0");

    // return `${hrs}:${mins}:${sec}:${millsec}`;
    return `${mins}:${sec}:${millsec}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start-btn">
          Start
        </button>
        <button onClick={stop} className="stop-btn">
          Stop
        </button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
