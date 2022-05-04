"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hisyn_1 = require("../hisyn");
const utils_1 = require("./utils");
utils_1.testSegment(hisyn_1.HISYN, [
    {
        serialized: "HISYN:60:4:5+DDDA10000000000000000000000A'",
        structured: {
            type: "HISYN",
            segNo: 60,
            version: 4,
            reference: 5,
            systemId: "DDDA10000000000000000000000A",
        },
    },
], "in");
//# sourceMappingURL=test-hisyn.js.map