"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hnhbk_1 = require("../hnhbk");
const utils_1 = require("./utils");
utils_1.testSegment(hnhbk_1.HNHBK, [
    {
        serialized: "HNHBK:1:3+000000024665+300+some-dialog-id+1+some-dialog-id:1'",
        structured: {
            type: "HNHBK",
            segNo: 1,
            version: 3,
            msgLength: 24665,
            dialogId: "some-dialog-id",
            msgNo: 1,
            refMsg: {
                msgNo: 1,
                dialogId: "some-dialog-id",
            },
        },
    },
], "bi");
//# sourceMappingURL=test-hnhbk.js.map