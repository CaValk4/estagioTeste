function checarA(string){
    let texto = string.toLowerCase();
    let count = 0

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === 'a'){
            count++;
        }
    }
    return count;

    
}

const texto = 'Amanha sera um lindo dia'

console.log(checarA(texto));