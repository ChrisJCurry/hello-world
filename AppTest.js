var arr = [1, 2, 3]

function sumArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    console.log(sum)
}

sumArray(arr)