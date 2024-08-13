import { FC } from "react";
import { Action } from "../types/types";

interface StartScreenProps {
  numQuestions: number;
  dispatch: (action: Action) => void;
}

const StartScreen: FC<StartScreenProps> = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
