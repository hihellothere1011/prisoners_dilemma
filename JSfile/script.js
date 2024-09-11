import * as pic from "./picture.js"
import betray from "./button.js"
import cooperate from "./button.js"
import {player}from "./player.js"

const player1name = document.getElementById("playername")
const player2name = document.getElementById("player2name")

let playernamesubmit = ""
let playername = document.getElementById("playername")
document.getElementById("play").addEventListener("submit", () => {
    event.preventDefault()
    playernamesubmit = document.getElementById("write-in").value
    playernamesubmit.textContent = playernamesubmit
    console.log(playername.textContent)
})

function playerCreation() {
    event.preventDefault()
    let player1 = new player("Austin", 0)
    let player2 = new player("Bob", 10)
    player1name.textContent = player1.name
    player2name.textContent = player2.name

    console.log(player1.name)
    console.log(player2.name)
}

const play = document.getElementById("play")

play.addEventListener("click", playerCreation)
betray
cooperate
