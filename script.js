WP×
/* =========================================================
   LÓGICA INTERACTIVA - ARKA ELEGANCE MOÇAMBIQUE
   Funcionalidade: Motor de Injeção de Conteúdo e Zoom (Lupa)
   ========================================================= */

// 1. INJEÇÃO DINÂMICA DA SECÇÃO DE GARANTIAS E VALORES (1 AO 10)
document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById("dynamicBlogSection");
    if (blogContainer) {
        blogContainer.innerHTML = `
            <div class="section-header"><h2>Garantia e Valores Arka Elegance</h2></div>
            <div class="blog-grid">
                <div class="blog-item"><h3>1. Pele (Cabedal) 100% Natural</h3><p>Todos os nossos artigos são produzidos rigorosamente com cabedal genuíno, assegurando alta durabilidade e desgaste elegante com o tempo.</p></div>
                <div class="blog-item"><h3>2. Produção Artesanal Moçambicana</h3><p>Cada costura e acabamento premium reflete o orgulho e o detalhe minucioso da manufatura local especializada.</p></div>
                <div class="blog-item"><h3>3. Garantia Mínima Certificada de 3 Anos</h3><p>Confiamos plenamente na qualidade da nossa Linha Exclusiva Lukart®. Oferecemos cobertura total contra defeitos de fabrico.</p></div>
                <div class="blog-item"><h3>4. Bónus Arka: Personalização Gratuita</h3><p>Grave o seu Nome, as suas Iniciais, uma Data Especial ou uma Pequena Frase diretamente na pele do produto. Um bónus exclusivo.</p></div>
                <div class="blog-item"><h3>5. Entrega Segura ao Domicílio em Todo o País</h3><p>Não importa a Província: distribuímos com segurança e rapidez o seu pedido diretamente no seu endereço em Moçambique.</p></div>
                <div class="blog-item"><h3>6. O Acabamento Premium da Linha Lukart®</h3><p>As bordas polidas e as ferragens selecionadas garantem uma estética de alto padrão internacional para uso diário ou corporativo.</p></div>
                <div class="blog-item"><h3>7. Produção Ágil em até 7 Dias Úteis</h3><p>Os seus pedidos personalizados entram imediatamente em linha de montagem artesanal, assegurando prazos rápidos sem perder o rigor técnico.</p></div>
                <div class="blog-item"><h3>8. Como Cuidar das Suas Peças em Pele</h3><p>Evite humidade excessiva e limpe apenas com panos macios e produtos de hidratação específicos para prolongar a vida do seu cabedal.</p></div>
                <div class="blog-item"><h3>9. Kits Especiais: O Presente Perfeito</h3><p>Descubra as vantagens económicas e o impacto de oferecer um Kit Gentleman ou Elegance com gravações personalizadas.</p></div>
                <div class="blog-item"><h3>10. Onde a Elegância Encontra a Identidade</h3><p>A Arka Elegance Moçambique desenha mais do que acessórios; construímos peças duráveis que contam histórias e definem o seu estilo.</p></div>
            </div>
        `;
    }
});

// 2. MOTOR DE ZOOM DA LUPA
function abrirLupa(imgUrl, nome) {
    const modal = document.getElementById('zoomModal');
    const viewer = document.getElementById('zoomViewer');
    
    if (modal && viewer) {
        modal.style.display = "flex";
        viewer.style.backgroundImage = `url('${imgUrl}')`;
        viewer.style.backgroundPosition = "center";
    }

    viewer.onmousemove = function(e) {
        const x = (e.offsetX / viewer.offsetWidth) * 100;
        const y = (e.offsetY / viewer.offsetHeight) * 100;
        viewer.style.backgroundPosition = `${x}% ${y}%`;
    };

    viewer.ontouchmove = function(e) {
        e.preventDefault();
        const touch = e.touches;
        const rect = viewer.getBoundingClientRect();
        
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        const y = ((touch.clientY - rect.top) / rect.height) * 100;
        
        viewer.style.backgroundPosition = `${x}% ${y}%`;
    };
}

function fecharLupa() {
    const modal = document.getElementById('zoomModal');
    if (modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") fecharLupa();
});
