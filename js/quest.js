/**
 * Created by harzicn on 13/06/2017.
 * These files represent the data of a quest, including the level and quest
 * data manipulating methods.
 *
 * represent the level data in arrays. The number is the pattern.
 */

(function () {
    var game = this.colorQuestGame = this.colorQuestGame || {};
    // var game  = window.colorQuestGame = window.colorQuestGame || {};
    // level data
    var questLevels = [
        [[5, 6], [3]],
        [[6], [1, 2]],
        [[5, 6]],
        [[3], [1, 2], [4]],
        [[1, 2], [3], [4], [5, 6]]
    ];
    /**
     * quest model definition
     * quest is a kind of composition, the difference is that
     * quest is specifically used as the question for player
     * to give the answer.
     * So it comes with comparing logic.
     */
    var Quest = game.Quest = (function () {
        function Quest(level) {
            var questData = questLevels[level];
            this.data = questData;
        }

        Quest.prototype = new game.Composition();
        /**
         * Extends the Quest prototype from Composition
         */
        return Quest;
    })();
})();