/* eslint-disable no-param-reassign */
/**
 * 冒泡排序
 * @param {number[]} arr
 * @returns {number[]}
 */
function bubble(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比
            if (arr[j] > arr[j + 1]) {
                // 交换元素
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


console.log(bubble([5, 8, 3, 10, 9]));
