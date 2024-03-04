"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLNode_1 = require("./AVLNode");
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
    }
    AVLTree.prototype.getHeight = function (node) {
        return node ? node.height : 0;
    };
    AVLTree.prototype.updateHeight = function (node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.left));
    };
    AVLTree.prototype.getBalanceFactor = function (node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    AVLTree.prototype.insert = function (key) {
        this.root = this.insertData(this.root, key);
    };
    AVLTree.prototype.insertData = function (node, key) {
        if (!node) {
            return new AVLNode_1.default(key);
        }
        else if (key < node.key) {
            node.left = this.insertData(node.left, key);
            node;
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
            node;
        }
        else {
            return node;
        }
        this.updateHeight(node);
        var balance = this.getBalanceFactor(node);
        if (balance > 1) {
            var select = node.left;
            if (key < select.key) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            var select = node.left;
            if (key > select.key) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    };
    //search data
    AVLTree.prototype.find = function (key) {
        return this.findData(this.root, key);
    };
    AVLTree.prototype.findData = function (node, key) {
        if (node == null) {
            return null;
        }
        if (key > node.key) {
            return this.findData(node.right, key);
        }
        else if (key < node.key) {
            return this.findData(node.left, key);
        }
        return node;
    };
    // //delete data
    // public delete(key:number):AVLNode|null
    // {
    //     return this.deleteData(this.root, key);
    // }
    // private deleteData(node:AVLNode|null, key:number):AVLNode|null
    // {
    //    var target:AVLNode|null = this.find(key);
    //    if(target == null)
    //    {
    //     return null
    //    }
    //    else
    //    {
    //         //delete
    //         target.delete();
    //    }
    //    return node;
    // }
    // node count
    // public nodeCount(node: AVLNode | null): number
    // {
    //     if(node)
    //     {
    //         node.count++;
    //         this.nodeCount(node.left);//left child
    //         this.nodeCount(node);//root node
    //         this.nodeCount(node.right);//right node
    //     }
    //     return node.count;
    // }
    AVLTree.prototype.rightRotate = function (node) {
        var x = node.left;
        var T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    AVLTree.prototype.leftRotate = function (node) {
        var x = node.right;
        var T2 = x.left;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    return AVLTree;
}());
exports.default = AVLTree;
