"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hnhbs_1 = require("../hnhbs");
const utils_1 = require("./utils");
utils_1.testSegment(hnhbs_1.HNHBS, [
    {
        serialized: "HNHBS:7:1+1'",
        structured: {
            type: "HNHBS",
            segNo: 7,
            version: 1,
            msgNo: 1,
        },
    },
], "out");
//# sourceMappingURL=test-hnhbs.js.map