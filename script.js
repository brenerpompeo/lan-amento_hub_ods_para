// --- Contagem Regressiva Opcional ---
const countdownElement = document.getElementById('countdown');
const eventDate = new Date(2025, 4, 29, 14, 30, 0).getTime(); // 29 de Maio de 2025, 14:30:00

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Se o elemento não existir ou a data já passou
    if (!countdownElement || distance < 0) {
        if (countdownElement) {
             // Poderia exibir "Inscrições Abertas!" ou algo assim após a data,
             // ou remover o elemento, dependendo da estratégia pós-evento.
             // Por ora, apenas limpa ou exibe mensagem padrão.
             countdownElement.innerHTML = ""; // Limpa ou "Evento Iniciado!"
             countdownElement.style.display = 'none'; // Esconde o elemento
        }
        if (typeof interval !== 'undefined') clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatação mais elegante
    countdownElement.innerHTML = `Faltam: <strong>${days}d ${hours}h ${minutes}m ${seconds}s</strong>`;
}

// Inicia o contador apenas se o elemento existir
if (countdownElement) {
   updateCountdown();
   var interval = setInterval(updateCountdown, 1000);
}


// --- Smooth Scroll Opcional ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement){
             // Calcula offset se houver header fixo (não implementado neste CSS)
             // const headerOffset = 80; // Exemplo: altura do header fixo
             // const elementPosition = targetElement.getBoundingClientRect().top;
             // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Ativa Feather Icons ---
// Colocado no final do HTML com <script>feather.replace()</script> é mais comum,
// Mas pode ser chamado aqui se o script.js for carregado no final do body.
// Garantir que seja chamado *depois* que os ícones estão no DOM.
// Ex: document.addEventListener('DOMContentLoaded', () => { feather.replace() });
// No HTML fornecido, a chamada está no final do body, o que é adequado.
