


/*point system */
function pointSystem(p1Decision, p2Decision) {
    console.log("Working")
    if (p1Decision === 1 && p2Decision === 1/* 1==Coop  */) {
        console.log("Both cooperate")
        console.log()
    }
}

/* blacksheet handling */
const blacksheet = document.getElementById("intro")
blacksheet.addEventListener("click", () => {
    blacksheet.style.display = "none"
})

/* coins handling */
let p1M = 0
let p2M = 0
function p1MoneyHandling() {
    const p1 = document.getElementById("p1")
    let p1String = ""
    return [p1, p1String]
}

function p2MoneyHandling() {
    const p2 = document.getElementById("p2")
    let p2String = ""
    return [p2, p2String]
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
    p1M = p1M -1
    let textM = p1M.toString()
    console.log(textM)
    p1String = textM
    p1.textContent = p1String
    console.log("decreased")
}

function moneyIncreaseForP2() {
    let [p2 ,p2String] = p2MoneyHandling()
    p2M = p2M + 1
    let textM = p2M.toString()
    console.log(textM)
    p2String = textM
    p2.textContent = p2String
    console.log("increased")
}

function moneyDecreaseForP2() {
    let [p2 ,p2String] = p2MoneyHandling()
    p2M = p2M -1
    let textM = p2M.toString()
    console.log(textM)
    p2String = textM
    p2.textContent = p2String
    console.log("decreased")
}


/* betray & cooperate handling */
function betray() {
    let p1Decision = 0
    const betray = document.getElementById("betray")
    betray.addEventListener("click", function() {
        console.log("betray");
        moneyIncreaseForP1()
        moneyDecreaseForP2()
    })
}
function cooperate() {
    const coop = document.getElementById("cooperate")
    coop.addEventListener("click", () => {
        console.log("cooperate");
        moneyDecreaseForP1()
        moneyIncreaseForP2()
    })
}
export default {betray, cooperate, pointSystem}