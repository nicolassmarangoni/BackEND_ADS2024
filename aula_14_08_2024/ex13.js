function Palindromo(string) {
 
    let stringreversa = string.split('').reverse().join('');
    return stringreversa === string;
}
console.log(Palindromo('arara'))