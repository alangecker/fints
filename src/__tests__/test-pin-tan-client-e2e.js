"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-console */
const fs = __importStar(require("fs"));
const tan_required_error_1 = require("../errors/tan-required-error");
const pin_tan_client_1 = require("../pin-tan-client");
const fints_institute_db_1 = __importDefault(require("fints-institute-db"));
const name = process.env.FINTS_USER;
const pin = process.env.FINTS_PASSWORD;
const blz = process.env.FINTS_BLZ;
const url = ((_a = fints_institute_db_1.default.find((bank) => bank.blz === process.env.FINTS_BLZ)) === null || _a === void 0 ? void 0 : _a.pinTanURL) || process.env.FINTS_URL;
const productId = "9FA6681DEC0CF3046BFC2F8A6";
/**
 * User acceptance test to see if actual implementation works with bank in question
 *
 * @group acceptance
 */
test("get accounts", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pin_tan_client_1.PinTanClient({ blz, name, pin, url, productId, debug: true });
    try {
        const accounts = yield client.accounts();
        expect(accounts.length).toBeGreaterThan(0);
        fs.writeFileSync("/tmp/account.json", JSON.stringify(accounts[0]));
    }
    catch (error) {
        if (error instanceof tan_required_error_1.TanRequiredError) {
            fs.writeFileSync("/tmp/hitan-auftragsreferenz.txt", error.transactionReference);
            fs.writeFileSync("/tmp/challenge.png", error.challengeMedia);
        }
        else {
            console.error(error);
        }
    }
}), 600000);
test("get statements", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pin_tan_client_1.PinTanClient({ blz, name, pin, url, productId, debug: true });
    const account = JSON.parse(fs.readFileSync("/tmp/account.json").toString());
    const startDate = new Date("2019-09-27T12:00:00Z");
    const endDate = new Date("2019-12-27T12:00:00Z");
    try {
        const statements = yield client.statements(account, startDate, endDate);
        expect(statements.length).toBeGreaterThan(0);
        fs.unlinkSync("/tmp/statements-status.txt");
    }
    catch (error) {
        if (error instanceof tan_required_error_1.TanRequiredError) {
            console.log("Transaction Reference: " + error.transactionReference);
            fs.writeFileSync("/tmp/statements-status.txt", JSON.stringify(error));
        }
        else {
            console.error(error);
        }
    }
}), 600000);
test("complete statements", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pin_tan_client_1.PinTanClient({ blz, name, pin, url, productId, debug: true });
    const tan = "492857";
    try {
        const tanRequiredError = JSON.parse(fs.readFileSync("/tmp/statements-status.txt").toString());
        const statements = yield client.completeStatements(tanRequiredError.dialog, tanRequiredError.transactionReference, tan);
        expect(statements.length).toBeGreaterThan(0);
        fs.unlinkSync("/tmp/statements-status.txt");
    }
    catch (error) {
        if (error instanceof tan_required_error_1.TanRequiredError) {
            fs.writeFileSync("/tmp/statements-status.txt", JSON.stringify(error));
        }
        else {
            console.error(error);
        }
    }
}), 600000);
//# sourceMappingURL=test-pin-tan-client-e2e.js.map