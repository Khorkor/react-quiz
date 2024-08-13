import { FC, useEffect } from "react";
import { Action } from "../types/types";

interface TimerProps {
  dispatch: (action: Action) => void;
  secondsRemaining: number | null;
}

const Timer: FC<TimerProps> = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining! / 60);
  const seconds = secondsRemaining! % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
