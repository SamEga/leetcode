export class QuickUnion {
  private root: number[] = [];

  constructor(sz: number) {
    for (let i = 0; i < sz; i++) {
      this.root[i] = i;
    }
  }

  find(x: number): number {
    while (x != this.root[x]) {
      x = this.root[x];
    }
    return x;
  }

  unionSet(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX != rootY) {
      this.root[rootY] = rootX;
    }
  }

  connected(x: number, y: number) {
    return this.find(x) === this.find(y);
  }
}
