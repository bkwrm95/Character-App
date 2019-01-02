import { createPool, format, Pool } from "mysql";
import { Entity } from "../model/Entity";

export class Database {

    private pool!: Pool;

    private static instance: Database;
    constructor() {

        if (Database.instance)
            return Database.instance;
        else
            Database.instance = this;


        console.log('NEW Database');

        this.pool = createPool({
            connectionLimit : 10,
            host     : process.env.DB_ENDPOINT,
            user     : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_DATABASE,
        });

        return this;
    }

    async getTables() : Promise<string[]>{
        return new Promise<string[]>((resolve) => {
            this.pool.query('SHOW TABLES', function (err, result: any[]) {
                if (err) throw err;
                result = result.map(x => x.Tables_in_testdb);
                resolve(result);
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


    createEntity(entity: Entity) {

        const tableName = entity.constructor['name'];

        this.doesTableExist(tableName);



    }


    entityToSQL(entity: Entity) {

        let query = 'INSERT INTO ';


    }


    async doesTableExist(tableName: string) : Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this.pool.query('SHOW TABLES LIKE ?', [tableName],function (err, results) {
                if (err) throw err;
                resolve(results != null);
            });
        });
    }

}
