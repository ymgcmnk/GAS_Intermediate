'use strict';


/*
演習５－02
onOpen関数による独自メニューを作成し、それを実行するとログインしたユーザーのメールアドレスが、特定のメールアドレスかどうかを判定して、その判定結果をダイアログを表示するスクリプトを作成してください。

なお、Slack提出時にメールアドレスをさらさなくて良いようにプロパティストアを使ってくださいね。
 */


/**
 * スプレッドシートが開かれた際に独自メニューを追加する
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('独自メニュー')
    .addItem('メールアドレスチェック', 'checkEmailAddress')
    .addToUi();
}

/**
 * ログインしているユーザーのメールアドレスが特定のメールアドレスと一致するかを判定し、
 * ダイアログで判定結果を表示する
 */
function checkEmailAddress() {
  const userEmail = Session.getActiveUser().getEmail();
  const storedEmail = PropertiesService.getScriptProperties().getProperty('TARGET_EMAIL');
  
  const resultMessage = userEmail === storedEmail
    ? 'メールアドレスが一致しました。'
    : 'メールアドレスが一致しません。';
  
  displayDialog(resultMessage);
}

/**
 * 指定したメッセージを含むダイアログを表示する
 * @param {string} message - ダイアログに表示するメッセージ
 */
function displayDialog(message) {
  const ui = SpreadsheetApp.getUi();
  ui.alert(message);
}

// 初回のみ実行して、プロパティストアにメールアドレスを設定する
function storeEmailAddress() {
  const targetEmail = 'example@example.com';
  PropertiesService.getScriptProperties().setProperty('TARGET_EMAIL', targetEmail);
}
