"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hkidn_1 = require("../hkidn");
const utils_1 = require("./utils");
utils_1.testSegment(hkidn_1.HKIDN, [
    {
        serialized: "HKIDN:3:2+280:12345678+testuser+some-system-id+1'",
        structured: {
            type: "HKIDN",
            segNo: 3,
            version: 2,
            name: "testuser",
            blz: "12345678",
            systemId: "some-system-id",
            customerId: 1,
        },
    },
], "out");
//# sourceMappingURL=test-hkidn.js.map