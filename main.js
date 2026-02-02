// Get elements
const claimButton = document.getElementById('claimButton');
const scamContainer = document.getElementById('scamContainer');
const valentineContainer = document.getElementById('valentineContainer');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Click event for the scam button
claimButton.addEventListener('click', function() {
    scamContainer.classList.add('hidden');
    valentineContainer.classList.remove('hidden');
});

// Yes button celebration
yesButton.addEventListener('click', function() {
    alert('🎉 YAY! I love you! 💕');
    createHearts();
});

// No button dodges away
noButton.addEventListener('click', function() {
    // Random position
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 50);
    
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

// Create falling hearts animation
function createHearts() {
    const heartCount = 100;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-10px';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.zIndex = '999';
        heart.style.pointerEvents = 'none';
        
        document.body.appendChild(heart);
        
        // Animate falling
        let top = -10;
        const interval = setInterval(() => {
            top += Math.random() * 5 + 2;
            heart.style.top = top + 'px';
            
            if (top > window.innerHeight) {
                clearInterval(interval);
                heart.remove();
            }
        }, 30);
    }
}