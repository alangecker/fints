"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hisals_1 = require("../hisals");
const utils_1 = require("./utils");
utils_1.testSegment(hisals_1.HISALS, [
    {
        serialized: "HISALS:13:3:4+1+2'",
        structured: {
            type: "HISALS",
            segNo: 13,
            version: 3,
            reference: 4,
            maxRequestCount: 1,
            minSignatures: 2,
        },
    },
], "in");
//# sourceMappingURL=test-hisals.js.map