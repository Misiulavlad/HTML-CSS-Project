function analyzeString(str) {
    return {
        original: str,                        
        length: str.length,                   
        wordCount: str.split(" ").length,     
        uppercaseVariant: str.toUpperCase(),  
        withoutSpaces: str.replaceAll(" ", "")
    };
}

console.log(analyzeString("Hello world"));