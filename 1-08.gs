'use strict';
/*
演習１－08
Spreadsheetオブジェクトを渡すと、残り使用可能なセル数を返す関数を作成しましょう。
（スプレッドシートの使用可能なセル数は1000万セル）

考え方のポイント
1.「Spreadsheetオブジェクトを渡す」このように書かれると、なんだそれはと思いがちですが、要するに SpreadsheetApp.getActiveSpreadsheet();　のことです。これを　 const ss = SpreadsheetApp.getActiveSpreadsheet();とし、  getRemainingCellCount(ss)のように渡すこと、これをイメージできると良いでしょう。初級で学んだ「引数、仮引数、関数」を要チェックやで！
2.残り使用可能なセル数について、問題文からは空白か否かは明示されていないので、そこは解釈の余地があるかな〜と思っておりまする。
3.GAS中級講座ということで、保守やメンテナンスのことも考えて、変数名、定数名、関数名にも気を配りましょう！

TA回答として、4パターン出します。
ver1  空白セルもカウントするパターン(getMaxRowsとgetMaxColumnsを使ったパターン)
ver2  空白セルを除いてカウントするパターン(getMaxRowsとgetMaxColumnsを使ったパターン)
ver3  空白セルもカウントするパターン(sheet.getDataRange().getValues()を使ったパターン)
ver4  空白セルを除いてカウントするパターン(sheet.getDataRange().getValues()を使ったパターン)
 */

//ver1  空白セルもカウントするパターン(getMaxRowsとgetMaxColumnsを使ったパターン)
/**
 * スプレッドシートオブジェクトを引数にとり、残り使用可能なセル数を返す関数。
 * スプレッドシートの使用可能なセル数は1000万セル。
 *
 * @param {Object} ss - 対象のSpreadsheetオブジェクト
 * @returns {number} - 残り使用可能なセル数
 */
function getRemainingCellCountWithEmptyCells(ss) {
  // 最大使用可能セル数を定義
  const cell_max = 10000000;

  // 対象スプレッドシート内の全てのシートを取得
  const sheets = ss.getSheets();

  // 使用済みセルの数を一旦0とする
  let cellSum = 0;

  // 各シートの使用セル数を合計する
  for (let i = 0; i < sheets.length; i++) {
    // シートの行数を取得
    let rows = sheets[i].getMaxRows();
    // シートの列数を取得
    let cols = sheets[i].getMaxColumns();
    // セル数を計算
    let cells = rows * cols;

    // 合計セル数に加算
    cellSum += cells;
  }
  // 最大使用可能セル数から合計セル数を引いて残りセル数を返す
  return cell_max - cellSum;
}

// ver2  空白セルを除いてカウントするパターン(getMaxRowsとgetMaxColumnsを使ったパターン)
/**
 * スプレッドシートオブジェクトを引数にとり、残り使用可能なセル数を返す関数。
 * スプレッドシートの使用可能なセル数は1000万セル。
 * 空白のセルはカウントされない。
 *
 * @param {Object} ss - 対象のSpreadsheetオブジェクト
 * @returns {number} - 残り使用可能なセル数
 */
function getRemainingCellCountWithoutEmptyCells(ss) {
  // 最大使用可能セル数を定義
  const cell_max = 10000000;

  // 対象スプレッドシート内の全てシートを取得
  const sheets = ss.getSheets();

  // 使用済みセルの数を一旦0とする
  let cellSum = 0;

  // 各シートの使用セル数を合計する
  for (let i = 0; i < sheets.length; i++) {
    // シートの行数を取得
    let rows = sheets[i].getMaxRows();
    // シートの列数を取得
    let cols = sheets[i].getMaxColumns();
    // シートの範囲を取得
    let range = sheets[i].getRange(1, 1, rows, cols);
    // シートのセルデータを取得
    let values = range.getValues();

    // 空白でないセルの数をカウントする
    let nonEmptyCellCount = 0;
    for (let row = 0; row < values.length; row++) {
      for (let col = 0; col < values[row].length; col++) {
        if (values[row][col] !== '') {
          nonEmptyCellCount++;
        }
      }
    }

    // 合計セル数に加算
    cellSum += nonEmptyCellCount;
  }
  // 最大使用可能セル数から合計セル数を引いて残りセル数を返す
  return cell_max - cellSum;
}

//ver3  空白セルもカウントするパターン(sheet.getDataRange().getValues()を使ったパターン)
/**
 * スプレッドシートオブジェクトを引数にとり、残り使用可能なセル数を返す関数。
 * スプレッドシートの使用可能なセル数は1000万セル。
 * 空白のセルもカウントされる。
 *
 * @param {Object} ss - 対象のSpreadsheetオブジェクト
 * @returns {number} - 残り使用可能なセル数
 */
function getRemainingCellCountWithEmptyCells02(ss) {
  // 最大使用可能セル数を定義
  const cell_max = 10000000;

  // 対象スプレッドシート内の全てのシートを取得
  const sheets = ss.getSheets();

  // 使用済みセルの数を一旦0とする
  let cellSum = 0;

  // 各シートの使用セル数を合計する
  for (let i = 0; i < sheets.length; i++) {
    // シートのデータ範囲を取得
    let dataRange = sheets[i].getDataRange();
    // シートのセルデータを取得
    let values = dataRange.getValues();

    // セル数をカウントする
    let cellCount = values.length * values[0].length;

    // 合計セル数に加算
    cellSum += cellCount;
  }
  // 最大使用可能セル数から合計セル数を引いて残りセル数を返す
  return cell_max - cellSum;
}



//ver4  空白セルを除いてカウントするパターン(sheet.getDataRange().getValues()を使ったパターン)
/**
 * スプレッドシートオブジェクトを引数にとり、残り使用可能なセル数を返す関数。
 * スプレッドシートの使用可能なセル数は1000万セル。
 * 空白のセルはカウントされない。
 *
 * @param {Object} ss - 対象のSpreadsheetオブジェクト
 * @returns {number} - 残り使用可能なセル数
 */
function getRemainingCellCountWithoutEmptyCells02(ss) {
  // 最大使用可能セル数を定義
  const cell_max = 10000000;

  // 対象スプレッドシート内の全てシートを取得
  const sheets = ss.getSheets();

  // 使用済みセルの数を一旦0とする
  let cellSum = 0;

  // 各シートの使用セル数を合計する
  for (let i = 0; i < sheets.length; i++) {
    // シートのデータ範囲を取得
    let dataRange = sheets[i].getDataRange();
    // シートのセルデータを取得
    let values = dataRange.getValues();

    // 空白でないセルの数をカウントする
    let nonEmptyCellCount = 0;
    for (let row = 0; row < values.length; row++) {
      for (let col = 0; col < values[row].length; col++) {
        if (values[row][col] !== '') {
          nonEmptyCellCount++;
        }
      }
    }

    // 合計セル数に加算
    cellSum += nonEmptyCellCount;
  }
  // 最大使用可能セル数から合計セル数を引いて残りセル数を返す
  return cell_max - cellSum;
}

// 使用例
function main() {
  // 現在アクティブなスプレッドシートを取得
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // 残り使用可能なセル数をコンソールに出力
  console.log(getRemainingCellCountWithEmptyCells(ss));
  console.log(getRemainingCellCountWithEmptyCells02(ss));
  console.log(getRemainingCellCountWithoutEmptyCells(ss));
  console.log(getRemainingCellCountWithoutEmptyCells02(ss));
}