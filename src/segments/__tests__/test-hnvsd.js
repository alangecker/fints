"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hnvsd_1 = require("../hnvsd");
const hktab_1 = require("../hktab");
const hksyn_1 = require("../hksyn");
describe("Segment HNVSD", () => {
    test(`serializes "HNVSD:999:1+@26@HKSYN:5:3+0'HKTAB:8:5+0+A''"`, () => {
        expect(String(new hnvsd_1.HNVSD({
            type: "HNVSD",
            segNo: 999,
            version: 1,
            segments: [
                new hksyn_1.HKSYN({
                    type: "HKSYN",
                    segNo: 5,
                    version: 3,
                    mode: 0,
                }),
                new hktab_1.HKTAB({
                    type: "HKTAB",
                    segNo: 8,
                    version: 5,
                    mode: 0,
                }),
            ],
        }))).toBe("HNVSD:999:1+@26@HKSYN:5:3+0'HKTAB:8:5+0+A''");
    });
    test(`deserializes "HNVSD:999:1+@12@HKSYN:5:3+0''"`, () => {
        expect(new hnvsd_1.HNVSD("HNVSD:999:1+@12@HKSYN:5:3+0''")).toEqual({
            type: "HNVSD",
            segNo: 999,
            version: 1,
            rawSegments: [
                [
                    ["HKSYN", "5", "3"],
                    ["0"],
                ],
            ],
        });
    });
});
//# sourceMappingURL=test-hnvsd.js.map