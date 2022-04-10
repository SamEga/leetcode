"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickFind = void 0;
class QuickFind {
    constructor(sz) {
        this.root = [];
        for (let i = 0; i < sz; i++) {
            this.root[i] = i;
        }
    }
    find(x) {
        return this.root[x];
    }
    unionSet(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX != rootY) {
            this.root.forEach((_value, index) => {
                if (this.root[index] == rootY) {
                    this.root[index] = rootX;
                }
            });
        }
    }
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}
exports.QuickFind = QuickFind;
