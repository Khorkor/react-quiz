import { FC, ReactNode } from "react";

interface FooterComponentProps {
  children: ReactNode;
}
const Footer: FC<FooterComponentProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Footer;
