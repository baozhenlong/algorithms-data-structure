/* eslint-disable no-param-reassign */
/**
 * 插入排序
 * @param {number[]} arr
 * @returns {number[]}
 */
function insert(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let preIndex = i - 1;
        const currentValue = arr[i];
        // 如果先前的元素比当前扫描到的元素大
        while (preIndex >= 0 && arr[preIndex] > currentValue) {
            // 将先前的元素往后移
            arr[preIndex + 1] = arr[preIndex];
            // 继续往前找元素
            preIndex--;
        }
        // 插入扫描的元素
        arr[preIndex + 1] = currentValue;
    }

    return arr;
}


console.log(insert([5, 8, 3, 10, 9]));
