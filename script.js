// ... (Lógica do carrinho anterior) ...

// FUNÇÃO PARA ABRIR O ZOOM
function openZoom(imgUrl, title) {
    const modal = document.getElementById('zoom-modal');
    const zoomImg = document.getElementById('zoom-img');
    const caption = document.getElementById('zoom-caption');
    
    modal.style.display = "flex";
    zoomImg.style.backgroundImage = `url(${imgUrl})`;
    caption.innerText = title;

    // Efeito de Lupa ao mover o rato
    zoomImg.onmousemove = function(e) {
        const width = zoomImg.offsetWidth;
        const height = zoomImg.offsetHeight;
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        
        const bgPosX = (mouseX / width) * 100;
        const bgPosY = (mouseY / height) * 100;
        
        zoomImg.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    };
}

function closeZoom() {
    document.getElementById('zoom-modal').style.display = "none";
}

// Atualização dos preços para MT no Checkout
function updateCartDOM() {
    document.getElementById('cart-counter').innerText = cart.length;
    document.getElementById('cart-total-value').innerText = total.toLocaleString() + ' MT';
    // ... restante da função
}
