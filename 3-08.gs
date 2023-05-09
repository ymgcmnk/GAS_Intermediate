'use strict';

/*
演習3-08
スプレッドシートの単一列を表す二次元配列と、文字列を引数として渡したとき、
二次元配列に文字列が存在すればそのインデックスを、そうでなければ-1を返す関数を作成しましょう。
*/

/**
 * スプレッドシートの単一列から特定の値を検索し、その結果をログに出力する関数
 */
function logIndexOfValueInSpreadsheetColumn() {
  //スプレッドシートの単一列を表す二次元配列 
  //スプレッドシートのアクティブシートを取得し、A列の全ての値を二次元配列として取得する=
  const values = SpreadsheetApp.getActiveSheet().getRange('A:A').getValues();

  //文字列 
  //検索対象の文字列を定義する
  const targetValue = 'Bob';

  //スプレッドシートの単一列を表す二次元配列と、文字列を引数として渡す
  // 二次元配列において検索対象の文字列のインデックスをログに出力する
  console.log(indexOfFunction_(values, targetValue));
}

/**
 * 二次元配列に文字列が存在すればそのインデックスを、そうでなければ-1を返す関数
 * @param {Array.<Array.<string>>} values - スプレッドシートの単一列を表す二次元配列
 * @param {string} targetValue - 検索対象の文字列
 * @return {number} 検索対象の文字列のインデックスまたは -1
 */
function indexOfFunction_(values, targetValue) {
  // 複数列指定されていたらエラーを返す
  if (values[0].length >= 2) throw '1 列分のみ指定してデータを渡してください';

  // 二次元配列を一次元配列に変換する
  const flattenedValues = values.flat();
  // 一次元配列において検索対象の文字列のインデックスを取得する
  const index = flattenedValues.indexOf(targetValue);

  // インデックスを返す（見つからない場合は -1 を返す）
  return index;
}