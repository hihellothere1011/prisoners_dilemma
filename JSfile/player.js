/*player creation*/


export default class player {
    constructor(name, money, personality, history=[]) {
        this.name = name
        this.money = money
        this.history = history
        this.personality = personality
    }
}