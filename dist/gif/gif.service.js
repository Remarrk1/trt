"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GifService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let GifService = class GifService {
    constructor() {
        this.apiKey = 'uDFmYr9EbIDi727aj7ahIBBXpvWFsF0W';
    }
    async getRandomRichGif() {
        try {
            const response = await axios_1.default.get('https://api.giphy.com/v1/gifs/random', {
                params: {
                    api_key: this.apiKey,
                    tag: 'rich',
                },
            });
            return response.data.data.images.original.url;
        }
        catch (error) {
            throw error;
        }
    }
    async getRandomBrokeGif() {
        try {
            const response = await axios_1.default.get('https://api.giphy.com/v1/gifs/random', {
                params: {
                    api_key: this.apiKey,
                    tag: 'broke',
                },
            });
            return response.data.data.images.original.url;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.GifService = GifService;
exports.GifService = GifService = __decorate([
    (0, common_1.Injectable)()
], GifService);
//# sourceMappingURL=gif.service.js.map