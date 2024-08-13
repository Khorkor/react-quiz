export type Action =
  | { type: "dataReceived"; payload: IQuestion[] }
  | { type: "dataFailed"; payload: string }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" };

export interface IQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface QuestionProps {
  question: IQuestion;
  dispatch: (action: Action) => void;
  answer: number | null;
}
