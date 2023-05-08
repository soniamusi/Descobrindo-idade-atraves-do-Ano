function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var resultado = document.querySelector('div#resultado')

   if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert(`[Erro] verifique os dados e tente novamente`)
   } else {
    var fsexo = document.getElementsByName('radsexo')
    var idade = ano - Number(fano.value )
   // resultado.innerHTML = `Idade calculada: ${idade}`
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if (fsexo[0].checked){
       genero = 'Homem'
       if(idade >= 0 && idade < 10){
         //crianca
         img.setAttribute('src', 'child-boy.png')
       } else if (idade < 21){
         //jovem
         img.setAttribute('src', 'young-men.png')
       } else if (idade < 50){
         //adulto
         img.setAttribute('src', 'men.png')
       } else {
         //idoso
         img.setAttribute('src', 'old-men.png')
       }
   } else if (fsexo[1].checked) {
     genero = 'Mulher'
         if(idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'child-girl.png')
         } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'young-girl.png')
         } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'woman.png')
         } else {
            //idoso
            img.setAttribute('src', 'old-woman.png')
         }

      }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    resultado.appendChild(img)
     
   }

}