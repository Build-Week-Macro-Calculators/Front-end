"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.axiosWithAuth = () => {
    return axios_1.default.create({
        baseURL: "https://macrocalc.herokuapp.com/api",
        headers: {
            Authorization: localStorage.getItem('token'),
        }
    });
};
