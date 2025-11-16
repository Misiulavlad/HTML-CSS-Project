const createUserTag=(firstName,lastName,yearOfBirth)=>{
    return `@${lastName.toLowerCase()}.${firstName[0].toLowerCase()}${yearOfBirth}`;
}

console.log(createUserTag("Алексей","Петров",2011));