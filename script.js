document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos (IDs e classes do HTML fornecido)
    const menuBotao = document.querySelector('.menu-botao');
    const menuDropdown = document.querySelector('.menu-dropdown');
    const temaClaroBtn = document.getElementById('temaClaro');
    const temaEscuroBtn = document.getElementById('temaEscuro');
    const temaSuporteBtn = document.getElementById('temaSuporte');
    const body = document.body;

    // Função para definir e salvar o modo de cor
    function setMode(mode) {
        // Remove todas as classes de tema primeiro
        body.classList.remove('tema-escuro', 'tema-suporte');

        if (mode === 'escuro') {
            body.classList.add('tema-escuro');
        } else if (mode === 'suporte') {
            body.classList.add('tema-suporte');
        }
        // Se mode for 'claro', nenhuma classe é adicionada (padrão)

        localStorage.setItem('colorMode', mode); // Salva o modo atual
    }

    // 1. Alternar a abertura/fechamento do menu dropdown
    menuBotao.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique se propague e feche o menu imediatamente
        menuDropdown.classList.toggle('aberto');
    });

    // Fechar o menu se clicar fora dele
    document.addEventListener('click', (event) => {
        // Verifica se o clique não foi no botão e nem dentro do dropdown
        if (!menuBotao.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('aberto');
        }
    });

    // 2. Listeners para os botões de tema
    
    // Tema Claro
    temaClaroBtn.addEventListener('click', () => {
        setMode('claro');
        menuDropdown.classList.remove('aberto'); 
    });

    // Tema Escuro
    temaEscuroBtn.addEventListener('click', () => {
        setMode('escuro');
        menuDropdown.classList.remove('aberto'); 
    });

    // Tema Suporte+
    temaSuporteBtn.addEventListener('click', () => {
        setMode('suporte');
        menuDropdown.classList.remove('aberto'); 
    });

    // 3. Carregar a preferência do Modo ao carregar a página
    // Verifica se há um modo salvo, caso contrário, usa 'claro'.
    const savedMode = localStorage.getItem('colorMode') || 'claro'; 
    setMode(savedMode);
});