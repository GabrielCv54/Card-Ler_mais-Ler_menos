var botao = document.getElementById('button');

botao.addEventListener('click',function(){
    var card = document.querySelector(".card");
    card.classList.toggle('active');

    if (card.classList.contains('active')){
        return botao.textContent = 'Leia Menos';
    }
    
    botao.textContent = 'Leia Mais';
});


