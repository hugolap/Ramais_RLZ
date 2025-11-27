document.addEventListener('DOMContentLoaded', () => {

    // código relacionado ao menu de temas
    const menuBotao = document.querySelector('.menu-botao');
    const menuDropdown = document.querySelector('.menu-dropdown');
    const temaClaroBtn = document.getElementById('temaClaro');
    const temaEscuroBtn = document.getElementById('temaEscuro');
    const temaSuporteBtn = document.getElementById('temaSuporte');
    const body = document.body;

    function setMode(mode) {
        body.classList.remove('tema-escuro', 'tema-suporte');

        if (mode === 'escuro') {
            body.classList.add('tema-escuro');
        } else if (mode === 'suporte') {
            body.classList.add('tema-suporte');
        }

        localStorage.setItem('colorMode', mode); 
    }

    menuBotao.addEventListener('click', (event) => {
        event.stopPropagation(); 
        menuDropdown.classList.toggle('aberto');
    });

    document.addEventListener('click', (event) => {
        if (!menuBotao.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('aberto');
        }
    });

        temaClaroBtn.addEventListener('click', () => {
        setMode('claro');
        menuDropdown.classList.remove('aberto'); 
    });

    temaEscuroBtn.addEventListener('click', () => {
        setMode('escuro');
        menuDropdown.classList.remove('aberto'); 
    });

    temaSuporteBtn.addEventListener('click', () => {
        setMode('suporte');
        menuDropdown.classList.remove('aberto'); 
    });

    const savedMode = localStorage.getItem('colorMode') || 'claro'; 
    setMode(savedMode);

    
    // cod relacionado ao botão de copiar
    document.getElementsByClassName('telefone').addEventListener('click',()=>{
        const telefoneCopiado = document.getElementById('telefone').value;
        navigator.clipboard.writeText(telefoneCopiado)
    })


    // informativo
    document.getElementById('info').addEventListener('click',()=>{
        document.getElementById('info').textContent("")
    })
});

