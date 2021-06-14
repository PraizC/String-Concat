let wrd1 = prompt('Enter Word 1');
let wrd2 = prompt('Enter Word 2');
let slice1 = (wrd1.length-wrd2.length);
let slice2 = (wrd2.length-wrd1.length);
if (wrd1.length > wrd2.length) {
    alert((wrd1.substr(slice1)) + wrd2);
} else if (wrd2.length > wrd1.length) {
    alert(wrd1 + wrd2.substr(slice2))
} else {
    alert(wrd1 + wrd2);
}
