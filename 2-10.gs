'use strict';
/*
演習２－10
演習２-05のクラスOnigiriに税込価格を返すgetTaxIncludedメソッドと、売り切れかどうかをブール値で返すisSoldOutメソッドを追加してください。
なお、getTaxIncludedメソッドの引数として税率を表す数値を渡すことができるものとし、その省略時は0.1を採用するものとします。
 */

/**
 * Onigiriクラスは、おにぎりの情報を保持します。
 */
class Onigiri {
  /**
   * Onigiriクラスのコンストラクタ。
   * @param {string} name - 商品名（おにぎりの具）
   * @param {number} price - 販売金額
   * @param {number} stock - 在庫数
   */
  constructor(name, price, stock) {
    this.name = name; // 商品名（おにぎりの具）をプロパティに設定
    this.price = price; // 販売金額をプロパティに設定
    this.stock = stock; // 在庫数をプロパティに設定
  }

  /**
   * 税込価格を返すメソッド
   * @param {number} [taxRate=0.1] - 税率（省略時は0.1）
   * @returns {number} 税込価格
   */
  getTaxIncluded(taxRate = 0.1) {
    // this.priceに税率を加算して税込価格を計算し、Math.roundで四捨五入する
    return Math.round(this.price * (1 + taxRate));
  }

  /**
   * 売り切れかどうかをブール値で返すメソッド
   * @returns {boolean} 売り切れの場合(this.stockが0の場合（在庫がない場合）)trueを返す。それ以外の場合はfalseを返す。
   */
  isSoldOut() {
    return this.stock === 0;
  }
}

/**
 * makeOnigiri関数は、Onigiriクラスのインスタンスを作成し、その情報を出力します。
 */
function makeOnigiri() {
  // Onigiriクラスのインスタンスを作成
  const onigiri1 = new Onigiri("サケ", 120, 0);
  const onigiri2 = new Onigiri("たらこ", 130, 20);
  const onigiri3 = new Onigiri("梅", 100, 15);

  // 作成したインスタンスの情報を出力
  console.log(onigiri1);
  console.log(onigiri2);
  console.log(onigiri3);

  // 税込価格と売り切れかどうかを出力
  console.log(onigiri1.getTaxIncluded()); // 税込価格　※引数が省略された場合（つまり、メソッド呼び出し時に何も渡さなかった場合）、デフォルト値として0.1（10%）が採用
  console.log(onigiri1.getTaxIncluded(0.15)); // 税込価格　※引数を省略しない場合（つまり、メソッド呼び出し時に引数を渡した場合）、デフォルト値として0.15（15%）が採用
  console.log(onigiri1.isSoldOut()); // 売り切れかどうか(trueなら売り切れ)
}
