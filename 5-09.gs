'use strict';
/*
演習５－09
CSVファイルのファイルIDを渡して実行すると、それをスプレッドシートに展開する関数を作成しましょう。
*/

/**
 * CSVファイルIDを渡して実行すると、それをスプレッドシートに展開する
 * @param {string} fileId - CSVファイルのファイルID
 */
function importCsvToSpreadsheet(fileId) {
  const file = DriveApp.getFileById(fileId);
  const csvData = file.getBlob().getDataAsString();
  const sheet = createSheetFromCsvData_(csvData);
}

/**
 * CSV形式の文字列からシートを作成する
 * @param {string} csvData - CSV形式の文字列
 * @return {Object} - 作成されたSheetオブジェクト
 * @private
 */
function createSheetFromCsvData_(csvData) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'Imported CSV';
  spreadsheet.insertSheet(sheetName);
  const sheet = spreadsheet.getSheetByName(sheetName);
  const values = Utilities.parseCsv(csvData);
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
  
  return sheet;
}

// 使用例
function importCsvToSpreadsheetExample() {
  const fileId = '1hcQUcp-VPJBBepl3IhJM_WGMcTvPXR6I';
  importCsvToSpreadsheet(fileId);
}
