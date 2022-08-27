function compareTriplets(a, b) {
    let c = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            c[0] += 1
        } else if (b[i] > a[i]) {
            c[1] += 1
        } else if (a[i] == b[i]) {
            return c
        }
    }


    return c

}
compareTriplets([1, 2, 3], [2, 3, 4])


function add(num1, num2) {

    let total = num1 + num2;
    return total;
};