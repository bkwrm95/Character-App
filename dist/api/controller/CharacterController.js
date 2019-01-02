"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterService_1 = require("../service/CharacterService");
const Database_1 = require("../utility/Database");
exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let database = new Database_1.Database();
    let service = new CharacterService_1.CharacterService();
    console.log('FUNCTION ENTER');
    database.getTables().then((results) => {
        console.log('FUNCTION EXIT');
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(results, null, 2),
        });
    });
};
