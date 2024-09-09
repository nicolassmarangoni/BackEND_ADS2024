let x = 3;
let y = 4;
let z = 5;
function encontrarMaior(x, y, z) {
    if (x > y && x > z) {
        console.log('O número maior é', x);
    } else if (y > x && y > z) {
        console.log('O número maior é', y);
    } else {
        console.log('O número maior é', z);
    }
}
encontrarMaior(x,y,z);