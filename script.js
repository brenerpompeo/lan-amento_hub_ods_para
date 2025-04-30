// --- Contagem Regressiva Opcional ---
const countdownElement = document.getElementById('countdown');
// Definir a data do evento (ATENÇÃO AO FUSO HORÁRIO - usar UTC se necessário)
// Formato: Ano, Mês (0=Jan, 1=Fev,...), Dia, Hora, Minuto, Segundo
const eventDate = new Date(2025, 4, 29, 14, 30, 0).getTime(); // 29 de Maio de 2025, 14:30:00

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0 || !countdownElement) {
        if (countdownElement) countdownElement.innerHTML = "Evento já ocorreu!";
        clearInterval(interval); // Para o contador
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Atualiza o contador imediatamente e depois a cada segundo
if (countdownElement) {
   updateCountdown();
   var interval = setInterval(updateCountdown, 1000);
}


// --- Smooth Scroll Opcional (se usar links internos como #sobre) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // ou 'center'
            });
        }
    });
});
