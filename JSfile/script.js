
/*Main part (In script.js) */
import * as pic from "./picture.js"
import player from "./player.js"
import generateDecision from "./personalities.js"
import resultSheet from "./sheet.js"

betray()
cooperate()
nameSetting()

let playerDict =[
    playerCreation("Tim",0),
    playerCreation("Tom",0),
    playerCreation("Trump",0),
    playerCreation("Rick",0),
    playerCreation("Daniel",0),
    playerCreation("Dwayne",0),
    playerCreation("Peter",0)
]

console.log(playerDict.length)
let player1 = playerCreation("Austin", 0)
let player2 = playerDict[Math.floor(Math.random()*7)]
let games = 0
let roundsLeft = 19
let roundsLeftCopy = roundsLeft
let gamesMax = ((playerDict.length+1)*(playerDict.length+2))*0.5
let gameHistory = []
    
let already = []



document.getElementById("resultSheet").style.display = "none"

console.log(gamesMax)

function playerCreation(name, money, personality=0) {
    const plays = new player(name, money, personality)
    return plays
}

function checkIfEnds() {
    if (games === gamesMax) {
        document.getElementById("text").style.display = "none"
    }
}

function whoWins(player1, player2) {
    if (player1.money>=player2.money) {
        return player1
    } else {
        return player2
    }
}

function nextPlayer(playerI,arr=already) {
    if (arr.includes(playerI)) {
        return true
    } else {
        return false
    }
}

function untilDone(x,y, ) {
    let finish = false;
    const dictLength = playerDict.length
    let availablePlayers = playerDict.filter(p => !nextPlayer(p))

    while (!finish) {
        x = playerDict[Math.floor(Math.random() * dictLength)]
        y = playerDict[Math.floor(Math.random() * dictLength)]
        
    
        if (availablePlayers.length <= 2) {
            return 
        }
        if (!nextPlayer(x) && 
            !nextPlayer(y) && 
            x !== y && 
            x.points === y.points) {
            finish = true
        }
    }
    return [x, y]
}
/*Start and end (In startEnd.js) */

function startTheGame() {
    gameHistory.push([])

    checkIfEnds()
    player1.history = []  
    player2.history = []
    already.push(player1)
    already.push(player2)
    document.getElementById("mainPart").style.display = "block"
    document.getElementById("resultSheet").style.display = "none"
    games += 1
    
    if (gamesMax !== games) {
        document.getElementById("games").textContent = `GAME: ${games}`
    } else if (games === 1) {
        let playerName = document.getElementById("p1name").value
        player1.name = playerName
    } else {
        if (games === gamesMax) {
            document.getElementById("games").textContent = `GAME: Final`
            document.getElementById("text").style.display = "none"
        }
    }
    
}

function gameEnds() {
    console.log("Game ends")
    console.log(games)

    let result = whoWins(player1,player2)
    result.points += 1
    console.log(player1.points,player2.points)
    
    roundsLeft = 19
    roundsLeftCopy = roundsLeft
    gameEndsStyle()
    
    player1.coinsTotal += player1.money
    player2.coinsTotal += player2.money
    
    resultSheet(gameHistory,player1,player2,games)
    console.log(document.getElementById("resultSheet"))
    
    if (games === gamesMax) {
        document.getElementById("resultSheet").style.display = "none"
    }
    
    player1.money = 0
    player2.money = 0
    document.getElementById("p1").textContent = player1.money
    document.getElementById("p2").textContent = player2.money
    
    player1.history = []
    player2.history = []

    let x = playerDict[Math.floor(Math.random() *8)]
    let y = playerDict[Math.floor(Math.random() *8)]
    let [newX, newY] = untilDone(x, y)
    player1 = newX
    player2 = newY
    
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
        
        
        document.getElementById("playername").textContent = player1.name
        document.getElementById("player2name").textContent = player2.name
        document.getElementById("text").style.display = "none"
        
        
        function bots() {
            pointSystem(generateDecision(player1))
            buttonPress()
        }
    
        for (let x =0; x<roundsLeftCopy; x++) {
            bots()
        }
    
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
        document.getElementById("text").style.display = "none"
        document.getElementById("mainPart").style.display = "none"
        document.getElementById("resultSheet").style.display = "none"
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