'use strict';
/*
演習５－08
Sheetオブジェクトを渡して実行すると、それをCSVファイルに変換してドライブに保存する関数を作成しましょう。
*/

/**
 * SheetオブジェクトをCSVファイルに変換し、ドライブに保存する
 * @param {Object} sheet - GoogleスプレッドシートのSheetオブジェクト
 */
function saveSheetAsCsv(sheet) {
  // Sheetオブジェクトからデータを取得する
  const data = sheet.getDataRange().getValues();
  
  // CSV形式の文字列に変換する
  const csvData = convertDataToCsv_(data);
  
  // ドライブにCSVファイルを保存する
  saveCsvToDrive_(sheet.getName(), csvData);
}

/**
 * 二次元配列のデータをCSV形式の文字列に変換する
 * @param {Array} data - 二次元配列のデータ
 * @return {string} - CSV形式の文字列
 * @private
 */
function convertDataToCsv_(data) {
  return data.map(row => row.join(',')).join('\n');
}

/**
 * CSV形式の文字列をGoogleドライブに保存する
 * @param {string} fileName - 保存するファイル名
 * @param {string} csvData - CSV形式の文字列
 * @private
 */
function saveCsvToDrive_(fileName, csvData) {
  const folder = DriveApp.createFolder(fileName);
  folder.createFile(`${fileName}.csv`, csvData, MimeType.CSV);
}

// 使用例
function exportSheetToCsvExample() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  saveSheetAsCsv(sheet);
}
