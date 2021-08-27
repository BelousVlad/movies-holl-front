export interface IBonus {
    image: String;
}

export class Bonus implements IBonus {
    constructor(public image: String) {}
}