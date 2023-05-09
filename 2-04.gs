'use strict';

/*

演習２－04
クラスPersonに以下のメンバーを追加で定義してください。
身長を表すプロパティ: height
体重を表すプロパティ: weight

*/


/**
 * myFunction2_03 - この関数は、Personクラスを定義し、そのインスタンスを作成し、
 * コンソールに出力することを目的としています。
 */
function myFunction2_03_ta() {
  /**
   * Personクラス - このクラスは、人物を表現するオブジェクトを生成するためのものです。
   * それぞれのインスタンスには、名前、年齢、身長、体重といったプロパティが含まれます。
   */
  class Person {
    /**
     * コンストラクタ - Personクラスのインスタンスを生成するためのコンストラクタです。
     * @param {string} name - 人物の名前
     * @param {number} age - 人物の年齢
     * @param {number} height - 人物の身長（単位: cm）
     * @param {number} weight - 人物の体重（単位: kg）
     */
    constructor(name, age, height, weight) {
      this.name = name; // 名前を表すプロパティを初期化
      this.age = age; // 年齢を表すプロパティを初期化
      this.height = height; // 身長を表すプロパティを初期化
      this.weight = weight; // 体重を表すプロパティを初期化
    }

    /**
     * getBmiメソッド - このメソッドは、人物のBMI（体重（kg）/ 身長（m）の2乗）を計算し、
     * 小数点第1位までの値を返します。
     * 
     * 1.heightInMeters * heightInMeters: 身長を2乗しています（身長（m）^2）。
     * 2.this.weight / (heightInMeters * heightInMeters): 体重（kg）を、身長の2乗で割っています。これで、BMIの値が算出されます。
     * 3.Math.round( ... * 10): BMIの値を10倍して、四捨五入を行います。これにより、小数点以下1桁までの精度で四捨五入された値が得られます。
     * 4. 3で得られた値を10で割ります。これにより、小数点第1位までの精度で四捨五入されたBMIの値が返されます。
     * 
     * @return {number} 人物のBMI
     */
    getBmi() {
      const heightInMeters = this.height / 100; // 身長をメートルに変換
      return Math.round(this.weight / (heightInMeters * heightInMeters) * 10) / 10;
    }
  }

  // p1は、名前が"Bob"、年齢が25歳、身長が180cm、体重が80kgのPersonオブジェクト
  const p1 = new Person('Bob', 25, 180, 88);
  console.log(p1); // p1オブジェクトをコンソールに出力
  console.log(p1.getBmi()); // p1オブジェクトのBMIをコンソールに出力

  // p2は、名前が"Tom"、年齢が32歳、身長が175cm、体重が85kgのPersonオブジェクト
  const p2 = new Person('Tom', 32, 175, 85);
  console.log(p2); // p2オブジェクトをコンソールに出力
  console.log(p2.getBmi()); // p2オブジェクトのBMIをコンソールに出力
}
