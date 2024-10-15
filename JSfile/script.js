
/*Main part (In script.js) */
import * as pic from "./picture.js"
import player from "./player.js"
import generateDecision from "./personalities.js"


betray()
cooperate()
nameSetting()

let player1 = playerCreation("Austin", 2)
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
    document.getElementById("coinsTotal1").style.display = "none"
    document.getElementById("coinsTotal2").style.display = "none"
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
    /*const sheet  = document.createElement("table")
    const rows = document.createElement("tr")
    const heads = document.createElement("th")
    const data = document.createElement("td")
    rows.id = "rounds"
    sheet.appendChild(rows)
    rows.id = "p1game"
    sheet.appendChild(rows)
    rows.id = "p2game"
    sheet.appendChild(rows)*/
    const round = document.getElementById("rounds")
    const headPlayer = document.createElement("th")
    headPlayer.textContent = "Player"
    round.appendChild(headPlayer)
    const p1game  = document.getElementById("p1game")
    const player1Name = document.createElement("td")
    player1Name.textContent = `${player1.name}`
    p1game.appendChild(player1Name)
    const p2game  = document.getElementById("p2game")
    const player2Name = document.createElement("td")
    player2Name.textContent = `${player2.name}`
    p2game.appendChild(player2Name)
    gameHistory[gameHistory.length - 1].forEach((item, index) => {
        switch (`${item[0]},${item[1]}`) {
            case "betray,betray":
            case "cooperate,cooperate":
            case "betray,cooperate":
            case "cooperate,betray":
        }
        const his = document.createElement("td")
        his.textContent = `${item[0]}`
        p1game.appendChild(his)
        const his2 = document.createElement("td")
        his2.textContent = item[1]
        p2game.appendChild(his2)
        const roundsSend = document.createElement("th")
        roundsSend.textContent = `${index+1}`
        round.appendChild(roundsSend)
    })
    console.log(document.getElementById("resultSheet").style.display)
    
    
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
                document.getElementById("coinsTotal1").style.display = "none"
                document.getElementById("coinsTotal2").style.display = "none"
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
        document.getElementById("coinsTotal1").style.display = "none"
        document.getElementById("coinsTotal2").style.display = "none"
        document.getElementById("lastScene").style.display = "flex"
        document.getElementById("you").textContent = `${player1.name}, the failure , get ${player1.coinsTotal} coins`
        document.getElementById("cousin").textContent = `Amazing cousin,  ${player2.name}, get ${player2.coinsTotal} coins`
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