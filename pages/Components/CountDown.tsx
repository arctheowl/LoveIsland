import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  theme: string;
};

const CountDown = (props: Props) => {
  const { theme } = props;
  const date = new Date();
  const date2 = date.getDate();

  const expirydate = `${date2} jun 2022 21:00:00`;

  const [expiryTime, setExpiryTime] = useState(expirydate);
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0,
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime("false");
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  const settings = [
    {
      name: "dark",
      themes: "bg-[#100C2A] text-white",
      bg: "bg-[#100C2A]",
      text: "text-white",
    },
    {
      name: "light",
      themes: "bg-white text-black bg-opacity-80 ",
      bg: "bg-[#100C2A]",
      text: "text-black",
    },
  ];

  let number = 0;
  if (theme === "light") {
    number = 1;
  }

  return (
    <div
      className={`${settings[number].themes} col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
    >
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className="justify-self-center pt-4"
      >
        Time Until Next Episode
      </Typography>
      <Typography variant="h6" className="list-none justify-self-center">
        <li>
          {countdownTime.countdownDays} days {countdownTime.countdownHours} hrs{" "}
        </li>
        <li>
          {countdownTime.countdownMinutes} min {countdownTime.countdownSeconds}{" "}
          sec
        </li>
      </Typography>
    </div>
  );
};

export default CountDown;
