"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var DOCUMENT_NAME = 'User';
var COLLECTION_NAME = 'Users';
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        "enum": ['active', 'inactive'],
        "default": 'active'
    },
    roles: {
        type: Array,
        "default": []
    }
}, {
    collection: COLLECTION_NAME,
    timestamp: true
});
exports["default"] = (0, mongoose_1.model)(DOCUMENT_NAME, UserSchema);
