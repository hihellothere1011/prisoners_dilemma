
/*Main part (In script.js) */
import * as pic from "./picture.js"
import player from "./player.js"
import generateDecision from "./personalities.js"


betray()
cooperate()
nameSetting()

let player1 = playerCreation("Austin", 0, 2)
let player2 = playerCreation("Tim", 0)
let games = 0
let roundsLeft = numOfRound(10,20)
let roundsLeftCopy = roundsLeft
let gamesMax = numOfRound(5, 10)
let gameHistory = []

console.log(gamesMax)

function playerCreation(name, money, personality=0) {
    const plays = new player(name, money, personality)
    return plays
}

function numOfRound(min=10, max=15) {
    if (min>max) [min, max] = [max, min]
    return Math.floor(Math.random() *(max-min)) + min
}

/*Start and end (In startEnd.js) */

function startTheGame() {
    gameHistory.push([])
    player1.history = []  
    player2.history = []
    document.getElementById("mainPart").style.display = "block"
    document.getElementById("resultSheet").style.display = "none"
    games += 1
    if (gamesMax !== games) {
        document.getElementById("games").textContent = `GAME: ${games}`
    } else {
        document.getElementById("games").textContent = `GAME: Final`
    }
    player1.personality = 0
    player2.personality = Math.floor(Math.random() * 3)
    console.log(`P2 personality: ${player2.personality}`)
}

function resultSheet() {
    const round = document.getElementById("rounds")
    const gameDisplay = document.createElement("td")
    gameDisplay.textContent = "Game"
    round.appendChild(gameDisplay)
    const headPlayer = document.createElement("th")
    headPlayer.textContent = "Player"
    round.appendChild(headPlayer)
    const p1game  = document.getElementById("p1game")
    const gameShow1 = document.createElement("td")
    gameShow1.textContent = `${games}`
    gameShow1.removeAttribute("style")
    p1game.appendChild(gameShow1)
    const player1Name = document.createElement("td")
    player1Name.textContent = `${player1.name}`
    p1game.appendChild(player1Name)
    const p2game  = document.getElementById("p2game")
    const gameShow2 = document.createElement("td")
    gameShow2.textContent = `${games}`
    gameShow2.removeAttribute("style")
    p2game.appendChild(gameShow2)
    const player2Name = document.createElement("td")
    player2Name.textContent = `${player2.name}`
    p2game.appendChild(player2Name)
    console.log(gameHistory)
    gameHistory[gameHistory.length - 1].forEach((item,index) => {
        const his = document.createElement("td")
        const his2 = document.createElement("td")
        switch (`${item[0]}-${item[1]}`) {
            case "betray-betray":
                his.textContent = 1
                his2.textContent = 1
                break;
            case "cooperate-cooperate":
                his.textContent = 3
                his2.textContent = 3
                break;
            case "betray-cooperate":
                his.textContent = 5
                his2.textContent = 0
                break;
            case "cooperate-betray":
                his.textContent = 0
                his2.textContent = 5
                break;
            default:
                console.log(`${item[0]}-${item[1]}`)
                his.textContent = he
                his2.textContent = ha
                break;
        }
        p1game.appendChild(his)
        p2game.appendChild(his2)
        const roundsSend = document.createElement("th")
        roundsSend.textContent = `${index+1}`
        round.appendChild(roundsSend)
    })
}
function gameEnds() {
    console.log("Game ends")
    
    roundsLeft = numOfRound(10,20)
    roundsLeftCopy = roundsLeft
    gameEndsStyle()
    player1.coinsTotal += player1.money
    player2.coinsTotal += player2.money
    resultSheet()
    player1.money = 0
    player2.money = 0
    document.getElementById("p1").textContent = player1.money
    document.getElementById("p2").textContent = player2.money
    player1.history = []
    player2.history = []
}

function gameEndsStyle() {
    document.getElementById("text").style.display = "flex"
    document.getElementById("mainPart").style.display = "none"
    document.getElementById("resultSheet").style.display = "table"
}

function nameSetting() {
    document.getElementById("play").addEventListener("click", function hello(event) {
        event.preventDefault()
        startTheGame()
        let playerName = document.getElementById("p1name").value
        player1.name = playerName
        document.getElementById("playername").textContent = player1.name
        document.getElementById("player2name").textContent = player2.name
        document.getElementById("text").style.display = "none"
        /*Tornament mode */
        
        /*function bots() {
            pointSystem(generateDecision(player1))
            roundsLeft -= 1
            if (roundsLeft<=0) {
                gameEnds()
            }
            if (games === gamesMax) {
                document.getElementById("mainPart").style.display = "none"
                document.getElementById("lastScene").style.display = "flex"
                document.getElementById("you").textContent = `${player1.name}, the failure , get ${player1.coinsTotal} coins`
                document.getElementById("cousin").textContent = `Amazing cousin,  ${player2.name}, get ${player2.coinsTotal} coins`
                document.getElementById("text").style.display = "none"
                if (player1.coinsTotal < player2.coinsTotal) {
                    document.getElementById("result").textContent = "Look at your cousin Tim, he earn 500 thousand coins more than you.\nYou losed, failure."
                    stop()
                }
                window.stop()
                document.getElementById("play").removeEventListener("click", hello)
            }
        }

        for (let x =0; x<roundsLeft; x+=0.05) {
            bots()
        }
        /*Tornament mode */
    
    })
}

/*point system (In point.js)*/

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
    gameHistory[gameHistory.length - 1].push([p1Decision,p2Decision])
}

/* betray & cooperate handling (In decision.js)*/

function buttonPress() {
    roundsLeft -= 1
    console.log(roundsLeft)
    if (roundsLeft <= 0) {
        gameEnds()
    } else if (games === gamesMax) {
        document.getElementById("mainPart").style.display = "none"
        document.getElementById("lastScene").style.display = "flex"
        document.getElementById("you").textContent = `${player1.name}, the failure , get ${player1.coinsTotal} coins`
        document.getElementById("cousin").textContent = `Amazing cousin,  ${player2.name}, get ${player2.coinsTotal} coins  `
        if (player1.coinsTotal < player2.coinsTotal) {
            document.getElementById("result").textContent = "Look at your cousin Tim, he earn 500 thousand coins more than you.\nYou losed, failure."
            stop()
        }
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