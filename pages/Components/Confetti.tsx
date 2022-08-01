import React from "react";
import Confetti from "react-confetti";

type Props = {};

const ConfettiBackground = (props: Props) => {
  const [showConfetti, setShowConfetti] = React.useState(true);
  setTimeout(() => {
    setShowConfetti(false);
  }, 10000);
  return (
    <div>
      {showConfetti ? (
        <>
          <Confetti width={5000} height={700} />
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default ConfettiBackground;
