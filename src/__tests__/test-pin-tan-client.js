"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const fs_1 = require("fs");
const fetch_mock_1 = __importDefault(require("fetch-mock"));
const pin_tan_client_1 = require("../pin-tan-client");
const utils_1 = require("../utils");
const format_1 = require("../format");
const url = "https://example.com/fints";
const name = "test1";
const pin = "12345";
const blz = "12345678";
const productId = "fints";
let client;
beforeEach(() => {
    jest.spyOn(format_1.Format, "date").mockImplementation(date => date ? date_fns_1.format(date, "HHMMss") : "20180101");
    jest.spyOn(format_1.Format, "time").mockImplementation(time => time ? date_fns_1.format(time, "HHMMss") : "120000");
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    client = new pin_tan_client_1.PinTanClient({ blz, name, pin, url, productId });
});
test("accounts", () => __awaiter(void 0, void 0, void 0, function* () {
    const responseFixtures = JSON.parse(fs_1.readFileSync(`${__dirname}/fixture-accounts.json`, "utf8"));
    let responseNo = 0;
    const mock = fetch_mock_1.default.post(url, () => {
        const response = utils_1.encodeBase64(responseFixtures[responseNo]);
        responseNo++;
        return response;
    });
    const result = yield client.accounts();
    expect(result).toMatchSnapshot();
    const calls = mock.calls().map((call) => utils_1.decodeBase64(String(call[1].body)));
    expect(calls).toMatchSnapshot();
    mock.restore();
}));
test("statements", () => __awaiter(void 0, void 0, void 0, function* () {
    const responseFixtures = JSON.parse(fs_1.readFileSync(`${__dirname}/fixture-statements.json`, "utf8"));
    let responseNo = 0;
    const mock = fetch_mock_1.default.post(url, () => {
        const response = utils_1.encodeBase64(responseFixtures[responseNo]);
        responseNo++;
        return response;
    });
    const account = {
        accountNumber: "2",
        bic: "GENODE00TES",
        blz: "12345678",
        iban: "DE111234567800000002",
        subAccount: "",
    };
    const result = yield client.statements(account, new Date("2018-01-01T12:00:00Z"), new Date("2018-10-01T12:00:00Z"));
    expect(result).toMatchSnapshot();
    const calls = mock.calls().map((call) => utils_1.decodeBase64(String(call[1].body)));
    expect(calls).toMatchSnapshot();
    mock.restore();
}));
test("balance", () => __awaiter(void 0, void 0, void 0, function* () {
    const responseFixtures = JSON.parse(fs_1.readFileSync(`${__dirname}/fixture-balance.json`, "utf8"));
    let responseNo = 0;
    const mock = fetch_mock_1.default.post(url, () => {
        const response = utils_1.encodeBase64(responseFixtures[responseNo]);
        responseNo++;
        return response;
    });
    const account = {
        accountNumber: "2",
        bic: "GENODE00TES",
        blz: "12346789",
        iban: "DE111234567800000002",
        subAccount: "",
    };
    const result = yield client.balance(account);
    expect(result).toMatchSnapshot();
    const calls = mock.calls().map((call) => utils_1.decodeBase64(String(call[1].body)));
    expect(calls).toMatchSnapshot();
    mock.restore();
}));
test("standingOrders", () => __awaiter(void 0, void 0, void 0, function* () {
    let responseFixtures = JSON.parse(fs_1.readFileSync(`${__dirname}/fixture-standingOrders.json`, "utf8"));
    let responseNo = 0;
    const mock = fetch_mock_1.default.post(url, () => {
        const response = utils_1.encodeBase64(responseFixtures[responseNo]);
        responseNo++;
        return response;
    });
    const account = {
        accountNumber: "2",
        bic: "DEUTDEFF500",
        blz: "12346789",
        iban: "DE27100777770209299700",
        subAccount: "",
    };
    const result = yield client.standingOrders(account);
    expect(result).toMatchSnapshot();
    const calls = mock.calls().map((call) => utils_1.decodeBase64(String(call[1].body)));
    expect(calls).toMatchSnapshot();
    mock.restore();
}));
//# sourceMappingURL=test-pin-tan-client.js.map