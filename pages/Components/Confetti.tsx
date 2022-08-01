import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

type Props = {};

const ConfettiBackground = (props: Props) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  
  const [showConfetti, setShowConfetti] = React.useState(true);
  setTimeout(() => {
    setShowConfetti(false);
  }, 600000);
  return (
    <div>
      {showConfetti ? (
        <>
          <Confetti width={width} height={700} />
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default ConfettiBackground;
