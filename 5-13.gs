'use strict';
/*
演習５－13
複数のCSVファイルが圧縮されたZIPファイルのファイルIDを渡して実行すると、各CSVファイルをスプレッドシートの別々のシートに展開する関数を作成しましょう。
*/

function spreadZipDate_TEST() {

  const fileId = '****** Zip ファイルのファイル ID ******';
  spreadZipDate_(fileId);

}

/**
 * ZIP ファイルのファイル ID からスプレッドシートに展開する関数
 * @param {string} fileId - ファイル ID
 */
function spreadZipDate_(fileId) {

  const zip = DriveApp.getFileById(fileId).getBlob();
  const blobs = Utilities.unzip(zip);

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  while (blobs.length) {

    const blob = blobs.shift();
    const csv = blob.getDataAsString();

    const values = Utilities.parseCsv(csv);
    const newSheet = ss.insertSheet();
    newSheet.setName(blob.getName());

    newSheet.getRange(1, 1, values.length, values[0].length).setValues(values);

  }

}

