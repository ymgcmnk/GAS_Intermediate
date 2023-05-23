'use strict';
/*
演習５－15
以下のようなクラスDateFormatを作成しましょう。

クラスDateFormat: Dateオブジェクトを渡すとインスタンスを生成する
dateプロパティ: 受け取ったDateオブジェクト
getStringFormatメソッド: yyyy/MM/dd形式の文字列を返す
getLocaleFormatメソッド:  yyyy年M月d日形式の文字列を返す
*/


/**
 * DateFormatクラス
 * Dateオブジェクトを渡すとインスタンスを生成し、
 * yyyy/MM/dd形式およびyyyy年M月d日形式で日付を表示する機能を持つクラス
 */
class DateFormat {
  /**
   * コンストラクタ
   * @param {Date} date - Dateオブジェクト
   */
  constructor(date) {
    this.date = date;
  }

  /**
   * yyyy/MM/dd形式の文字列を返す
   * @return {string} - yyyy/MM/dd形式の日付文字列
   */
  getStringFormat() {
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1; // 0から始まるので1を足す
    const day = this.date.getDate();

    return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
  }

  /**
   * yyyy年M月d日形式の文字列を返す
   * @return {string} - yyyy年M月d日形式の日付文字列
   */
  getLocaleFormat() {
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1; // 0から始まるので1を足す
    const day = this.date.getDate();

    return `${year}年${month}月${day}日`;
  }
}


function test_classDateFormat_5_15(){

// 使用例
const date = new Date();
const dateFormat = new DateFormat(date);
console.log(dateFormat.getStringFormat()); // "yyyy/MM/dd"形式で出力
console.log(dateFormat.getLocaleFormat()); // "yyyy年M月d日"形式で出力
}

