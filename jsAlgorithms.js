// Linear search for 'x' in arr[]

//Driver Data
let arr = [10, 30, 50, 60, 70];
let n = arr.length;

let x1 = 50;
searchInArray(arr, n, x1);

let x2 = 5;
searchInArray(arr, n, x2);

// looping through the array to match search, otherwise print -1
function linearSearch (arr, n, x) {
    let i;
    for (i = 0; i < n; i++) {
        if (arr[i] == x)
            return i;
    }
    return -1;
};

// calling items searched for using the loop by a success code or a non succesful -1
function searchInArray(arr, n, x) {
    let result = linearSearch(arr, n, x);
    if (result == -1){
        console.log('element not present in array');
    } else {
        console.log('element found!')
    }
}
