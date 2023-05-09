'use strict';
/*
演習1-13
任意の数の整数を引数として渡して、その総和を求める関数を作成しましょう。
ちなみに、任意の数で渡せる引数を「可変長引数」といいます。

考え方
1.任意の数で渡せる引数=「可変長引数」 この表記は(...integers) （例）
2.引数にいくつあるかわかんないけど、与えられた引数全部を足し算したい→for文で引数を一つずつ取り出して、for文をぶんぶん回すぜ！
 */ 

/**
 * 任意の数の整数を引数として渡し、その総和を求める関数。
 *
 * @param {...number} integers - 任意の数の整数
 * @returns {number} - 引数として渡された整数の総和
 */
function sumOfIntegers(...integers) {
  // 総和の初期値　※定数constではなく変数letで宣言
  let sum = 0;

  // 引数として渡された整数を一つずつ取り出す
  for (let i = 0; i < integers.length; i++) {
    // 取り出した整数を総和に加算
    sum += integers[i];
  }

  // 総和を返す
  return sum;
}

// 使用例
function test13() {
  console.log(sumOfIntegers(1, 2, 3, 4, 5)); // 15
  console.log(sumOfIntegers(10, 20, 30)); // 60
}
