/*picture handling*/
const picture = {
    name: player2, value:""
}
const warden = document.getElementById("warden")

warden.style.backgroundImage = picture[warden]
//code



/*button handling */
const blacksheet = document.getElementById("intro")
blacksheet.addEventListener("click", () => {
    blacksheet.style.display = "none"
})

const betray = document.getElementById("betray")
const coop = document.getElementById("cooperate")

betray.addEventListener("click", () => {
    console.log("betray")
})
coop.addEventListener("click", () => {
    console.log("cooperate")
})
//code

/*state management*/
class sibling {
    constructor(name, money) {
        this.name = name
        this.money = money
    }
}

let playernamesubmit = ""
let playername = document.getElementById("playername")
document.getElementById("playerform").addEventListener("submit", () => {
    event.preventDefault()
    playernamesubmit = document.getElementById("write-in").value
    playername.style.textContent = playernamesubmit
    console.log(playername.style.textContent)
})


