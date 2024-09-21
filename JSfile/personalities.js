export default function generateDecision(player) {
    switch (player.personality) {
        case 0:
            console.log("deciding...")    
            return Math.random() < 0.5 ? "betray" : "cooperate";
        case 1:
            if (!player.history[0]) {
                return "cooperate"
            }
            console.log(`p2's decision: ${player.history[0][0]}`)   
    }
}