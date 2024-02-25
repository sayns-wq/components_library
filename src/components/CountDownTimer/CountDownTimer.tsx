import { useEffect, useState } from "react";
import classes from "./CountDownTimer.module.css";

interface CountDownTimerProps {
  config: {
    timerConfig: { label: string; color: string }[];
    timerOrder: string[];
  };
  endDate: string;
}

const timeMaxValue = {
  days: 365,
  hours: 24,
  minutes: 60,
  seconds: 60,
};

const tick = (time: any, setOver: any, setTime: any) => {
  const { days, hours, minutes, seconds } = time;
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    setOver(true);
  } else if (hours === 0 && minutes === 0 && seconds === 0) {
    setTime({ days: days - 1, hours: 23, minutes: 59, seconds: 59 });
  } else if (minutes === 0 && seconds === 0) {
    setTime({ ...time, hours: hours - 1, minutes: 59, seconds: 59 });
  } else if (seconds === 0) {
    setTime({ ...time, minutes: minutes - 1, seconds: 59 });
  } else {
    setTime({ ...time, seconds: seconds - 1 });
  }
};

function CountDownTimer({ config, endDate }: CountDownTimerProps) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isOver, setIsOver] = useState(false);

  const { timerConfig, timerOrder } = config;

  const now = new Date(endDate).getTime();
  const countDown = new Date().getTime();
  const distance = now - countDown;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  useEffect(() => {
    setTime({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }, [days, hours, minutes, seconds]);

  useEffect(() => {
    if (isOver) return;
    const interval = setInterval(() => {
      tick(time, setIsOver, setTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, isOver]);

  return (
    <div className={classes.wrapper}>
      {timerConfig.map((item, index) => {
        const circleName = timerOrder[index];
        const timerValue = time[circleName as keyof typeof time];
        const timerMaxValue = timeMaxValue[circleName as keyof typeof time];
        return (
          <div className={classes.circle} key={item.label}>
            <svg>
              <circle
                cx={70}
                cy={70}
                r={70}
                style={{
                  stroke: item.color,
                  strokeDashoffset: 440 - (440 * timerValue) / timerMaxValue,
                }}
              ></circle>
            </svg>
            <div className={classes.timeValue} style={{ color: item.color }}>
              {timerValue} <br /> <span>{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountDownTimer;
