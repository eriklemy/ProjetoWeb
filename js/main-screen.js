// estoque 
var listaProdutos = [[0, 'Capricci Crown', 'capricci-crown.jpg', '149.40', false],
                     [1, 'Compactor gold', 'compactor-gold.jpeg', '239.99', false],
                     [2, 'Faber Castell Loom', 'faber-castell-loom.jpg', '99.99', false],
                     [3, 'Jinho 650', 'Jinhao-650.jpg', '60.99', false],
                     [4, 'Pelikan jazz', 'pelikan-jazz.jpg', '87.10', false],
                     [5, 'Pilot Kakuno', 'pilot-kakuno.jpg', '119.00', false],
                     [6, 'Monteverde Invincia', 'monteverde-invincia.jpg', '613.86', false],
                     [7, 'Xezo Maestro', 'xezo-maestro.jpg', '1,546.78', false]];
var lista = [];
var cadastro = [];
var carrinho = [];

window.onload = function(){
    cadastro = JSON.parse(window.localStorage.getItem("cadastro"));
    for(var i = 0; i < listaProdutos.length; i++){
        lista.push(listaProdutos[i]);
        window.localStorage.setItem("produtos", JSON.stringify(lista));
    }
    viewMostSell();
}

// script menu mobile
var menuNavbar = document.getElementById("menuNavbar");
menuNavbar.style.maxHeight = "0px";

function menuToggle(){
    if(menuNavbar.style.maxHeight == "0px"){
        menuNavbar.style.maxHeight = "200px";
    } else {
        menuNavbar.style.maxHeight = "0px";
    }
}

function viewMostSell(){
    document.getElementById("div-produtos").innerHTML = "";
    for(var i = 0; i < 4; i++){
        var conteudo = "";
        conteudo += '<div class = "div-card-produtos">';
        conteudo += '<div class = "div-card-img">';
        conteudo += '<img src = "images/' + listaProdutos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class = "div-card-description">';
        conteudo +=  '' + listaProdutos[i][1];
        conteudo += '</div>';
        conteudo +=  '<div> R$ ' + listaProdutos[i][3];
        conteudo += '</div>';

        if(listaProdutos[i][4] == false){
            conteudo += '<div class = div-card-button-comprar onclick = "comprar(' + listaProdutos[i][0] + ')">';
            conteudo += 'Adicionar ao carrinho';
            conteudo += '</div>';    
        } else {
            conteudo += '<div class = div-card-button-carrinho>';
            conteudo += 'produto no carrinho';
            conteudo += '</div>';    
        }
        conteudo += '</div>';

        document.getElementById("div-produtos").innerHTML += conteudo;
    }
}

function comprar(id){
    if(cadastro[5] == true) {
        listaProdutos[id][4] = true;
        carrinho.push(listaProdutos[id]);
        
        window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
        mudarPaginaProd();
    } else alert("É necessario estar logado para comprar!!");
}

function EnviarFeedBack(){
    var Feedback = [];
    var feed = document.getElementById('feed').value;
    if(feed != ''){
        alert("Agradecemos o seu feedback");
        Feedback.push(feed);
        window.localStorage.setItem("FeedbackStorage",JSON.stringify(FeedbackStorage));
    } 
}

function mudarPaginaLogin(){
    window.location.href = "pages/login.html";
}

function mudarPaginaProd(){
    window.location.href = "pages/produtos.html";
}

// ============================ DARKMODE ==================================== 
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};

if(darkMode === 'enabled') {
    enableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});