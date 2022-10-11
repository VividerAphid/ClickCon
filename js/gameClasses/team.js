class team{
    constructor(i, colour){
        this.id = i;
        this.colPack = colour;
        this.players = [];
    }

    addPlayers(pla){
        this.players = pla;
    }

    addPlayer(pla){
        this.players.push(pla);
    }

    getScore(){
        var reps = this.players.length;
        var score = 0;
        for(var r = 0; r < reps; r++){
            score += this.players[r].score;
        }
        return score;
    }
    
    get tChar(){
        return this.colPack.char;
    }
    
    get colour(){
        return this.colPack.colour;
    }

    get cInverse(){
        return this.colPack.inverse;
    }
}