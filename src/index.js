module.exports = function towelSort(matrix) {
    let a = [];
    if (!matrix) {
        return a;
    } else {
        for (let i in matrix) {
            if (i % 2 == 0) {
                a = [...a, ...matrix[i]];
            } else {
                a = [...a, ...matrix[i].reverse()];
            }
        }
        return a;
    }
};
