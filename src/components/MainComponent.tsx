import { FC, ReactNode } from "react";

interface MainComponentProps {
  children: ReactNode;
}

const MainComponent: FC<MainComponentProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default MainComponent;
