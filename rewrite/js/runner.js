(function(){
    var colList = [["#ff0000","A","#00ffff"], ["#00ff00","B","#ff00ff"], ["#0000ff","C","#ffff00"], ["#ffff00","D","#0000ff"], ["#ff00ff","E","#00ff00"], ["#00cccc","F","#ff3333"], ["#e65c00","G","#19a3ff"], ["#2e5cb8","H","#d1a347"], ["#800080","I","#7fff7f"], ["#663300","J","#99ccff"], ["#ff8080","K","#007f7f"], ["#00802b","L","#ff7fd4"], ["#008080","M","#ff7f7f"], ["#800000","N","#7fffff"], ["#666699","O","#999966"], ["#cc9900","P","#3366ff"]];
    //startMenu(colList);
    inGame();
    var gameMap = mapConverter(praiseJibbers());

    var activePlayer = 1;
    var settings = {playing: true, hideScores: false, spawnCount: 35, randShields: false, randBlocks: true, fog: false, debug: true};

    var players = [];

    for(var r = 0; r < 16; r++){
        players.push(new bot((r+1), (r+1), "KnobBot-" + r, colList[r][0], colList[r][0], colList[r][2], colList[r][1], colList[r][1], true, 1));
    }

    players[0] = new player(1, 1, "Knob", colList[0][0], colList[0][0], colList[0][2], colList[0][1], colList[0][1], false);

    initMap(gameMap, players, settings);

    var g = mapCan.getContext("2d");
    setCanvasDims(gameMap);
    scoreboard(players,false);
    setUpControls(gameMap, players, g, settings, activePlayer);
    //g.scale(.15, .15);
    render(g, gameMap, settings, activePlayer);
})();