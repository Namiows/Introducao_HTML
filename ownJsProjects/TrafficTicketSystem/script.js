function check () {
    let inputDaVel = document.querySelector('#valueID');
    let divResult = document.querySelector('.result');
    let valueVelocidade = Number(inputDaVel.value);
    
     
    if (valueVelocidade > 60) {

        divResult.innerHTML = `Velocidade ${valueVelocidade} KM/H. <strong>Você foi multado</strong>. `;
        divResult.innerHTML += `Seja sempre prudente enquanto estiver ao volante!`;
        document.body.style.backgroundColor = "red";
        divResult.style.color = 'white';
        
    } else

        divResult.innerHTML = `Velocidade: ${valueVelocidade} KM/H. <strong>Muito bem!</strong> Continue sendo prudente enquanto estiver ao volante!`;
        divResult.style.borderColor = 'blue';
        document.body.style.backgroundColor += "blue";
        divResult.style.color = 'white';
}

