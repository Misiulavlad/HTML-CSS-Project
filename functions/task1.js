   function countSpaces(str){
let count=0;
for(let i=0;i<str.length;i++){
    if(str[i]===' '){
        count++;
    }
}
return count;
}
    
    console.log(countSpaces("Example sentence"))