'use strict';

/*
演習 3-17
以下の機能を持つクラスNumbersObjectを作成してください。
●コンストラクタNumbersObject: 整数で構成される配列を渡してインスタンスを生成する
●valuesプロパティ: Arrayオブジェクト
●maxプロパティ・minプロパティ: valuesプロパティの最大値、最小値を返す
●getTotalメソッド: valuesプロパティのすべての整数を加算した値を返す（totalプロパティでも可）
*/

/**
 * NumbersObjectクラスは、整数で構成される配列を操作するためのクラスです。
 * コンストラクタに整数で構成される配列を渡してインスタンスを生成し、
 * 最大値、最小値、合計値を取得できます。
 */
class NumbersObject {
  /**
   * NumbersObjectクラスのコンストラクタ。整数で構成される配列を渡してインスタンスを生成します。
   * @param {Array<number>} values - 整数で構成される配列
   */

  // コンストラクタで整数の配列を受け取り、それをvaluesプロパティに設定します。
  constructor(values) {
    this.values = values;
    this.max = Math.max(...values);//配列の最大値を求め、maxプロパティに設定
    this.min = Math.min(...values);//配列の最小値を求め、minプロパティに設定
  }

  /**
   * valuesプロパティのすべての整数を加算した値を返す。
   * @return {number} - 合計値
   */

  //getTotalメソッド: valuesプロパティのすべての整数を加算した値を返す
  getTotal() {
    return this.values.reduce((total, currentValue) => total + currentValue, 0);
  }
}

function test_NumbersObject() {
  const numbers = new NumbersObject([1, 5, 10, -3, 4]); // 整数の配列を渡して、NumbersObjectのインスタンスを作成
  console.log(numbers.max); //  10（最大値）
  console.log(numbers.min); // -3（最小値）
  console.log(numbers.getTotal()); //  17（合計値）
}
