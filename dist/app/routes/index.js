"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../module/auth/auth.routes");
const book_routes_1 = require("../module/book/book.routes");
const category_routes_1 = require("../module/category/category.routes");
const order_routes_1 = require("../module/order/order.routes");
const profile_routes_1 = require("../module/profile/profile.routes");
const user_routes_1 = require("../module/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ...
    {
        path: '/profile',
        route: profile_routes_1.ProfileRouter,
    },
    {
        path: '/users',
        route: user_routes_1.UserRouter,
    },
    {
        path: '/auth',
        route: auth_routes_1.AuthRouter,
    },
    {
        path: '/books',
        route: book_routes_1.BookRoutes,
    },
    {
        path: '/categories',
        route: category_routes_1.CategoryRoutes,
    },
    {
        path: '/orders',
        route: order_routes_1.OrderRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
