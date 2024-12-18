import { Log } from "./log.js"

let f = "PERSONALITY"

export default function personality(p1,p2) {
    let p = [p1.personality,p2.personality]
    let finalD = []
    for (let x=0;x<2;x++){
        switch (p[x]) {
            case 0:
                finalD.push(random())
        }
        
    }
    return finalD
}   

function random() {
    return Math.floor(Math.random()*2)
}