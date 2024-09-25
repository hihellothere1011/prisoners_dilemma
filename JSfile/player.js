/*player creation*/


export default class player {
    constructor(name, money, personality, history=[], coinsTotal=0) {
        this.name = name
        this.money = money
        this.history = history
        this.personality = personality
        this.coinsTotal = coinsTotal
    }
}