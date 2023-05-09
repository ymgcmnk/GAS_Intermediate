'use strict';

/*
演習3-15
以下の機能を持つクラスDateObjectを作成してください。
●コンストラクタDateObject: Dateオブジェクトを渡すとインスタンスを生成する
●valueプロパティ: Dateオブジェクト
●addDateメソッド: valueプロパティの日付に指定した整数分の「日」を加算して、Dateオブジェクトを返すメソッド
*/

/**
 * DateObjectクラスは、Dateオブジェクトを操作するためのクラスです。
 * コンストラクタにDateオブジェクトを渡してインスタンスを生成し、
 * addDateメソッドを使って日付に指定した整数分の「日」を加算できます。
 */

class DateObject {
  /**
   * DateObjectクラスのコンストラクタ
   * @param {Date} date - Dateオブジェクト
   */
  constructor(date) {
    this.value = date;
  }

  /**
   * valueプロパティの日付に指定した整数分の「日」を加算して、Dateオブジェクトを返すメソッド
   * @param {number} days - 加算する日数
   * @return {Date} - 日付に指定した整数分の「日」を加算したDateオブジェクト
   */
  addDate(days) {
    // 新しいDateオブジェクトを生成して、日付を加算
    const newDate = new Date(this.value);
    newDate.setDate(this.value.getDate() + days);

    // 新しいDateオブジェクトを返す
    return newDate;
  }
}

//検証用　テスト関数
function test_classDateObject() {
  const dateFromObject = new Date()// today
  console.log(dateFromObject)

  const dateFromNum = new Date(2023, 2, 23);
  console.log(dateFromNum)

  const dateFromString = new Date('2023/05/01');
  console.log(dateFromString)

  const newDate1 = new DateObject(dateFromObject)
  console.log(newDate1.addDate(5))

  const newDate2 = new DateObject(dateFromNum)
  console.log(newDate2.addDate(5))

  const newDate3 = new DateObject(dateFromString)
  console.log(newDate3.addDate(5))

}

