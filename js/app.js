   let numeroAlugueis = 0;

function alterarStatus(id) {
    let botao = document.getElementById(`game-${id}`);
    let imagem = botao.querySelector('.dashboard__item__img');
    let nomeBotao = botao.querySelector('.dashboard__item__button');
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        nomeBotao.classList.remove('dashboard__item__button--return');
        nomeBotao.innerHTML = 'Alugar';
        console.log('Livro devolvido com sucesso!');
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        nomeBotao.classList.add('dashboard__item__button--return');
        nomeBotao.innerHTML = 'Devolver';
        alugarJogo();
    }
    
}

function alugarJogo() {
    numeroAlugueis++;
    let textoAluguel = numeroAlugueis <= 1 ? 'jogo foi alugado!' : 'jogos foram alugados!';
    console.log(`Um total de ${numeroAlugueis} ${textoAluguel}`);
}