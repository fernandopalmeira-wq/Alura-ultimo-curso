const botoes = document.querySelectorAll('.btn-proximo');
const passos = document.querySelectorAll('.passo');
const barraProgresso = document.getElementById('barra-progresso');

function mostrarPasso(numero) {
    const proximoPasso = document.getElementById('passo-' + numero);

    // Não tenta abrir uma etapa inexistente.
    if (!proximoPasso) {
        console.error('Etapa não encontrada: passo-' + numero);
        return;
    }

    // Esconde todas as etapas.
    passos.forEach(function(passo) {
        passo.classList.remove('ativo');
    });

    // Mostra somente a etapa escolhida.
    proximoPasso.classList.add('ativo');

    // Atualiza a barra de progresso.
    if (barraProgresso) {
        let progresso = 0;

        if (numero === 0) {
            progresso = 0;
        } else if (numero === 14) {
            progresso = 100;
        } else if (numero >= 1 && numero <= 10) {
            progresso = numero * 10;
        } else {
            progresso = 0;
        }

        barraProgresso.style.width = progresso + '%';
    }

    // Volta ao topo quando muda de etapa.
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const destino = this.getAttribute('data-proximo');

        if (destino !== null) {
            mostrarPasso(destino);
        }
    });
});