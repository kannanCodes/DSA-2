function quickSort(arr, low = 0, high = arr.length - 1) {
     if (low < high) {
          const pIndex = partition(arr, low, high);
          quickSort(arr, low, pIndex - 1);
          quickSort(arr, pIndex + 1, high);
     }
     return arr;
}

function partition(arr, low, high) {
     const pivot = arr[low];
     let i = low;
     let j = high;

     while (i < j) {

          while (arr[i] <= pivot && i <= high) i++;


          while (arr[j] > pivot && j >= low) j--;


          if (i < j) {
               [arr[i], arr[j]] = [arr[j], arr[i]];
          }
     }


     [arr[low], arr[j]] = [arr[j], arr[low]];
     return j;
}


console.log(quickSort([7, 2, 4, 1, 9, 3]));



// function partition(arr, l, h) {
//      let pivot = arr[l];
//      let i = l;
//      let j = h;

//      while (i < j) {
//           do {
//                i++;
//           } while (arr[i] <= pivot && i < h);

//           do {
//                j--;
//           } while (arr[j] > pivot && j > l);

//           if (i < j) {
//                [arr[i], arr[j]] = [arr[j], arr[i]];
//           }
//      }

//      [arr[l], arr[j]] = [arr[j], arr[l]];
//      return j;
// }

// function quickSort(arr, l = 0, h = arr.length) {
//      if (l < h) {
//           let pivotIndex = partition(arr, l, h);
//           quickSort(arr, l, pivotIndex);
//           quickSort(arr, pivotIndex + 1, h);
//      }
//      return arr;
// }

// console.log(quickSort([7, 2, 4, 1, 9]));
