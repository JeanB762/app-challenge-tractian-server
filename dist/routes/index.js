"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const assets_routes_1 = require("./assets.routes");
const auth_routes_1 = require("./auth.routes");
const companies_routes_1 = require("./companies.routes");
const units_routes_1 = require("./units.routes");
const users_routes_1 = require("./users.routes");
exports.router = (0, express_1.Router)();
exports.router.use('/assets', assets_routes_1.assetsRoutes);
exports.router.use('/accounts', users_routes_1.usersRoutes);
exports.router.use('/company', companies_routes_1.companiesRoutes);
exports.router.use('/units', units_routes_1.unitsRoutes);
exports.router.use(auth_routes_1.authRoutes);
