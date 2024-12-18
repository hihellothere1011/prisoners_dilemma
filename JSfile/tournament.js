import { Log } from "./log.js"
let f = "TOURNAMENT"
export default function makeMatches(num,arr) {
    Log.log(`The number of players: ${num}`,f)
    for (let x=0;x<num;x++) {
        Log.log(`Player of the round, p${x+1}: ${arr[x].name}`,f)
    }
    let finalMatch = []
    for (let i = 0; i<num; i++) {
        for (let j = i+1; j<num; j++) {
            finalMatch.push([arr[i],arr[j]])
            
        }
    }
    return finalMatch
}