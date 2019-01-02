import { Character } from "../model/CharacterModel";
import { CharacterRepository } from "../repository/CharacterRepository";


export class CharacterService {

    private repository!: CharacterRepository;

    private static instance: CharacterService;

    constructor() {
        if (CharacterService.instance)
            return CharacterService.instance;
        else
            CharacterService.instance = this;

        this.repository = new CharacterRepository();

    }

    async createCharacter() : Promise<Character> {



        return new Character();
    }

}