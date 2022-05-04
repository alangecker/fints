"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hnvsk_1 = require("../hnvsk");
const utils_1 = require("./utils");
const format_1 = require("../../format");
jest.spyOn(format_1.Format, "date").mockReturnValueOnce("20180907");
jest.spyOn(format_1.Format, "time").mockReturnValueOnce("080000");
utils_1.testSegment(hnvsk_1.HNVSK, [
    {
        serialized: "HNVSK:998:3+PIN:1+998+1+1::some-system-id+1:20180907:080000+2:2:13:@8@00000000:5:1+280:12345678:testuser:S:0:0+0'",
        structured: {
            type: "HNVSK",
            segNo: 998,
            version: 3,
            profileVersion: 1,
            systemId: "some-system-id",
            blz: "12345678",
            name: "testuser",
        },
    },
], "bi");
//# sourceMappingURL=test-hnvsk.js.map