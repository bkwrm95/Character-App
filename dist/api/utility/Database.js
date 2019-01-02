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
const mysql_1 = require("mysql");
class Database {
    constructor() {
        if (Database.instance)
            return Database.instance;
        else
            Database.instance = this;
        console.log('NEW Database');
        this.pool = mysql_1.createPool({
            connectionLimit: 10,
            host: process.env.DB_ENDPOINT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
        return this;
    }
    getTables() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.pool.query('SHOW TABLES', function (err, result) {
                    if (err)
                        throw err;
                    result = result.map(x => x.Tables_in_testdb);
                    resolve(result);
                });
            });
        });
    }
    /*async createTable(table: Table): Promise<string> {
        return new Promise<string>((resolve) => {

            let query: string = 'CREATE TABLE IF NOT EXISTS ?? (';
            let args: any[] = [table.name];

            for (let col of table.columns) {
                if (col.type === 'VARCHAR') {
                    query += '?? VARCHAR(?)';
                    args.push(col.name, col.length);
                } else {
                    query += '?? ' + col.type;
                    args.push(col.name);
                }
            }
            query += ')';

            let sqlString = format(query, args);

            this.pool.query(sqlString, function (err, results) {
                if (err) throw err;
                resolve(results);
            });
        });
    }*/
    createEntity(entity) {
        const tableName = entity.constructor['name'];
        this.doesTableExist(tableName);
    }
    entityToSQL(entity) {
        let query = 'INSERT INTO ';
    }
    doesTableExist(tableName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.pool.query('SHOW TABLES LIKE ?', [tableName], function (err, results) {
                    if (err)
                        throw err;
                    resolve(results != null);
                });
            });
        });
    }
}
exports.Database = Database;
