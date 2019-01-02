

export class Entity {

    private readonly table_name: string;
    private id!: number;

    constructor() {
        this.table_name = this.constructor['name'];
    }

    protected getTableName() : string {
        return this.table_name;
    }

}