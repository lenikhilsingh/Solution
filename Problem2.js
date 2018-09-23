var list = ['kasol', 'kasol', 'manali', 'delhi', 'delhi', 'manali', 'kasol'];

console.log(countFrequency(list)); // output : [ [ 'delhi', 'kasol', 'manali' ], [ 2, 3, 2 ] ]


function countFrequency(arr) {
    var wordsArray = [], Frequency = [], previousWord;

    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== previousWord) {
            wordsArray.push(arr[i]);
            Frequency.push(1);
        } else {
            Frequency[Frequency.length - 1]++;
        }
        previousWord = arr[i];
    }

    return [wordsArray, Frequency];
}

