function solucao(letra, palavras) {
    const resultado = [];
    
	for(let item of palavras){
        if(item[0] != letra) {
            resultado.push(item);
        }
    }
    
    console.log(resultado.length);
}