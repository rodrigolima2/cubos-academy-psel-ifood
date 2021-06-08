function solucao(obj) {
	if(obj.temIngresso == false || obj.idade < obj.censura && obj.estaComPais == false){
        console.log("ACESSO NEGADO");
    } else if(obj.temCarteirinha == true || obj.idade < 18){
        console.log("MEIA");
    } else{
        console.log("INTEIRA");
    }
}