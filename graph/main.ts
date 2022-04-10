import { QuickUnion } from "./quick-union";

const main = () => {
  const uf = new QuickUnion(10);
  // 1-2-5-6-7 3-8-9 4
  uf.unionSet(1, 2);
  uf.unionSet(2, 5);
  uf.unionSet(5, 6);
  uf.unionSet(6, 7);
  uf.unionSet(3, 8);
  uf.unionSet(8, 9);
  console.log(uf.connected(1, 5));
  console.log(uf.connected(5, 7));
  console.log(uf.connected(4, 9));
  uf.unionSet(9, 4);
  console.log(uf.connected(4, 9));
  return 0;
};
main();
