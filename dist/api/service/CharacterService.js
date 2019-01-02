"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterModel_1 = require("../model/CharacterModel");
const CharacterRepository_1 = require("../repository/CharacterRepository");
class CharacterService {
    constructor() {
        if (CharacterService.instance)
            return CharacterService.instance;
        else
            CharacterService.instance = this;
        this.repository = new CharacterRepository_1.CharacterRepository();
    }
    createCharacter() {
        return __awaiter(this, void 0, void 0, function* () {
            return new CharacterModel_1.Character();
        });
    }
}
exports.CharacterService = CharacterService;
