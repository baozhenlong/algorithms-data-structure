/* eslint-disable no-param-reassign */
/**
 * 选择排序
 * @param {number[]} arr
 * @returns {number[]}
 */
function select(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            // 寻找最小数
            if (arr[j] < arr[minIndex]) {
                // 保存最小数索引
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // 交换元素
            const temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}


console.log(select([5, 8, 3, 10, 9]));
