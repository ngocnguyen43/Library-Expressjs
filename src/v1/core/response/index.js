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
exports.CREATED = exports.OK = void 0;
var ResponseMessage = /** @class */ (function () {
    function ResponseMessage(message, statuscode, data, pagination) {
        this.message = message;
        this.statuscode = statuscode;
        data ? (this.data = data) : null;
        pagination ? (this.pagination = pagination) : null;
    }
    return ResponseMessage;
}());
var OK = /** @class */ (function (_super) {
    __extends(OK, _super);
    function OK(message, statuscode, data) {
        if (statuscode === void 0) { statuscode = 200; }
        return _super.call(this, message, statuscode, data) || this;
    }
    return OK;
}(ResponseMessage));
exports.OK = OK;
var CREATED = /** @class */ (function (_super) {
    __extends(CREATED, _super);
    function CREATED(message, statuscode) {
        if (statuscode === void 0) { statuscode = 201; }
        return _super.call(this, message, statuscode) || this;
    }
    return CREATED;
}(ResponseMessage));
exports.CREATED = CREATED;
