import { FontSize } from "@dse/foundation";
import React, { ReactNode } from "react";
export interface TextProps {
    size?: keyof typeof FontSize;
    children: ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
