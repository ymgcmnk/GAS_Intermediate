'use strict';
//演習4-08
//「肉の日です！」とスプレッドシートの任意のセルに入力する関数を作ります。
//そして、その関数が日付に「2」と「9」の数字が含まれる日にのみ、午前10時かっきりに実行されるように、トリガーの設置をするスクリプトも作成してください。
//またスプレッドシートへの入力完了後に、トリガーの削除も忘れずにしましょう。

//考え方としては、それぞれの部品、実行すべきことを考えて、ミニマムで作成しつつ、組み上げるって感じです。
//今回は、次の関数としました。
//1.スプレッドシートの任意のセルに「肉の日です！」と入力する関数
//2.日付に「2」と「9」の数字が含まれるかどうかを判定する関数
//3.午前10時かっきりに実行されるように、トリガーの設置をする関数
//4.スプレッドシートへの入力完了後に、トリガーの削除を行う関数
//5. 1〜４を統合し、メインで実行する関数（この関数は、インストーラブルトリガとして、毎日、指定の時刻に実施されるようにする）


/**
 * 日付に「2」と「9」の数字が含まれる日にのみ、
 * スプレッドシートの任意のセルに「肉の日です！」と入力する関数が、
 * 午前10時かっきりに実行されるように、トリガーの設置をする関数。
 * また、スプレッドシートへの入力完了後に、トリガーの削除も行う。
 * 
 * この関数を実行したタイミングの日付を元に
 * isMeatDateの結果を受けて、処理を行う。
 * 
 * trigger{
 * 実行日時：毎日0~1時　※任意の時間でセットする
 * 設置者：XXX
 * }
 */

function main() {

  //判定基準となる日付を取得（基本的には、このコードが実行される日を想定）
  const targetDate = new Date();
  // const targetDate = new Date(2023/05/29); とすることで、5/29に実行した場合のテストを行える
  // console.log(targetDate)

  //ガード節
  //isMeatDateの結果がfalseの場合はここで処理終了。
  //日付に「2」と「9」の数字が含まれない場合はここで処理終了。条件に合致する場合、以降の処理に進む。
  if (!isMeatDate(targetDate)) return;

  //isMeatDateの結果がtrueの場合は以下の処理を行う。　
  //「肉の日です！」とスプレッドシートの任意のセルに入力する関数が、日付に「2」と「9」の数字が含まれる日にのみ、午前10時かっきりに実行されるトリガーを設置する
  setTriggerAt10AM(targetDate)

}


/**
 * スプレッドシートの任意のセルに「肉の日です！」と入力する関数
 */
function writeMeatDay() {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange('A1').setValue('肉の日です！');

  //スプレッドシートへの入力完了後に、トリガーの削除を行う関数
  deleteTrigger('writeMeatDay')

}

/**
 * 日付に「2」と「9」の数字が含まれるかどうかを判定する関数
 * ※ここでは、2と9が含まれる、と解釈しています。2または9が含まれると解釈する場合は、&&でなく||を用いてください。
 * @param {object} targetDate - 日付 ex 2023/05/29
 * @return {boolean} - 日付に「2」と「9」の数字が含まれる場合はtrue、そうでない場合はfalse
 */
function isMeatDate(targetDate) {
  const date = targetDate.getDate();
  const stringDate = String(date);
  return stringDate.includes('2') && stringDate.includes('9');
}


function test_isMeatDate() {
  const day29 = new Date("２０２３/05/29")
  const day2 = new Date("２０２３/05/02")

  console.log(typeof (day29))// object
  console.log(isMeatDate(day29)); // true

  // 例: 2日の場合
  console.log(isMeatDate(day2)); // false

}


/**
 * 指定した関数を午前10時に実行するトリガーを設定する
 * @param {string} targetDate - 実行する関数名
 */
function setTriggerAt10AM(targetDate) {
  const targetTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), 10, 0, 0);

  ScriptApp.newTrigger('writeMeatDay')
    .timeBased()
    .at(targetTime)
    .create();
}

/**
 * 指定した関数名のトリガーを削除する
 * @param {string} functionName - 削除するトリガーの関数名
 */
function deleteTrigger(functionName) {
  const triggers = ScriptApp.getProjectTriggers();

  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(trigger);
    }
  }
}