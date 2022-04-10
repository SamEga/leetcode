export class QuickFind {
  private root: number[] = [];

  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
    }
  }

  find(x: number): number {
    return this.root[x];
  }

  unionSet(x: number, y: number): void {
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

  connected(x: number, y: number) {
    return this.find(x) === this.find(y);
  }
}
