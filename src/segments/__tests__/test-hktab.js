"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hktab_1 = require("../hktab");
const utils_1 = require("./utils");
utils_1.testSegment(hktab_1.HKTAB, [
    {
        serialized: "HKTAB:8:5+0+A'",
        structured: {
            type: "HKTAB",
            segNo: 8,
            version: 5,
            mode: 0,
        },
    },
], "out");
//# sourceMappingURL=test-hktab.js.map