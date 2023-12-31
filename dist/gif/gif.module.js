"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiphyModule = void 0;
const common_1 = require("@nestjs/common");
const gif_controller_1 = require("./gif.controller");
const gif_service_1 = require("./gif.service");
const currency_service_1 = require("../currency/currency.service");
let GiphyModule = class GiphyModule {
};
exports.GiphyModule = GiphyModule;
exports.GiphyModule = GiphyModule = __decorate([
    (0, common_1.Module)({
        controllers: [gif_controller_1.GiphyController],
        providers: [gif_service_1.GiphyService, currency_service_1.CurrencyService],
    })
], GiphyModule);
//# sourceMappingURL=gif.module.js.map