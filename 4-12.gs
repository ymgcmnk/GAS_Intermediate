'use strict';
//演習4-12
// 独自メニューに以下の機能を追加してみてください。
// 一番左のシートのA1セルにカーソル移動
// 一番左のシートのA列の最終行のセルにカーソル移動 


/**
 * スプレッドシートが開かれたときに実行される関数。
 * 独自メニューを作成し、各機能を追加する。
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('独自メニュー')
    .addItem('タイムスタンプ', 'insertTimestamp')
    .addItem('一番左のシートのA1セルにカーソル移動', 'moveToA1')
    .addItem('一番左のシートのA列の最終行のセルにカーソル移動', 'moveToLastRowInAColumn')
    .addToUi();
}

/**
 * 現在のタイムスタンプをアクティブシートのC3セルに挿入する関数。
 */
function insertTimestamp() {
  // タイムスタンプ処理 演習４－02
  SpreadsheetApp.getActiveSheet().getRange('C3').setValue(new Date());
}

/**
 * 一番左のシートのA1セルにカーソルを移動する関数。
 */
function moveToA1() {

  // アクティブなスプレッドシートのすべてのシートを取得
  const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  // 一番左のシートを取得
  const leftSheet = sheets[0];

  // 一番左のシートをアクティブシートに設定
  SpreadsheetApp.setActiveSheet(leftSheet);

  // A1セルをアクティブにする
  leftSheet.getRange('A1').activate();
}

/**
 * 一番左のシートのA列の最終行のセルにカーソルを移動する関数。
 */
function moveToLastRowInAColumn() {
  // アクティブなスプレッドシートのすべてのシートを取得
  const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  // 一番左のシートを取得
  const leftSheet = sheets[0];

  // 一番左のシートの最終行を取得
  const lastRow = leftSheet.getLastRow();　//セルにデータがあろうがなかろうが最終行としたい場合は、getMaxRows()を使う


  // 一番左のシートをアクティブシートに設定 //なくても動作する
  // SpreadsheetApp.setActiveSheet(leftSheet);

  // A列の最終行のセルをアクティブにする
  leftSheet.getRange(`A${lastRow}`).activate();
}