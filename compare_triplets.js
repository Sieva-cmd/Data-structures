function compareTriplets(a, b) {

    let aScore = 0;
    let bScore = 0;

    a.forEach((x, index) => {
        if (x > b[index]) {
            aScore++;
        } else if (x < b[index]) {
            bScore++;
        }
    });

    return [aScore, bScore];

}
compareTriplets([1, 2, 3], b[2, 3, 1])