import { Spacing } from "@dse/foundation";
import React, { ReactNode } from "react";
export interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: ReactNode;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
