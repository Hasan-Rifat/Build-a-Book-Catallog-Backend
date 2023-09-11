"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = require("../../../shared/prisma");
const insertIntoDB = (userId, orderedBooks) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.create({
        data: {
            userId,
            orderedBooks,
        },
    });
    return result;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findMany();
    return result;
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const getOrderForCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findMany({
        where: {
            id,
        },
    });
    return result;
});
exports.OrderService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    getOrderForCustomer,
};
