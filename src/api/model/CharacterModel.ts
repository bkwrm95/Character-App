import {Entity} from "./Entity";


export class Character extends Entity {

    name: string;
    race: string;
    class: string;

    hp: number;
    ac: number;

    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;

    skills: string[];
    gear: string[];
    feats: string[];
    spells: string[];

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