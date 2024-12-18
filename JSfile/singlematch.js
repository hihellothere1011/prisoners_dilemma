import { Log } from "./log.js"
import personality from "./personality.js"


let f = "SINGLEMATCH"

export default function match(player1, player2, min = 15, max = 25) {
    console.log(`
        
        ${min},${max}
        
        `)
    let oneScore = 0
    let twoScore = 0
    let h = []
    let rounds = Math.floor(Math.random() * (max - min + 1))+min
    Log.log(`Match players: ${player1.name} (personality ${player1.personality}), ${player2.name} (personality ${player2.personality})`,f)
    Log.log(`Total rounds: ${rounds}`,f)
    for (let x=0; x<rounds; x++) {
        let [p1,p2] = personality(player1,player2,h)
        switch (`${p1}:${p2}`) {
            case "0:0" :
                p1 = "Betray"
                p2 = "Betray"
                oneScore ++
                twoScore ++
                break
            case "1:1" :
                p1 = "Cooperate"
                p2 = "Cooperate"
                oneScore +=3
                twoScore +=3
                break
            case "0:1" :
                p1 = "Betray"
                p2 = "Cooperate"
                oneScore +=5
                break
            case "1:0" :
                p1 = "Cooperate"
                p2 = "Betray"
                twoScore +=5
                break
        }
        h.push([p1,p2])
        
    }
    
    h.forEach((item,x=1)=>{
        
        Log.log(`${x},${item[0]},${item[1]}`,f)
        x++
    })
    
    
    Log.log(`
        
        Player1's score: ${oneScore}, Player2's score: ${twoScore}`,f)
    
    if (oneScore >= twoScore) {
        Log.log(`
            
            Winner of the match: ${player1.name}
            `,f)
    } else {
        Log.log(`
        
            Winner of the match: ${player2.name}
            `,f)
    }
    
    return h
}