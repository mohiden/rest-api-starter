"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routing_1 = require("./routing");
const main = async (app) => {
    app.listen(3000, () => {
        console.log("Running!");
    });
    (0, routing_1.routing)(app);
};
main((0, express_1.default)());
//# sourceMappingURL=index.js.map