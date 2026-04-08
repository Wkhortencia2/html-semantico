function alterarNome() {

    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === ''){
alert('digite um nome!')

    
    } else{
        document.getElementById('nomeUsuario').innerHTML = trocarNome;
    }
}

function alterarCurso() {

    let trocarCurso = document.getElementById('inputCurso').value;

    if (trocarCurso === ''){
alert('digite um curso!')

    
    } else{
        document.getElementById('nomeCurso').innerHTML = trocarCurso;
    }
}





function alterarStatus() {

    let trocarStatus = document.getElementById('inputStatus').value;

    if (trocarStatus === ''){
alert('digite um Status!')

    
    } else{
        document.getElementById('Status').innerHTML = trocarStatus;
    }
    
}