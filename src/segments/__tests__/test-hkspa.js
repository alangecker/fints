"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hkspa_1 = require("../hkspa");
const utils_1 = require("./utils");
utils_1.testSegment(hkspa_1.HKSPA, [
    {
        serialized: "HKSPA:3:1+'",
        structured: {
            type: "HKSPA",
            segNo: 3,
            version: 1,
        },
    },
], "out");
//# sourceMappingURL=test-hkspa.js.map