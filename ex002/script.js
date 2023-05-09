function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('#res');
  
    if (fano.value.length == 00 || fano.value > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
      let fsex = document.getElementsByName('radsex');
      let idade = ano - Number(fano.value);
      let genero = '';
      const img = document.createElement('img');
      const p = document.createElement('p');
      img.setAttribute('id', 'foto');
  
      if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
          img.setAttribute('src', 'HBebe.png');
        } else if (idade < 21) {
          img.setAttribute('src', 'HJovem.png');
        } else if (idade < 50) {
          img.setAttribute('src', 'HAdulto.png');
        } else {
          img.setAttribute('src', 'HIdoso.png');
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
          img.setAttribute('src', 'MBebe.png');
        } else if (idade < 21) {
          img.setAttribute('src', 'MJovem.png');
        } else if (idade < 50) {
          img.setAttribute('src', 'MAdulta.png');
        } else {
          img.setAttribute('src', 'MIdosa.png');
        }
      }
  
      res.innerHTML = '';
      img.style.marginBottom = '15px'; // adiciona margem inferior para a imagem
      p.style.marginBottom = '15px'; // adiciona margem inferior para o parágrafo
  
      res.appendChild(p);
      res.appendChild(img);
      res.innerHTML += `<p>Com os dados fornecidos, foi verificado que você é um ${genero} de  ${idade} anos</p> <br/>`;
    }
  }
  