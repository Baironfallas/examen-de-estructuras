function bubbleSort(arr) {
    var n = arr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
}
  
var numbers = [7, 3, 9, 2, 1];
bubbleSort(numbers);
console.log(numbers);
