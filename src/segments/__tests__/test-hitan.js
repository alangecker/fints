"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hitan_1 = require("../hitan");
const utils_1 = require("./utils");
utils_1.testSegment(hitan_1.HITAN, [
    {
        serialized: "HITAN:5:6:4+4++9BPTSkw1q28BAAD4GXdqn7BCCgQA+Ihre TAN wurde als SMS an die Nummer 123456789 gesendet.'",
        structured: {
            type: "HITAN",
            segNo: 5,
            version: 6,
            process: 4,
            reference: 4,
            transactionHash: "",
            transactionReference: "9BPTSkw1q28BAAD4GXdqn7BCCgQA",
            challengeText: "Ihre TAN wurde als SMS an die Nummer 123456789 gesendet.",
        },
    },
], "in");
//# sourceMappingURL=test-hitan.js.map