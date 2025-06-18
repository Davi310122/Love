document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const text = document.getElementById('text');
    
    // Suporte para touch e click
    const eventTypes = ['click', 'touchstart'];
    
    eventTypes.forEach(eventType => {
        heart.addEventListener(eventType, (e) => {
            if (eventType === 'touchstart') {
                e.preventDefault(); // Previne scroll indesejado
            }
            
            animateHeart();
        }, { passive: false });
    });
    
    function animateHeart() {
        // Reset para permitir múltiplas animações
        heart.classList.remove('animate');
        text.classList.remove('show-text');
        
        // Trigger reflow
        void heart.offsetWidth;
        
        // Animações
        heart.classList.add('animate');
        text.classList.add('show-text');
        
        // Efeito sonoro (opcional)
        playHeartSound();
        
        // Remove a classe de animação após terminar
        setTimeout(() => {
            heart.classList.remove('animate');
        }, 800);
    }
    
    function playHeartSound() {
        // Implementação opcional do som
        try {
            const sound = new Audio('./assets/heartbeat.mp3');
            sound.volume = 0.3;
            sound.play().catch(e => console.log("Autoplay prevented:", e));
        } catch (e) {
            console.log("Sound error:", e);
        }
    }
    
    // Efeito hover para dispositivos com mouse
    if (window.matchMedia("(hover: hover)").matches) {
        heart.addEventListener('mouseenter', () => {
            heart.style.transform = 'scale(1.1)';
        });
        
        heart.addEventListener('mouseleave', () => {
            heart.style.transform = 'scale(1)';
        });
    }
});
