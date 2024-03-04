"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLNode = /** @class */ (function () {
    function AVLNode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.count = 0;
    }
    return AVLNode;
}());
exports.default = AVLNode;
