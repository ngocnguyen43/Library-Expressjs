"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.InvalidCredentialsException = void 0;
var enums_1 = require("../../utils/enums");
var BaseException_1 = require("./BaseException");
var InvalidCredentialsException = /** @class */ (function (_super) {
    __extends(InvalidCredentialsException, _super);
    function InvalidCredentialsException(message, statusCode, errorCode) {
        if (statusCode === void 0) { statusCode = enums_1.ErrorStatusCodes.InvalidCredentialsException; }
        if (errorCode === void 0) { errorCode = enums_1.ErrorCodes.InvalidCredentialsException; }
        return _super.call(this, message, statusCode, errorCode) || this;
    }
    return InvalidCredentialsException;
}(BaseException_1.BaseException));
exports.InvalidCredentialsException = InvalidCredentialsException;
