import { FontSize } from "@dse/foundation";
import React from "react";

export interface TextProps {
  size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }: any) => {
  const className = `dse-text dse-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
