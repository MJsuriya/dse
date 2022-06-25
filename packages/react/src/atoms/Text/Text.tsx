import { FontSize } from "@dse/foundation";
import React, { ReactNode } from "react";

export interface TextProps {
  size?: keyof typeof FontSize;
  children: ReactNode;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `dse-text dse-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
