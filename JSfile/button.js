/*button handling */

/* blacksheet handling */
const blacksheet = document.getElementById("intro")
blacksheet.addEventListener("click", () => {
    blacksheet.style.display = "none"
})

/* coins handling */
let p1M = 0
const p1 = document.getElementById("p1")
let p2M = 0
const p2 = document.getElementById("p2")

function moneyIncreaseForP1() {
    p1M + 3
    let textM = p1M.toString()
    p1.textContent = textM
    console.log("increased")
}

/* betray & cooperate handling */
const betray = document.getElementById("betray")
const coop = document.getElementById("cooperate")

const test = document.getElementById("player1")
betray.addEventListener("click", function() {
    console.log("betray");
    
    if (test.style.display === "block" ) {
        test.style.display = "none";
    } else {
        test.style.display = "block";
    }
})
coop.addEventListener("click", () => {
    console.log("cooperate");

})