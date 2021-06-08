function solucao(ano) {
	if((ano - 2016) % 4 == 0){
        console.log("JOGOS");
    } else if((ano - 2018) % 4 == 0){
        console.log("COPA");
    } else{
        console.log("MEH");
    }
}