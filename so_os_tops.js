function solucao(produtos) {
    var vendaDeProdutos = 0;
    var vendaProdutosTopDeLinha = 0;
    var porcentagemProdutosTopDeLinha = 0.0;
    
    for(let item of produtos){
        const preco = item.preco;
        
        if(preco > 10000){
            vendaProdutosTopDeLinha += preco;
        }
        
        vendaDeProdutos += preco;
    }

    porcentagemProdutosTopDeLinha = vendaProdutosTopDeLinha / vendaDeProdutos;
    
    var res = {totalTop: vendaProdutosTopDeLinha, 
               percentual: porcentagemProdutosTopDeLinha};
    
    console.log(res);
}