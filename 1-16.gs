'use strict';

/*

演習１－16
アクティブなスプレッドシートについて、以下のプロパティまたはメソッドを持つオブジェクトを生成して返す関数を作成してください。なお、シートは１枚のみ存在するものとします。
- Sheetオブジェクトを表すプロパティ
- シートの使用範囲の値の二次元配列を表すプロパティ
- 残り使用可能なセル数を整数で返すメソッド

考え方
「ぷろぱてぃ　めそっど　おぶじぇくと　？？？」と、言葉とその意味がわからなくなりまずが、一個ずつ、確かめていきましょう！
わからなくなったら、初級のスライドを見返すのも良い復讐になりますよ
パッと問題文を見てよくわからんくなった時は、分解しつつ、それを実現するコードを考えると良きです。

*/

/**
 * アクティブなスプレッドシートについて、以下のプロパティまたはメソッドを持つオブジェクトを生成して返す関数。
 * ・Sheetオブジェクトを表すプロパティ
 * ・シートの使用範囲の値の二次元配列を表すプロパティ
 * ・残り使用可能なセル数を整数で返すメソッド
 * なお、シートは１枚のみ存在するものとします。
 *
 * @returns {Object} - 生成されたオブジェクト
 */
function createSheetObject() {
  // アクティブなスプレッドシートとシートを取得
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  // 使用範囲の値の二次元配列を取得
  const values = sheet.getDataRange().getValues();

  // 残り使用可能なセル数を計算するメソッド ※空白の有無を勘案した計算パターンは1-08TA回答を参照
  function getRemainingCellCount() {
    const cellMax = 10000000;
    const usedCells = sheet.getMaxRows() * sheet.getMaxColumns();
    return cellMax - usedCells;
  }

  // オブジェクトを生成
  const object = {
    sheet: sheet,
    values: values,
    getRemainingCellCount: getRemainingCellCount
  };

  // オブジェクトを返す
  return object;
}

// 使用例
function test16() {
  const sheetObj = createSheetObject();
  console.log(sheetObj.sheet.getName()); // シート名を表示
  console.log(sheetObj.values); // シートの使用範囲の値の二次元配列を表示
  console.log(sheetObj.getRemainingCellCount()); // 残り使用可能なセル数を表示
}



// // //しばちゃんの回答
// // /* 
// // 宿題 演習1-16
// // アクティブなスプレッドシートについて、
// // 以下のプロパティまたはメソッドを持つオブジェクトを生成して返す関数を作成してください。
// // なお、シートは１枚のみ存在するものとします。
// // ​
// // Sheetオブジェクトを表すプロパティ
// // シートの使用範囲の値の二次元配列を表すプロパティ
// // 残り使用可能なセル数を整数で返すメソッド
// //  */

// // function myFunction1_16TA_shiba() {

// //   const sheet = SpreadsheetApp.getActiveSheet();
// //   const sheetObject = generateSheetObject_(sheet);  // 生成されたシートのオブジェクトを代入
// //   console.log(sheetObject);
// //   console.log(sheetObject.availableCellCount());
// // }

// // /**
// //  * シートに関するオブジェクトを生成して返す関数
// //  * @param {SpreadsheetApp.Sheet} sheet - シートオブジェクト
// //  * @return {Object} シートに関するオブジェクト
// //  */
// // function generateSheetObject_(sheet) {
// //   const object = {
// //     sheet: sheet,  // Sheetオブジェクトを表すプロパティ
// //     usingRangeValues: sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).getValues(),  // シートの使用範囲の値の二次元配列を表すプロパティ
// //     availableCellCount() {  // 残り使用可能なセル数を整数で返すメソッド
// //       const cellCount = 10000000;
// //       const maxRow = sheet.getMaxRows();
// //       const maxColum = sheet.getMaxColumns();
// //       return cellCount - maxRow * maxColum;
// //     }
// //   };
// //   return object;
// // }
// // //Minakoの回答
