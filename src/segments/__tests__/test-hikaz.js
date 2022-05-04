"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hikaz_1 = require("../hikaz");
const utils_1 = require("./utils");
utils_1.testSegment(hikaz_1.HIKAZ, [
    {
        serialized: "HIKAZ:5:5:3+@10@abcdefghij'",
        structured: {
            type: "HIKAZ",
            segNo: 5,
            version: 5,
            reference: 3,
            bookedTransactions: "abcdefghij",
        },
    },
    {
        serialized: "HIKAZ:5:5:3++@10@abcdefghij'",
        structured: {
            type: "HIKAZ",
            segNo: 5,
            version: 5,
            reference: 3,
            pendingTransactions: "abcdefghij",
        },
    },
], "in");
//# sourceMappingURL=test-hikaz.js.map