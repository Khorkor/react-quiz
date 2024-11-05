import { FC } from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

const Question: FC = () => {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  if (!question) {
    return <div>No question available</div>;
  }

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
