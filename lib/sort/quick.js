/* eslint-disable no-param-reassign */
/**
 * 选择排序
 * @param {number[]} arr
 * @returns {number[]}
 */
function quick(arr, left, right) {
    if (left === undefined) {
        left = 0;
        right = arr.length - 1;
    }
    if (left < right) {
        const partitionIndex = partition(arr, left, right);
        quick(arr, left, partitionIndex - 1);
        quick(arr, partitionIndex + 1, right);
    }

    return arr;
}

/**
 *  分区
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns
 */
function partition(arr, left, right) {
    // 设定基准值索引
    const pivot = left;
    // 基准值最后停留的索引
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);

    return index - 1;
}

/**
 * 交换元素
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

console.log(quick([5, 8, 3, 10, 2]));
