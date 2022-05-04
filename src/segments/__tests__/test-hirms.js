"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hirms_1 = require("../hirms");
const utils_1 = require("./utils");
utils_1.testSegment(hirms_1.HIRMS, [
    {
        serialized: "HIRMS:3:2:4+0010::Auftrag entgegengenommen'",
        structured: {
            type: "HIRMS",
            segNo: 3,
            version: 2,
            reference: 4,
            returnValues: new Map([
                [
                    "0010", {
                        code: "0010",
                        message: "Auftrag entgegengenommen",
                        parameters: [],
                        references: [],
                    },
                ],
            ]),
        },
    },
], "in");
//# sourceMappingURL=test-hirms.js.map