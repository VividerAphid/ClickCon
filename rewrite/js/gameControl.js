function render(G, art, gam, map, settings){
    G.fillStyle = "#000";
    G.fillRect(0,0,mapCan.width, mapCan.height);
    let colourBlind = colourblindToggle.checked;
    let showIDs = IDToggle.checked;
    let reps = map.length;
    let activePlayer = gam.currentPlayer;
    for (var r = 0; r < reps; r++){
        map[r].drawConnections(G, map, settings);
        map[r].drawPlaneto(G, art, map, activePlayer, settings, colourBlind, showIDs);
    }
}

function updateLockLife(map){
    let reps = map.length;
    for(var r = 0; r<reps; r++){
        map[r].decayLockLife();
    }
}

function updateValues(map){

}

function checkLivePlayers(inp){
    let updated = [];
    let count = inp.length;
    for(let r = 0; r < count; r++){
        var cnt = inp[r].length;
        for(var t = 1; t < cnt; t++){
            if(inp[r][t].getScore() > 0){
                updated.push(inp[r]);
            }
        }
    }
    return updated;
}

function updateScores(map, gam){
    let reps = gam.players.length;
    for(var r = 0; r < reps; r++){
        var list = gam.players[r].getOwned(map);
        var score = 0;
        let lreps = list.length;
        for(var t = 0; t<lreps; t++){
            score += map[list[t]].value;
        }
        gam.players[r].score = score;
    }
}

function initMap(map, gam, settings){
    let mapLength = map.length;

    setSpawns(map, gam, settings.spawnCount);

    if(settings.randShields){
        var count = Math.floor(Math.random()* (mapLength*.5) + (mapLength*.15));
        for(var r = 0; r<count; r++){
            var pick = Math.floor(Math.random()*mapLength);
            map[pick].hasShield = true;
            if(settings.multiShield){
                map[pick].shieldVal = Math.floor((Math.random()*9) + 1);
            }
        }
    }

    if(settings.randBlocks){
        var count = Math.floor(Math.random()* (mapLength*.35) + 3);
        for(var r = 0; r<count; r++){
            var pick = Math.floor(Math.random()*mapLength);
            map[pick].lockLife = Math.floor(Math.random()*5)+1;
        }
    }

    updateValues(map);
    updateScores(map, gam);
}

function setSpawns(map, gam, spawnCount){
    let teamCount = gam.teams.length;
    let sorted = gam.teams.slice();
    sorted.sort(function(a, b){return b.players.length - a.players.length});
    let maxSpawns = sorted[0].players.length * spawnCount;
    if(maxSpawns * gam.teams.length > map.length){
        maxSpawns = Math.floor(map.length / gam.teams.length);
    }
    let tempMap = map.slice();
    for(let r = 0; r < teamCount; r++){
        var dispensed = 0;
        let currentTeam = gam.teams[r].players;
        while(dispensed <= maxSpawns){
            for(let t = 0; t < currentTeam.length; t++){
                dispensed++;
                if(dispensed > maxSpawns){
                    break;
                }
                else{
                    let ranNum = Math.floor(Math.random()*tempMap.length);
                    let pick = tempMap[ranNum].id;
                    map[pick].setOwner(currentTeam[t]);
                    tempMap = removeAtIndex(tempMap, ranNum);
                }
            }
        }
    }

}

function move(tar, pla, map){
    //tId, tCol, oId, oCol, iCol, oChar, tChar
    if(tar.lockLife == 0){
        if(tar.hasShield == false){
            if(tar.ownerId == pla.id){
                map[tar.id].hasShield = true;
                map[tar.id].shieldVal++;
            }
            else{
                map[tar.id].setOwner(pla.teamId, pla.teamColour, pla.id, pla.colour, pla.cInverse, pla.getChars()[1], pla.getChars()[0]);
            }
        }
        else{
            if(tar.ownerId == pla.id){
                if(map[tar.id].shieldVal < 9){
                    map[tar.id].shieldVal++;
                }              
            }
            else if(map[tar.id].hasShield == true && map[tar.id].ownerId != pla.id){
                map[tar.id].hasShield = false;
            }    
        }
    }
}

function checkHit(gra, map, players, actPla, playing, botTurn, multiShield){
    var canvRect = mapCan.getBoundingClientRect();
	var x = (event.clientX - canvRect.left);
	var y = (event.clientY - canvRect.top);
    var r;
    var moved = false;
    let reps = map.length;
	if (actPla.isBot != true && playing && !botTurn){
        console.log("inside");
		for(r=0; r<reps;r++){
		if (x >= (map[r].x - map[r].radius*2) && x <= (map[r].x + map[r].radius*2)){
			if (y >= (map[r].y - map[r].radius*2) && y <= (map[r].y + map[r].radius*2)){
                if(map[r].lockLife == 0){
                    if (map[r].ownerId == players[actPla-1].id){
                        if(multiShield){
                            move(map[r], players[actPla-1], map);
                            moved = true;
                        }
                        else{
                            if(!map[r].hasShield){
                                move(map[r], players[actPla-1], map);
                                moved = true;
                            }
                        }
                    }
                    else{
                        if(checkProximity(map[r], map, players[actPla-1].id)){
                            move(map[r], players[actPla-1], map);
                            moved = true;
                        }
                    }
                    break;
                }
			}
		}
		}
    }
    return moved;
}

function checkProximity(targ, map, id){
	var r;
    var cons = targ.connections;
    let reps = cons.length;
		for(r=0; r < reps; r++){
			if (map[cons[r]].ownerId == id){
				return true;
			}
		}
	return false;
}

function tstScope(){
    console.log(activePlayer);
}