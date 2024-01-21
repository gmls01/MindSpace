/* 
As três funções abaixo fazem as mesmas coisas, nelas foram criadas
duas variáveis em que uma é a imagem e a outra um input do tipo
password, na função diz que se a variável da imagem tiver um final X
e variável do input for do tipo password, então a variável da imagem
será trocada por outra imagem e a variável do input terá seu
type de password alterado para text, sendo assim o usuário poderá
ver a senha que esta digitando apenas clicando no olhinho.
*/
function mostrarSenha(){
    var imagemEye = document.getElementById('btn-eye-password')
    var inputPass = document.getElementById('senha-login')

    if (imagemEye.src.endsWith("eye-close.png")) {
        imagemEye.src = "./imagens/mindspace-icons/eye-open.png";
    }

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
    }

    else {
        inputPass.setAttribute('type','password')
        imagemEye.src = "./imagens/mindspace-icons/eye-close.png";
    }
}

function criarSenha(){
    var imagemEye2 = document.getElementById('btn-eye-pass')
    var inputPass2 = document.getElementById('senha-cadastro')

    if (imagemEye2.src.endsWith("eye-close.png")) {
        imagemEye2.src = "./imagens/mindspace-icons/eye-open.png";
    }

    if (inputPass2.type === 'password') {
        inputPass2.setAttribute('type','text')
    }

    else {
        inputPass2.setAttribute('type','password')
        imagemEye2.src = "./imagens/mindspace-icons/eye-close.png";
    }
}

function confirmarSenha(){
    var imagemEye3 = document.getElementById('btn-eye-confirm')
    var inputPass3 = document.getElementById('senha-confirm-cadastro')

    if (imagemEye3.src.endsWith("eye-close.png")) {
        imagemEye3.src = "./imagens/mindspace-icons/eye-open.png";
    }

    if (inputPass3.type === 'password') {
        inputPass3.setAttribute('type','text')
    }

    else {
        inputPass3.setAttribute('type','password')
        imagemEye3.src = "./imagens/mindspace-icons/eye-close.png";
    }
}