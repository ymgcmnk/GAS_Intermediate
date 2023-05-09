'use strict';

// 演習4-05
// スプレッドシートの編集時をトリガーとして動作する、編集したセルに最終更新日時と前回の値をメモとして残すスクリプトを作成しましょう。


// 回答パターン　1
// シンプルに一つの関数、少ない記述。※記述が少ない＝優れているわけではないことに注意。
/**
 * スプレッドシートの編集時にトリガーされる関数
 * @param {Object} e - 編集イベントオブジェクト
 */
function onEdit(e) {

  const date = Utilities.formatDate(new Date(), 'JST', 'yyyy年MM月dd日');
  e.range.setNote(`最終更新日時: ${date}\n前回の値: ${e.oldValue}`);

}


// 回答パターン　2
// シンプルに二つの関数に分けた形。
/**
 * スプレッドシートの編集時にトリガーされる関数
 * @param {Object} e - 編集イベントオブジェクト
 */
function onEdit(e) {
  saveMemo(e);
}

function saveMemo(e) {
  const date = Utilities.formatDate(new Date(), 'JST', 'yyyy年MM月dd日');
  e.range.setNote(`最終更新日時: ${date}\n前回の値: ${e.oldValue}`);

}


// 回答パターン3
// 関数を分けた形。また、各動作を説明。
/**
 * スプレッドシートの編集時にトリガーされる関数
 * @param {Object} e - 編集イベントオブジェクト
 */
function onEdit(e) {
  saveMemo(e);
}

/**
 * 編集されたセルにメモを保存する関数
 * @param {Object} e - 編集イベントオブジェクト
 */
function saveMemo(e) {

  // 編集前のセルの値
  const oldValue = e.oldValue;

  // 最終更新日時
  const timestamp = new Date();

  //日時表示をフォーマットする
  const formatedTimestamp = Utilities.formatDate(timestamp, 'JST', 'yyyy年MM月dd日');

  // メモを作成 （改行エスケープシークエンスを使用）
  const memo = `最終更新日時: ${formatedTimestamp}\n前回の値: ${oldValue}`;

  // 編集されたセルにメモを保存
  e.range.setNote(memo);

}

//tips
// 編集したセルの値
// const newValue = e.value;
// 編集したユーザーのメールアドレス
// const userEmail = Session.getActiveUser().getEmail();
