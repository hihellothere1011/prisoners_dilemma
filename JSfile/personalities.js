function zeroAndOne() {
    return Math.floor(Math.random() * 2)
}

export default function generateDecision(player) {
    switch (player.personality) {
        case 0 /*Randomly */:   
            return Math.random() < 0.5 ? "betray" : "cooperate";
        case 1 /*Tit for tat (Tom) */:
            if (!player.history.length) {
                return "cooperate"
            } else {
                return player.history[player.history.length - 1][0]
            }
        case 2 /*Kindness */:
            if (!player.history.length) {
                return "betray"
            } else if (player.history[player.history.length - 1][0] === "cooperate") {
                return "cooperate"
            } else if (zeroAndOne() === 0) {
                return "cooperate"
            } else {
                return "betray"
            }
        case 3:
    }
}
