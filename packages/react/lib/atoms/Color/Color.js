import { Spacing } from '@dse/foundation';
import React from 'react';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    var className = `dse-width-${width} dse-height-${height}`;
    return React.createElement("div", { className: className, style: { backgroundColor: hexCode } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
