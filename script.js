function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);
    
    const startPosition = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 3;
    heart.style.left = `${startPosition}px`;
    heart.style.fontSize = `${Math.random() * 50 + 10}px`;
    heart.style.animationDuration = `${duration}s`;
    
    setTimeout(() => {
        heart.remove();
    }, duration * 5000);
}

function showImage() {
    document.getElementById('image-container').classList.add('show');
}

function closePhoto() {
    document.getElementById('image-container').classList.remove('show');
}

setInterval(createHeart, 200);