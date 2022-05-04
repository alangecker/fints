"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const return_value_1 = require("../return-value");
test("success", () => {
    const returnValue = new return_value_1.ReturnValue({ code: "0010", message: "Some message", parameters: [] });
    expect(returnValue.success).toBe(true);
    expect(returnValue.warning).toBe(false);
    expect(returnValue.error).toBe(false);
});
test("success", () => {
    const returnValue = new return_value_1.ReturnValue({ code: "3020", message: "Some message", parameters: [] });
    expect(returnValue.success).toBe(false);
    expect(returnValue.warning).toBe(true);
    expect(returnValue.error).toBe(false);
});
test("success", () => {
    const returnValue = new return_value_1.ReturnValue({ code: "9040", message: "Some message", parameters: [] });
    expect(returnValue.success).toBe(false);
    expect(returnValue.warning).toBe(false);
    expect(returnValue.error).toBe(true);
});
//# sourceMappingURL=test-return-value.js.map