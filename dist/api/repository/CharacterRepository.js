"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../utility/Database");
class CharacterRepository {
    constructor() {
        console.log('NEW CharacterRepository');
        this.database = new Database_1.Database();
    }
}
exports.CharacterRepository = CharacterRepository;
/*const CHARACTER_TABLE: Table = {
    name: 'character',
    columns: [
        {name: 'name', type: 'VARCHAR', length: 40},
    ]
};*/
