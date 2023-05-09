'use strict';

/*
演習3-10
任意の桁数の半角文字列を要素とするリストと、桁数を表す整数を引数として渡すと、配列のすべての要素について
●桁数を表す整数でゼロパディング
を施した配列を返す関数を作成してください。
*/

/**
 * 配列のすべての要素について、指定された桁数でゼロパディングを施した配列を返す関数
 * @param {Array<string>} arr - 任意の桁数の半角文字列を要素とする配列
 * @param {number} digits - 桁数を表す整数
 * @return {Array<string>} ゼロパディングされた配列
 */
function zeroPaddingArray(arr, digits) {
  // 配列の各要素に対して以下の処理を行い、新しい配列を生成
  return arr.map(element => {
    // element（現在の要素）を文字列に変換し、指定された桁数でゼロパディングを行う
    const paddedElement = element.toString().padStart(digits, '0');
    // ゼロパディングされた要素を返す
    return paddedElement;
  });
}

function testZeroPadding_TA() {

  // 使用例
  const inputArray = ['1', '23', '456', '7890'];
  const paddedArray = zeroPaddingArray(inputArray, 5);

  console.log(paddedArray); // ['00001', '00023', '00456', '07890']
}