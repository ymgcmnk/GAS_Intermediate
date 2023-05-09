'use strict';
// 演習4-10
//演習4-09について、「お元気ですか？」のボタンの結果を受けて
// YESの場合    : 「それはいいですね！」
// NOの場合    : 「それは残念ですね」
// とアラートダイアログを表示するようにスクリプトを追加してください。
// ※HTMLServiceは使用禁止でお願いします。


//回答パターン1 switch
/**
 * シート内で名前を入力し、YES/NOボタンを用いた質問に応答するダイアログを表示する関数
 */
function askHowAreYou_switch() {

  const ui = SpreadsheetApp.getUi();
  const title = 'ダイアログ';
  const prompt1 = '名前を入力してください';
  const response = ui.prompt(title, prompt1, ui.ButtonSet.OK);
  const name = response.getResponseText();

  const prompt2 = `Hello ${name}さん！\nお元気ですか？`;

  const buttonResponse =
    ui.alert(title, prompt2, ui.ButtonSet.YES_NO);

  // ボタンの応答に基づいて、適切なアラートダイアログを表示する
  switch (buttonResponse) {
    case ui.Button.YES:
      ui.alert('それはいいですね！');
      break;
    case ui.Button.NO:
      ui.alert('それは残念ですね');
      break;
    case ui.Button.CLOSE://バツボタンでダイアログを閉じた場合。
      ui.alert('おや？');
      break;
  }

}

//回答パターン2 if
/**
 * シート内で名前を入力し、YES/NOボタンを用いた質問に応答するダイアログを表示する関数
 */
function askHowAreYou_if() {
  const ui = SpreadsheetApp.getUi();
  const title = 'ダイアログ';
  const prompt1 = '名前を入力してください';
  const response = ui.prompt(title, prompt1, ui.ButtonSet.OK);
  const name = response.getResponseText();

  const prompt2 = `Hello ${name}さん！\nお元気ですか？`;
  const buttonResponse = ui.alert(title, prompt2, ui.ButtonSet.YES_NO);

  // ボタンの応答に基づいて、適切なアラートダイアログを表示する
  if (buttonResponse === ui.Button.YES) {
    ui.alert('それはいいですね！');
  } else if (buttonResponse === ui.Button.NO) {
    ui.alert('それは残念ですね');
  } else if (buttonResponse === ui.Button.CLOSE) {
    ui.alert('おや？');
  }
}