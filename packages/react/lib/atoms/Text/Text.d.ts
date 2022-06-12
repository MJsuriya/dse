import { FontSize } from "@dse/foundation";
import React from "react";
export interface TextProps {
    size?: keyof typeof FontSize;
}
declare const Text: React.FC<TextProps>;
export default Text;
