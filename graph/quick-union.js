"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickUnion = void 0;
class QuickUnion {
    constructor(sz) {
        this.root = [];
        for (let i = 0; i < sz; i++) {
            this.root[i] = i;
        }
    }
    find(x) {
        while (x != this.root[x]) {
            x = this.root[x];
        }
        return x;
    }
    unionSet(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX != rootY) {
            this.root[rootY] = rootX;
        }
    }
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}
exports.QuickUnion = QuickUnion;
