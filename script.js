

    

var habilidade = [

'<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>Styled Components</p> <br> <p>É uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.</p> <br>',
                    '<p>Sass</p> <br> <p>É uma linguagem de folhas de estilo. Basicamente o Sass potencializa o CSS.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]

var a1 = document.querySelector('.texto-descricao')
function funcao1 (){
    var ht =document.querySelector('.texto-descricao')
    ht.innerHTML = habilidade[0]
    
}
function funcao2(){
    if(ht != a1) {
    var a1 = document.querySelector('.texto-descricao')
    a1.innerHTML = "<p>" + '* Passe o mouse por cima de alguma habilidade para ler a descrição *' + "</p>"
    }
}
function funcao3(){
    var cs = document.querySelector('.texto-descricao')
    cs.innerHTML = habilidade[1]

}
function funcao4(){
    var a2 = document.querySelector('.texto-descricao')
    a2.innerHTML = "<p>" + '* Passe o mouse por cima de alguma habilidade para ler a descrição *' + "</p>"
}
function menuShow(){
    var tam = document.getElementsByTagName('header')[0];
      
    var menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img responsividade/menu_white_36dp.svg";
        tam.style.height = 'auto'
    } else{
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "./img responsividade/close_white_36dp.svg";
            tam.style.height = 'auto'
        }

}



