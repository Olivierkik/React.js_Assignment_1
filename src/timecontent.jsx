// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>
    <h1>Useffect</h1>
    <p>Time:{seconds} secs</p>
    </div>;
};

export default TimerComponent;