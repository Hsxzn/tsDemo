// ------------- 接口 interface
(function () {
  interface ObjConfig {
    size?: number;
    label: string;
  }
  function createObj(config: ObjConfig) {
    console.log(config.label);
  }

  function printLabel(labelledObj: { size: number; label: string }) {
    console.log(labelledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
  createObj(myObj);

  /**
   * createObj 和 printLabel 写法一样
   */
})();

// ------------- 接口 interface  =>  可选属性
(() => {
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): SquareConfig {
    /**
     * 等同于
     * function createSquare(config: SquareConfig): {color: string; area: number}
     */
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({ color: "black", width: 100 });
  console.log("mySquare", mySquare);
})();

// ----------------接口 interface  =>  只读属性
(() => {
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  let p1: Point = { x: 10, y: 20 };
  // p1.x = 5;
  //  error!
  console.log("p1", p1);

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  // ro[0] = 12;          // error!
  // ro.push(5);          // error!
  // ro.length = 100;     // error!
  // a = ro;              // error!
  console.log("a", a);

  a = ro as number[];
  console.log("a", a);
})();
