/**
 * Created by harzicn on 13/06/2017.
 * This file is used for adding methods to existing built-in objects
 * to enhance convenience.
 *
 * Make it easy to remove all the DOM element from the quest view.
 * add the removeAllChildren method to all the DOM nodes
 */


Node.prototype.removeAllChildren = function () {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};