function censorWord(str, word) {
    const newWord = word.toLowerCase();
    const newstr=str.toLowerCase();
    const stars = "*".repeat(newWord.length);

    const censored = newstr.replaceAll(newWord, stars);

    return censored;
}

console.log(censorWord("Experimental sentence experimental","experimental"));