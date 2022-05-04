"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSegment = void 0;
function testSegment(segmentClass, testData, direction = "bi") {
    describe(`Segment "${segmentClass.name}"`, () => {
        testData.forEach(({ serialized, structured }, index) => {
            test("has correct type", () => {
                const segment = new segmentClass({});
                expect(segment.type).toBe(segmentClass.name);
            });
            if (direction === "bi" || direction === "in") {
                test(`deserializes test data set ${index}`, () => {
                    const segment = new segmentClass(serialized);
                    expect(segment).toEqual(structured);
                });
            }
            if (direction === "bi" || direction === "out") {
                test(`serializes test data set ${index}`, () => {
                    const segment = new segmentClass(structured);
                    expect(String(segment)).toEqual(serialized);
                });
            }
            if (direction === "out") {
                test(`throws exception when deserializing test data set ${index}`, () => {
                    expect(() => new segmentClass(serialized)).toThrowError();
                });
            }
            if (direction === "in") {
                test(`throws exception when serializing test data set ${index}`, () => {
                    expect(() => String(new segmentClass(structured))).toThrowError();
                });
            }
        });
    });
}
exports.testSegment = testSegment;
//# sourceMappingURL=utils.js.map