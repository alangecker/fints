"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hispa_1 = require("../hispa");
const utils_1 = require("./utils");
utils_1.testSegment(hispa_1.HISPA, [
    {
        serialized: "HISPA:5:1:3+" +
            "J:DE111234567800000001:GENODE00TES:1::280:12345678+" +
            "J:DE111234567800000002:GENODE00TES:2::280:12345678'",
        structured: {
            type: "HISPA",
            segNo: 5,
            version: 1,
            reference: 3,
            accounts: [
                {
                    iban: "DE111234567800000001",
                    bic: "GENODE00TES",
                    accountNumber: "1",
                    subAccount: "",
                    blz: "12345678",
                },
                {
                    iban: "DE111234567800000002",
                    bic: "GENODE00TES",
                    accountNumber: "2",
                    subAccount: "",
                    blz: "12345678",
                },
            ],
        },
    },
], "in");
//# sourceMappingURL=test-hispa.js.map