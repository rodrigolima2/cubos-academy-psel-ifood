function solucao(precos) {
    var gratis = 0;
    var res = 0;
    
    if(precos.length < 5){
        for(let i=0; i<precos.length; i++){
            res += precos[i];
        }
    } else if(precos.length >= 5){
        gratis = precos[0];
        
        for(let i=0; i<precos.length; i++){         
            if(precos[i] < gratis){
                gratis = precos[i];
            }
            
            res += precos[i];
        }
        res -= gratis;
    }
    
    console.log(res);
}