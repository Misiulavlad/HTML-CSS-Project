const getLastWord=(str)=>{
const words =str.split(" ");
const lastWord=(words[words.length-1]);
return lastWord.toUpperCase();
}

console.log(getLastWord("Example sentence"));