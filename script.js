$(document).ready(function() {
    const tabuleiro = $("#tabuleiro");
  
    // Criar as casas do tabuleiro
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const casa = $("<div>").addClass("casa");
        if ((i + j) % 2 === 0) {
          casa.addClass("preta");
        }
        tabuleiro.append(casa);
      }
    }
  
    // Adicionar peças iniciais
    const pecasBrancas = $(".casa:nth-child(odd):nth-last-child(-n+24)");
    const pecasVermelhas = $(".casa:nth-child(even):nth-child(-n+24)");
    pecasBrancas.append($("<div>").addClass("peca branca"));
    pecasVermelhas.append($("<div>").addClass("peca vermelha"));
  });
  