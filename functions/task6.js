function* wordGenerator(str) {
    const words = str.split(" ");
    for (const word of words) {  
        yield word;              
    }
}

const gen = wordGenerator("Example sentence");

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);  
