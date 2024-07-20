const sidebarLinks = document.querySelectorAll('.sidebar a');
const tabContents = document.querySelectorAll('.tab-content');

function openTab(evt, tabId) {
    var i, tabcontent, tablinks;

    // Esconde todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os links de abas
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra o conteúdo da aba atual e adiciona a classe "active" ao link da aba atual
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab-link').click();
});

// Adiciona um evento de clique para cada link de aba
sidebarLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        tabContents.forEach((content) => {
            content.classList.remove('active');
        });
        tabContents[index].classList.add('active');
    });
});
