'use strict';
/*
演習５－12
Spreadsheetオブジェクトを渡して実行すると、その各シートをCSVファイルに変換し、さらにそれらをZIPファイルに圧縮したものをドライブに保存する関数を作成しましょう。
*/

/**
 * Spreadsheetオブジェクトを渡して実行すると、その各シートをCSVファイルに変換し、
 * さらにそれらをZIPファイルに圧縮したものをドライブに保存する
 * @param {Object} spreadsheet - Spreadsheetオブジェクト
 */
function saveSheetsAsCsvAndZip(spreadsheet) {
  const zipName = `${spreadsheet.getName()}.zip`;
  const files = [];

  const sheets = spreadsheet.getSheets();
  for (const sheet of sheets) {
    const fileName = `${sheet.getName()}.csv`;
    const csvContent = convertSheetToCsv_(sheet);
    const csvBlob = Utilities.newBlob(csvContent, 'text/csv', fileName);
    files.push(csvBlob);
  }

  const zipBlob = Utilities.zip(files, zipName);
  DriveApp.createFile(zipBlob);
}

/**
 * シートをCSV形式の文字列に変換する
 * @param {Object} sheet - Sheetオブジェクト
 * @return {string} - CSV形式の文字列
 * @private
 */
function convertSheetToCsv_(sheet) {
  const numRows = sheet.getLastRow();
  const numCols = sheet.getLastColumn();
  const range = sheet.getRange(1, 1, numRows, numCols);
  const values = range.getValues();

  return values.map(row => row.join(',')).join('\n');
}

// 使用例
function saveSheetsAsCsvAndZipExample() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  saveSheetsAsCsvAndZip(spreadsheet);
}
