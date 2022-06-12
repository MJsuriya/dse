import { Spacing } from "@dse/foundation";
import React from "react";
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
