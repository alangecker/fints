"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hksyn_1 = require("../hksyn");
const utils_1 = require("./utils");
utils_1.testSegment(hksyn_1.HKSYN, [
    {
        serialized: "HKSYN:5:3+0'",
        structured: {
            type: "HKSYN",
            segNo: 5,
            version: 3,
            mode: 0,
        },
    },
], "out");
//# sourceMappingURL=test-hksyn.js.map