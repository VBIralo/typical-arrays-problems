exports.min = function min(arr) {
    if (!arr || arr.length == 0) return 0;

    let min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    };

    return min;
}

exports.max = function max(arr) {
    if (!arr || arr.length == 0) return 0;

    let max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    };

    return max;
}

exports.avg = function avg(arr) {
    if (!arr || arr.length == 0) return 0;

    let sum = 0;
    arr.map(n => sum += n)

    return sum / arr.length
}
