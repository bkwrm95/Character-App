"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entity {
    constructor() {
        this.table_name = this.constructor['name'];
    }
    getTableName() {
        return this.table_name;
    }
}
exports.Entity = Entity;
