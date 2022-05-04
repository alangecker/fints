"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hikazs_1 = require("../hikazs");
const utils_1 = require("./utils");
utils_1.testSegment(hikazs_1.HIKAZS, [
    {
        serialized: "HIKAZS:11:2:4+1+2+60:J'",
        structured: {
            type: "HIKAZS",
            segNo: 11,
            version: 2,
            reference: 4,
            maxRequestCount: 1,
            minSignatures: 2,
        },
    },
], "in");
//# sourceMappingURL=test-hikazs.js.map