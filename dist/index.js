"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server = express_1.default();
server.get("/", function (req, res) {
    return res.json({ message: "Hello, World!" });
});
server.listen(8081, function () {
    console.log("Servidor rodando na porta 8081!");
});
