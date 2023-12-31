"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiphyController = void 0;
const common_1 = require("@nestjs/common");
const gif_service_1 = require("./gif.service");
const currency_service_1 = require("../currency/currency.service");
let GiphyController = class GiphyController {
    constructor(giphyService, currencyService) {
        this.giphyService = giphyService;
        this.currencyService = currencyService;
    }
    async getRandomGif() {
        try {
            const baseCurrency = 'USD';
            const targetCurrency = 'CHF';
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            const todayExchangeRate = await this.currencyService.getExchangeRate(baseCurrency, targetCurrency, today);
            const yesterdayExchangeRate = await this.currencyService.getExchangeRate(baseCurrency, targetCurrency, yesterday);
            let tag;
            if (todayExchangeRate > yesterdayExchangeRate) {
                tag = 'rich';
            }
            else {
                tag = 'broke';
            }
            const gifUrl = await this.giphyService.getRandomGifByTag(tag);
            return { url: gifUrl };
        }
        catch (error) {
            console.error('Error fetching random gif:', error);
        }
    }
};
exports.GiphyController = GiphyController;
__decorate([
    (0, common_1.Get)('random-gif'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GiphyController.prototype, "getRandomGif", null);
exports.GiphyController = GiphyController = __decorate([
    (0, common_1.Controller)('giphy'),
    __metadata("design:paramtypes", [gif_service_1.GiphyService,
        currency_service_1.CurrencyService])
], GiphyController);
//# sourceMappingURL=gif.controller.js.map