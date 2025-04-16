function get_response() {
    const pontuacoes = {
        Eague: 0,
        Shark: 0,
        Wolf: 0,
        Cat: 0
    };
  
    for (let i = 1; i <= 4; i++) {
      const opcoes = document.getElementsByName(`question${i}`);
      let respondeu = false;
  
      for (const opcao of opcoes) {
        if (opcao.checked) {
          pontuacoes[opcao.value]++;
          respondeu = true;
          break;
        }
      }
  
      if (!respondeu) {
        alert(`Você deixou a pergunta ${i} sem resposta!`);
        return; // interrompe a função se tiver pergunta sem resposta
      }
    }
  
    // Exibir o resultado
    resultado = ''
    for (const animal in pontuacoes) {

      resultado += `${animal.charAt(0).toUpperCase() + animal.slice(1)}: ${((pontuacoes[animal])*4)} % \n`;
    }
  
    
  }