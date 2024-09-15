import * as pic from "./picture.js"
import player from "./player.js"



betray()
cooperate()

let player1 = playerCreation("Austin", 0)
let player2 = playerCreation("Bob", 10)

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
            
            player1.money -= 1
            player2.money -= 1
            console.log(player1.money, player2.money)
            break;
        case "betray-cooperate":
            // Empty case for p1 betraying and p2 cooperating
            break;
        case "cooperate-betray":
            // Empty case for p1 cooperating and p2 betraying
            break;
        case "cooperate-cooperate":
            // Empty case for both cooperating
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
