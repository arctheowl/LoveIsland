import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

type Props = {};

const ConfettiBackground = (props: Props) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])
  
  const [showConfetti, setShowConfetti] = React.useState(true);
  setTimeout(() => {
    setShowConfetti(false);
  }, 30000);
  return (
    <div>
      {showConfetti ? (
        <>
          <Confetti width={width} height={height} />
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default ConfettiBackground;
