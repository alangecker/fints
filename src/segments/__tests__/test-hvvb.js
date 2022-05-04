"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hkvvb_1 = require("../hkvvb");
const utils_1 = require("./utils");
utils_1.testSegment(hkvvb_1.HKVVB, [
    {
        serialized: "HKVVB:4:3+0+0+1+fints+0.1'",
        structured: {
            type: "HKVVB",
            segNo: 4,
            version: 3,
            lang: 1,
        },
    },
], "out");
//# sourceMappingURL=test-hvvb.js.map