export function rps(shot) {
    var result = {
        "rockpaper": "lose",
        "rockrock": "tie",
        "rockscissors": "win",
        "paperscissors": "lose",
        "paperpaper": "tie",
        "paperscissors": "win",
        "scissorsrock": "lose",
        "scissorsscissors": "tie",
        "scissorspaper": "win" 
      };
    const moves = ["rock", "paper", "scissors"]
    if (shot == null) {
        return {"player": moves[Math.floor(Math.random() * 3)]};
    } 
    else if (shot.toLowerCase() == "rock" || shot.toLowerCase() == "paper" || shot.toLowerCase() == "scissors") {
        var opponent = moves[Math.floor(Math.random() * 3)];
        return {"player": shot.toLowerCase(), "opponent": opponent, "result": result[shot.toLowerCase()+opponent]};
    }
    else {
        console.log(`Usage: node-rps [SHOT]`);
        console.log(`Play Rock Paper Scissors (RPS)`);
        console.log(``);
        console.log(`  -h, --help      display this help message and exit`);
        console.log(`  -r, --rules     display the rules and exit`);
        console.log(``);
        console.log(`Examples:`);
        console.log(`  node-rps        Return JSON with single player RPS result.`);
        console.log(`                  e.g. {"player":"rock"}`);
        console.log(`  node-rps rock   Return JSON with results for RPS played against a simulated opponent.`);
        console.log(`                  e.g {"player":"rock","opponent":"scissors","result":"win"}`);
        console.log(`Rules for Rock Paper Scissors:`);
        console.log(``);
        console.log(`  - Scissors CUTS Paper`);
        console.log(`  - Paper COVERS Rock`);
        console.log(`  - Rock CRUSHES Scissors`);
        process.exit(0); 
    }    
}

export function rpsls(shot) {
    var result = {
        "rockpaper": "lose",
        "rockrock": "tie",
        "rockscissors": "win",
        "rocklizard": "win",
        "rockspock": "lose",
        "paperscissors": "lose",
        "paperpaper": "tie",
        "paperscissors": "win",
        "paperlizard": "lose",
        "paperspock": "win",
        "scissorsrock": "lose",
        "scissorsscissors": "tie",
        "scissorspaper": "win", 
        "scissorslizard": "win",
        "scissorsspock": "lose",
        "lizardrock": "lose",
        "lizardpaper": "win",
        "lizardscissors": "lose",
        "lizardlizard": "tie",
        "lizardspock": "win",
        "spockrock": "win",
        "spockpaper": "lose",
        "spockscissors": "win",
        "spocklizard": "lose",
        "spockspock": "tie"
      };
    const moves = ["rock", "paper", "scissors", "lizard", "spock"]
    if (shot == null) {
        return {"player": moves[Math.floor(Math.random() * 5)]};
    }
    else if (!(shot.toLowerCase() == "rock" || shot.toLowerCase() == "paper" || shot.toLowerCase() == "scissors" || shot.toLowerCase() == "lizard" || shot.toLowerCase() == "spock")) {
        return "error: out of range";
    } 
    else {
        var opponent = moves[Math.floor(Math.random() * 5)];
        return {"player": shot.toLowerCase(), "opponent": opponent, "result": result[shot.toLowerCase()+opponent]};
    }
}
