"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hicdbs_1 = require("../hicdbs");
const utils_1 = require("./utils");
utils_1.testSegment(hicdbs_1.HICDBS, [
    {
        serialized: "HICDBS:11:1:4+1+2+60:J'",
        structured: {
            type: "HICDBS",
            segNo: 11,
            version: 1,
            reference: 4,
            maxRequestCount: 1,
            minSignatures: 2,
        },
    },
], "in");
//# sourceMappingURL=test-hicdbs.js.map