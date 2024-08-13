import { FC } from "react";
import { QuestionProps } from "../types/types";
import Options from "./Options";

const Question: FC<QuestionProps> = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
