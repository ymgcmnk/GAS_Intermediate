'use strict';

/*
演習3-14
バインドしているスプレッドシートの唯一のシートのA2セルに日付、B2セルに時刻が入力されています。
年・月・日をA2セルの日付、時・分・秒をB2セルの時刻とするDateオブジェクトを生成するスクリプトを作成してください。
*/

/**
 * バインドされたスプレッドシートのA2セルの日付とB2セルの時刻を組み合わせたDateオブジェクトを生成します。
 */
function createDateFromSheet() {
  // スプレッドシートへの参照を取得
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // A2セルの日付データとB2セルの時刻データを取得
  const dateValue = sheet.getRange('A2').getValue();
  console.log(typeof dateValue);

  const timeValue = sheet.getRange('B2').getValue();
  console.log(typeof timeValue);

  // 日付データの年、月、日を取得
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth();
  const day = dateValue.getDate();

  // 時刻データの時、分、秒を取得
  const hours = timeValue.getHours();
  const minutes = timeValue.getMinutes();
  const seconds = timeValue.getSeconds();

  // 年・月・日と時・分・秒を組み合わせたDateオブジェクトを生成
  const combinedDate = new Date(year, month, day, hours, minutes, seconds);

  // 結果をコンソールに出力
  console.log(combinedDate);
  console.log(typeof combinedDate);
}
