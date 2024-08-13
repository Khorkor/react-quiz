import { FC } from "react";
import { Action } from "../types/types";

interface NextButtonProps {
  dispatch: (action: Action) => void;
  answer: number | null;
  index: number;
  numQuestions: number;
}

const NextButton: FC<NextButtonProps> = ({
  dispatch,
  answer,
  index,
  numQuestions,
}) => {
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
