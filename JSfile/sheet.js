function resultSheet(gameHistory) {
    const sheet = document.getElementById("resultSheet")

    

    const p1game  = document.createElement("tr")
    const gameShow1 = document.createElement("td")
    gameShow1.textContent = `${games}`
    p1game.appendChild(gameShow1)
    const player1Name = document.createElement("td")
    player1Name.textContent = `${player1.name}`
    p1game.appendChild(player1Name)

    const p2game  = document.createElement("tr")
    const gameShow2 = document.createElement("td")
    gameShow2.textContent = `${games}`
    p2game.appendChild(gameShow2)
    const player2Name = document.createElement("td")
    player2Name.textContent = `${player2.name}`
    p2game.appendChild(player2Name)

    console.log(gameHistory)
    gameHistory[gameHistory.length - 1].forEach((item) => {
        const his = document.createElement("td")
        const his2 = document.createElement("td")
        switch (`${item[0]}-${item[1]}`) {
            case "betray-betray":
                his.textContent = 1
                his.style.backgroundColor = "#ff5d5d"
                his2.textContent = 1
                his2.style.backgroundColor = "#ff5d5d"
                break;

            case "cooperate-cooperate":
                his.textContent = 3
                his.style.backgroundColor = "#88ff5d"
                his2.textContent = 3
                his2.style.backgroundColor = "#88ff5d"
                break;

            case "betray-cooperate":
                his.textContent = 5
                his.style.backgroundColor = "#ff5d5d"
                his2.textContent = 0
                his2.style.backgroundColor = "#88ff5d"
                break;
            case "cooperate-betray":
                his.textContent = 0
                his.style.backgroundColor = "#88ff5d"
                his2.textContent = 5
                his2.style.backgroundColor = "#ff5d5d"
                break;
            default:
                console.log(`${item[0]}-${item[1]}`)
                his.textContent = he
                his2.textContent = ha
                break;
        }
        p1game.appendChild(his)
        p2game.appendChild(his2)
    })
    if (p1game.length >19) {
        p1game.deleteCell(-1)
    }
    if (p2game.length >19) {
        p2game.deleteCell(-1)
    }
    sheet.appendChild(p1game)
    sheet.appendChild(p2game)
}