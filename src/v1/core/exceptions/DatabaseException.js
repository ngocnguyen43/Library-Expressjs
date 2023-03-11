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
exports.DuplicateEntryException = exports.NotFoundException = void 0;
var enums_1 = require("../../utils/enums");
var BaseException_1 = require("./BaseException");
var NotFoundException = /** @class */ (function (_super) {
    __extends(NotFoundException, _super);
    function NotFoundException(message, statusCode, errorCode) {
        if (statusCode === void 0) { statusCode = enums_1.ErrorStatusCodes.NotFoundException; }
        if (errorCode === void 0) { errorCode = enums_1.ErrorCodes.NotFoundException; }
        return _super.call(this, message, statusCode, errorCode) || this;
    }
    return NotFoundException;
}(BaseException_1.BaseException));
exports.NotFoundException = NotFoundException;
var DuplicateEntryException = /** @class */ (function (_super) {
    __extends(DuplicateEntryException, _super);
    function DuplicateEntryException(message, statusCode, errorCode) {
        if (statusCode === void 0) { statusCode = enums_1.ErrorStatusCodes.DuplicateEntryException; }
        if (errorCode === void 0) { errorCode = enums_1.ErrorCodes.DuplicateEntryException; }
        return _super.call(this, message, statusCode, errorCode) || this;
    }
    return DuplicateEntryException;
}(BaseException_1.BaseException));
exports.DuplicateEntryException = DuplicateEntryException;
