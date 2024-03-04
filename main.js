"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLtrees_1 = require("./AVLtrees");
var avl = new AVLtrees_1.default();
avl.insert(1);
avl.insert(5);
avl.insert(9);
console.log(avl);
console.log(avl.find(9));
