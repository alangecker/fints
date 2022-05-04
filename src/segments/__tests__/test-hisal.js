"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hisal_1 = require("../hisal");
const utils_1 = require("./utils");
const accountNumber = "01234";
const blz = "12345678";
const bookedBalance = 2024.75;
const pendingBalance = 23.02;
const creditLimit = 100;
const availableBalance = 2124.75;
utils_1.testSegment(hisal_1.HISAL, [
    {
        serialized: "HISAL:5:5:3+01234::280:" +
            "12345678+Giro-Plus+" +
            "EUR+C:2024,75:EUR:20190118+C:23,02:EUR:20190118+100," +
            ":EUR+2124,75:EUR'HNSHA:6:2+9909961'",
        structured: {
            type: "HISAL",
            segNo: 5,
            version: 5,
            reference: 3,
            account: { accountNumber, blz, iban: null, bic: null, subAccount: "" },
            productName: "Giro-Plus",
            currency: "EUR",
            bookedBalance,
            pendingBalance,
            creditLimit,
            availableBalance,
        },
    },
], "in");
//# sourceMappingURL=test-hisal.js.map