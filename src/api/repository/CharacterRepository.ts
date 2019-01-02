import { Database } from "../utility/Database";
import { Character } from "../model/CharacterModel";

export class CharacterRepository {

    private database: Database;

    constructor() {
        console.log('NEW CharacterRepository');
        this.database = new Database();
    }


    /*async createCharacter(character: Character):Promise<string> {
        console.log('CharacterRepository.createCharacter()');




        return this.database.createTable(CHARACTER_TABLE);
    }*/



}





/*const CHARACTER_TABLE: Table = {
    name: 'character',
    columns: [
        {name: 'name', type: 'VARCHAR', length: 40},
    ]
};*/
