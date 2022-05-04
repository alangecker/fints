"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hnshk_1 = require("../hnshk");
const utils_1 = require("./utils");
const format_1 = require("../../format");
jest.spyOn(format_1.Format, "date").mockReturnValueOnce("20180907");
jest.spyOn(format_1.Format, "time").mockReturnValueOnce("080000");
utils_1.testSegment(hnshk_1.HNSHK, [
    {
        serialized: "HNSHK:2:4+PIN:1+999+123123+1+1+1::some-system-id+1+1:20180907:080000+1:999:1+6:10:16+280:12345678:testuser:S:0:0'",
        structured: {
            type: "HNSHK",
            segNo: 2,
            version: 4,
            profileVersion: 1,
            securityFunction: "999",
            secRef: 123123,
            systemId: "some-system-id",
            blz: "12345678",
            name: "testuser",
        },
    },
], "out");
//# sourceMappingURL=test-hnshk.js.map