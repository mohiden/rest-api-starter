"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "images";
const schema = new mongoose_1.default.Schema({}, {
    timestamps: true
});
exports.projectModel = mongoose_1.default.model("Order", schema, COLLECTION_NAME);
//# sourceMappingURL=project.model.js.map