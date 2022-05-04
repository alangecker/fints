"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hksal_1 = require("../hksal");
const utils_1 = require("./utils");
const accountNumber = "01234";
const blz = "12345678";
const iban = "DE27100777770209299700";
const bic = "DEUTDEFF500";
utils_1.testSegment(hksal_1.HKSAL, [
    {
        serialized: "HKSAL:3:5+01234::280:12345678+N++8'",
        structured: {
            type: "HKSAL",
            segNo: 3,
            version: 5,
            account: { accountNumber, blz },
            touchdown: "8",
        },
    },
    {
        serialized: "HKSAL:3:7+DE27100777770209299700:DEUTDEFF500:01234::280:12345678+N++8'",
        structured: {
            type: "HKSAL",
            segNo: 3,
            version: 7,
            account: { accountNumber, blz, iban, bic },
            touchdown: "8",
        },
    },
], "out");
//# sourceMappingURL=test-hksal.js.map