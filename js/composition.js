/**
 * Created by harzicn on 13/06/2017.
 * This file is used for logic that represents the composition.
 */

(function () {
    var game = this.colorQuestGame = this.colorQuestGame || {};
    // var game = window.colorQuestGame = window.colorQuestGame || {};
    /**
     * composition model definition
     * composition is a deck of pattern put together
     */
    var Composition = game.Composition = (function () {
        function Composition() {
            this.data = [];
        }

        return Composition;
    })();
})();