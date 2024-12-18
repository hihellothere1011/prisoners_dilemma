import player from "./player.js"
import makeMatches from "./tournament.js"
import match from "./singlematch.js"
import { Log } from "./log.js"

let f = "MAIN"

let playerDict =[
    playerCreation("Austin",0),
    playerCreation("Tim",0),
    playerCreation("Tom",0),
    playerCreation("Trump",0),
    playerCreation("Rick",0),
    playerCreation("Daniel",0),
    playerCreation("Dwayne",0),
    playerCreation("Peter",0)
]

let centralHistory = []

function playerCreation(name,personality=0) {
    const plays = new player(name, personality)
    return plays
}

let matchSheet = makeMatches(playerDict.length,playerDict)
matchSheet.forEach((item)=>{
    Log.log(`Match: ${item[0].name} VS ${item[1].name}`,f)
})
Log.log(`
    
    Matches length: ${matchSheet.length}
    `,f)

for (let x=0; x<matchSheet.length; x++) {
    Log.log(`Match${x+1}`,f)
    centralHistory.push(match(matchSheet[x][0],matchSheet[x][1]))
}

console.log(centralHistory)
