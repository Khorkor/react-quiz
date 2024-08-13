import { FC } from "react";

interface ProgressProps {
  index: number;
  numQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: number | null;
}

const Progress: FC<ProgressProps> = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong> {index + 1} </strong> / {numQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPossiblePoints}{" "}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
