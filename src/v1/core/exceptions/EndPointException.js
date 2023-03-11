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
exports.UnimplementedException = exports.InvalidEndpointEcxeption = exports.InternalServerException = void 0;
var enums_1 = require("../.././utils/enums");
var BaseException_1 = require("./BaseException");
var InternalServerException = /** @class */ (function (_super) {
    __extends(InternalServerException, _super);
    function InternalServerException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalServerException;
}(BaseException_1.BaseException));
exports.InternalServerException = InternalServerException;
var InvalidEndpointEcxeption = /** @class */ (function (_super) {
    __extends(InvalidEndpointEcxeption, _super);
    function InvalidEndpointEcxeption(message, statuscode, errorCode) {
        if (message === void 0) { message = 'URL not found'; }
        if (statuscode === void 0) { statuscode = enums_1.ErrorStatusCodes.InvalidEndpointException; }
        if (errorCode === void 0) { errorCode = enums_1.ErrorCodes.InvalidEndpointException; }
        return _super.call(this, message, statuscode, errorCode) || this;
    }
    return InvalidEndpointEcxeption;
}(BaseException_1.BaseException));
exports.InvalidEndpointEcxeption = InvalidEndpointEcxeption;
var UnimplementedException = /** @class */ (function (_super) {
    __extends(UnimplementedException, _super);
    function UnimplementedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnimplementedException;
}(BaseException_1.BaseException));
exports.UnimplementedException = UnimplementedException;
