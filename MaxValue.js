// let Arr = [-6, -91, 1011, -100, 84, -22, 0, 1, 743];

function solution(A) {
    let singleDigits = A.filter((e) => e >= -9 && e <= 9);
    if (singleDigits.length) {
        console.log(Math.max(...singleDigits));
        return singleDigits;
    } else {
        console.log("no single digit number in the array");
    }


}
solution([-8, -83, 1000, -110, 88, -44, 3, 1, 702, 7])