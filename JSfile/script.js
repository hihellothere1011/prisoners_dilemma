import * as pic from "./picture.js"
import player from "./player.js"



betray()
cooperate()

let player1 = playerCreation("Austin", 0)
let p1M = document.getElementById("p1")
let player2 = playerCreation("Bob", 10)
let p2M = document.getElementById("p2")

function playerCreation(name, coins) {
    const plays = new player(name, coins)
    return plays
}






function generateDecision() {
    return Math.random() < 0.5 ? "betray" : "cooperate";
}



/*point system */
function pointSystem(p1Decision, p2Decision = generateDecision()) {
    console.log(p1Decision)
    console.log(`${p2Decision}-random`)
    switch (`${p1Decision}-${p2Decision}`) {
        case "betray-betray":
            player1.money += 1
            player2.money += 1
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            console.log(player1.money, p1Decision, player2.money, p2Decision)
            break;
        case "betray-cooperate":
            player1.money += 5
            player2.money += 0
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            console.log(player1.money, p1Decision, player2.money, p2Decision)
            break;
        case "cooperate-betray":
            player1.money += 0
            player2.money += 5
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            console.log(player1.money, p1Decision, player2.money, p2Decision)
            break;
        case "cooperate-cooperate":
            player1.money += 3
            player2.money += 3
            p1M.textContent = player1.money
            p2M.textContent = player2.money
            console.log(player1.money, p1Decision, player2.money, p2Decision)
            break;
        default:
            console.log("Invalid decisions");
    }
}

/* blacksheet handling */
const blacksheet = document.getElementById("intro")
blacksheet.addEventListener("click", () => {
    blacksheet.style.display = "none"
})



/* betray & cooperate handling */
function betray() {
    let p1Decision = 0
    const betray = document.getElementById("betray")
    betray.addEventListener("click", function() {
        pointSystem("betray")
    })
}
function cooperate() {
    const coop = document.getElementById("cooperate")
    coop.addEventListener("click", () => {
        pointSystem("cooperate")
    })

}
