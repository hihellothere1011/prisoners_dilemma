import * as pic from "./picture.js"
import player from "./player.js"
import generateDecision from "./personalities.js"



betray()
cooperate()


let player1 = playerCreation("Austin", 0)
let player2 = playerCreation("Bob", 0)
let games = 0
let roundsLeft = numOfRound(10,20)

function playerCreation(name, money, personality=0) {
    const plays = new player(name, money, personality)
    return plays
}

function numOfRound(min=10, max=15) {
    if (min>max) [min, max] = [max, min]
    return Math.floor(Math.random() *(max-min)) + min
}

function startTheGame() {
    document.getElementById("mainPart").style.display = "block"
    document.getElementById("coinsTotal1").style.display = "none"
    document.getElementById("coinsTotal2").style.display = "none"
    games += 1
    document.getElementById("games").textContent = `GAME: ${games}`
    player2.personality = Math.floor(Math.random() * 3)

    console.log(`P2 personality: ${player2.personality}`)
}



function nameSetting() {
    document.getElementById("play").addEventListener("click", (event) => {
        event.preventDefault()
        startTheGame()
        let playerName = document.getElementById("p1name").value
        player1.name = playerName
        document.getElementById("playername").textContent = player1.name
        document.getElementById("player2name").textContent = player2.name
        document.getElementById("text").style.display = "none"
    })
}

nameSetting()





/*point system */
function pointSystem(p1Decision, p2Decision = generateDecision(player2)) {
    let p1M = document.getElementById("p1")
    let p2M = document.getElementById("p2")
    switch (`${p1Decision}-${p2Decision}`) {
        case "betray-betray":
            player1.money += 1
            player2.money += 1
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            break;
        case "betray-cooperate":
            player1.money += 5
            player2.money += 0
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            break;
        case "cooperate-betray":
            player1.money += 0
            player2.money += 5
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            break;
        case "cooperate-cooperate":
            player1.money += 3
            player2.money += 3
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            break;
        default:
            console.log("Invalid decisions");
        
    }
    player2.history.push([p1Decision,p2Decision])
}

function gameEnds() {
    console.log("Game ends")
    let p1M = document.getElementById("p1")
    let p2M = document.getElementById("p2")
    p1M.textContent = 0
    p2M.textContent = 0
    roundsLeft = numOfRound(10,20)
    document.getElementById("coinsTotal1").textContent = `P1 Coins in total: ${player1.money}`
    document.getElementById("coinsTotal2").textContent = `P2 Coins in total: ${player2.money}`
    document.getElementById("coinsTotal1").style.display = "flex"
    document.getElementById("coinsTotal2").style.display = "flex"
    player1.money = 0
    player2.money = 0
    player1.history = []
    player2.history = []
    document.getElementById("text").style.display = "flex"
    document.getElementById("mainPart").style.display = "none"
}

/* betray & cooperate handling */
function buttonPress(p1,p2) {
    roundsLeft -= 1
    console.log(roundsLeft)
    if (roundsLeft <= 0) {
        gameEnds()
    }
}


function betray() {
    const betray = document.getElementById("betray")
    betray.addEventListener("click", function() {
        pointSystem("betray")
        buttonPress()
    })
}
function cooperate() {
    const coop = document.getElementById("cooperate")
    coop.addEventListener("click", () => {
        pointSystem("cooperate")
        buttonPress()
    })

}
