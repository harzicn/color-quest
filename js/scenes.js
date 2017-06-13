/**
 * Created by harzicn on 31/05/2017.
 * from HTML5 Game Development HOTSHOTS
 */

(function(){
    var game = this.colorQuestGame = this.colorQuestGame || {};
    /**
     * Scenes
     * put some common scene logic into scene object
     *
     * Document.querySelector()
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
     * returns the first Element within the document that matchesthe specified
     * selector, or group of selectors.
     *
     * classList.remove and classList.add are methods of Element.classList
     * classList is a read-property which returns a live DOMTokenList collection
     * of the attributes of the element. Its methods remove and add are used to
     * remove specified class values or to add them (unless they already exist,
     * in which case they are ignored)
     */

    var scene = {
        node: document.querySelector('.scene'),
        show: function(){
            this.node.classList.remove('out');
            this.node.classList.add('in');
        },
        hide: function(){
            this.node.classList.remove('in');
            this.node.classList.add('out');
        }
    };
    /** Game Scene
     *  instance of game scene. This creates two temporary links to finish
     *  the level and complete the game.
     * @type {scene}
     */
    var gameScene = game.gameScene = Object.create(scene);
    gameScene.node = document.getElementById('game-scene');
    gameScene.handleInput = function () {

    };

    gameScene.hide = function(){
        /**
         * invoke the show function inside the prototype chain.
         * (aka . super.hide())
         *
         * Object.getPrototypeOf(obj)
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
         * The Object.getPrototypeOf() method returns a prototype (i.e. value of the internal
         * [[Prototype]] property of the specified object (obj is the object whose prototype
         * is to be returned.
         * Returns the prototype of the given object if no inherited properties exist,
         * null is returned
         *
         * Function.prototype.call()
         * the call() method calls a function with a given this value and arguments
         * provided individually (function.call(thisArg, arg1, arg2, ...)
         * the value of thisArg is provided for the call to a function.
         * arg1, arg2, ... are arguments for the function (none in below instance)
         * returns the result of the function with the specified this value and arguments
         */
        Object.getPrototypeOf(this).hide.call(this);

        /* extra */
        // add the class for the out effect
        // var questView = document.getElementById('quest');
        // questView.classList.add('out');
        /* end extra */
    };
    /**
     * this method in gameScene displays data in the gameScene
     * it creates the paterns in the quest area of the game according
     * to the given data
     * @param quest
     */
    gameScene.visualize = function (quest) {
        var questData = quest.data;
        var patternsToShow = [];
        for (var i in questData) {
            for (var j in questData[i]) {
                patternsToShow.push(questData[i][j]);
            }
        }
        /**
         * Quest
         * visualize the quest composition view:
         */
        var questCompositionNode = document.getElementById('quest-composition');
        /**
         * empty the DOM view
         */
        questCompositionNode.removeAllChildren();
        /**
         * visualize the pattern view
         */
        for (var i in patternsToShow) {
            var patternNode = document.querySelector('#element-template .pattern').cloneNode(/*clone children=*/true);
            patternNode.setAttribute('data-pattern', patternsToShow[i]);
            questCompositionNode.appendChild(patternNode);
        }
    };

    // Start Scene
    var startScene = game.startScene = Object.create(scene);
    startScene.node = document.getElementById('start-scene');
    startScene.handleInput = function(){
        document.getElementById('start-btn').onclick = function(){
            game.flow.nextLevel();
        };
    };

    // Level Completed Summary Scene
    var summaryScene = game.summaryScene = Object.create(scene);
    summaryScene.node = document.getElementById('summary-scene');
    summaryScene.handleInput = function(){
        document.getElementById('next-level-button').onclick = function(){
            game.flow.nextLevel();
        };
    };

    // Game Over Scene
    var gameoverScene = game.gameoverScene = Object.create(scene);
    gameoverScene.node = document.getElementById('gameover-scene');
    gameoverScene.handleInput = function(){
        var scene = this;
        document.getElementById('back-to-menu-button').onclick = function(){
            game.flow.startOver();
        };
    };
})();