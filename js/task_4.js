function findMissingLetter(array)
{
    for (let index = 1; index < array.length; index++) {
        const element = array[index].toLowerCase().charCodeAt();
        if (element - array[index - 1].toLowerCase().charCodeAt() === 2) {
            return String.fromCharCode(element - 1)
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));
// console.log(String.fromCharCode(97));