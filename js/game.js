/**
 * Created by harzicn on 31/05/2017.
 * controls the game flow
 * anonymous function to put all variables local scope by default.
 */
(function () {
    /**
     * create one global variable game named colorQuestGame to act as the namespace
     * the following declaration mans that by default it will use the existing
     * colorQuestGame variable if it was declared previously. Otherwise it will be
     * a new empty object {}. This declaration should go into every file.
     */
        var game = window.colorQuestGame = window.colorQuestGame || {};
    // Main Game Logic
        game.flow = {
            currentLevel: 3,
            startOver: function () {
                game.startScene.hide();
                game.summaryScene.hide();
                game.gameoverScene.hide();
                game.gameScene.hide();
                game.startScene.show();
            },
            gameWin: function () {
                game.gameScene.hide();
                game.summaryScene.show();
            },
            gameOver: function () {
                game.startScene.show();
                game.gameScene.hide();
                game.gameoverScene.show();
            },
            nextLevel: function () {
                game.startScene.hide();
                game.summaryScene.hide();
                game.gameScene.show();
            },
            finishLevel: function () {
                game.gameScene.hide();
                game.summaryScene.show();
            },
            startLevel: function () {
                game.quest = new game.Quest(this.currentLevel);
                game.gameScene.visualize(game.quest);
            },
        };

    //Entry Point
    var init = function () {
            console.log("Welcome to the Colour Quest Game.");

            game.startScene.handleInput();
            game.summaryScene.handleInput();
            game.gameoverScene.handleInput();
            game.gameScene.handleInput();
    };

// window.onload = init // use window.onload (or when DOM ready) if the script is not placed at the end of the HTML file.
    init(); // start the game
})(); // self-executing function


