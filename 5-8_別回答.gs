'use strict';

/**
 * https://moripro.net/gas-sheet-to-csv/
 */
function createCSV() {
  
  const sheetName = 'シート1'; //CSVファイルにするシート名を指定
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  
  //データ範囲を二次元配列で取得
  const values = sheet.getDataRange().getValues();
  
  //二次元配列をカンマ区切りの文字列に変換
  const csv = values.join('\n');
  
  //Blobオブジェクトの作成
  const blob = Utilities.newBlob(csv, MimeType.CSV, sheetName + '.csv');
  
  //CSVファイルの保存先フォルダを指定
  const id = '********************'; //フォルダID
  const folder = DriveApp.getFolderById(id);
  
  //CSVファイルを作成
  folder.createFile(blob);
  
}