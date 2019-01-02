"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
class Character extends Entity_1.Entity {
    constructor() {
        super();
        this.name = '';
        this.race = '';
        this.class = '';
        this.hp = 0;
        this.ac = 0;
        this.str = 0;
        this.dex = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
        this.skills = [''];
        this.gear = [''];
        this.feats = [''];
        this.spells = [''];
    }
}
exports.Character = Character;
