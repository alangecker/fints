"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hkend_1 = require("../hkend");
const utils_1 = require("./utils");
utils_1.testSegment(hkend_1.HKEND, [
    {
        serialized: "HKEND:3:1+some-dialog-id'",
        structured: {
            type: "HKEND",
            segNo: 3,
            version: 1,
            dialogId: "some-dialog-id",
        },
    },
], "out");
//# sourceMappingURL=test-hkend.js.map