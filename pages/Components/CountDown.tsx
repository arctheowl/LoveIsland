import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

type Props = {};

const CountDown = (props: Props) => {
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

  return (
    <>
      <Card className="col-span-6 text-center">
        {expiryTime !== "false" ? (
          <>
            
              <Typography className="pl-5 ">
                Time Until Next Episode
              </Typography>
              <Typography className="pt-5">
                {countdownTime.countdownDays} Days{" "}
                {countdownTime.countdownHours} hrs{" "}
                {countdownTime.countdownMinutes} mins{" "}
                {countdownTime.countdownSeconds} Secs
              </Typography>
       
          </>
        ) : (
            <Typography className="pl-5 ">
            OMG Its on NOW!!
          </Typography>
        )}
      </Card>
    </>
  );
};

export default CountDown;
