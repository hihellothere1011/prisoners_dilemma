/*button handling */

/* blacksheet handling */
const blacksheet = document.getElementById("intro")
blacksheet.addEventListener("click", () => {
    blacksheet.style.display = "none"
})

/* coins handling */
let p1M = 0
function p1MoneyHandling() {
    const p1 = document.getElementById("p1")
    let p1String = ""
    return [p1, p1String]
}

function p2MoneyHandling() {
    let p2M = 0
    const p2 = document.getElementById("p2")
    let p2String = ""
}

function moneyIncreaseForP1() {
    let [p1 ,p1String] = p1MoneyHandling()
    p1M = p1M + 1
    let textM = p1M.toString()
    console.log(textM)
    p1String = textM
    p1.textContent = p1String
    console.log("increased")
}

function moneyDecreaseForP1() {
    let [p1 ,p1String] = p1MoneyHandling()
    p1M = p1M - 1
    let textM = p1M.toString()
    console.log(textM)
    p1String = textM
    p1.textContent = p1String
    console.log("decreased")
}




/* betray & cooperate handling */
function betray() {
    const betray = document.getElementById("betray")
    betray.addEventListener("click", function() {
        console.log("betray");
        moneyIncreaseForP1()
    })
}
function coopearte() {
    const coop = document.getElementById("cooperate")
    coop.addEventListener("click", () => {
        console.log("cooperate");
        moneyDecreaseForP1()
    })
}
export default [betray(), coopearte()]