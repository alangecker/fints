"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hnsha_1 = require("../hnsha");
const utils_1 = require("./utils");
utils_1.testSegment(hnsha_1.HNSHA, [
    {
        serialized: "HNSHA:173:2+12345678++12345'",
        structured: {
            type: "HNSHA",
            segNo: 173,
            version: 2,
            msgNo: 1,
            secRef: 12345678,
            pin: "12345",
        },
    },
    {
        serialized: "HNSHA:173:2+12345678++12345:123456'",
        structured: {
            type: "HNSHA",
            segNo: 173,
            version: 2,
            msgNo: 1,
            secRef: 12345678,
            pin: "12345",
            tan: "123456",
        },
    },
], "out");
//# sourceMappingURL=test-hnsha.js.map