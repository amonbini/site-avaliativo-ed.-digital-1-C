// --- GESTÃO DE DADOS (DATABASE SIMULADA) ---
const curiositiesData = [
    { title: "Buracos Negros", text: "A gravidade é tão intensa que nem a luz escapa." },
    { title: "Nebulosas", text: "Berçários estelares feitos de poeira e gás ionizado." },
    { title: "Anos-Luz", text: "A luz viaja a 300.000 km por segundo no vácuo." }
];

const faqData = [
    { q: "O que é Matéria Escura?", a: "É uma forma invisível de matéria que compõe a maior parte da massa do universo." },
    { q: "O universo está expandindo?", a: "Sim, e a velocidade da expansão está acelerando devido à Energia Escura." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function initApp() {
    const grid = document.getElementById('grid-cards');
    const accordion = document.getElementById('accordion-container');

    // Renderizar Cards
    curiositiesData.forEach(item => {
        grid.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </article>
        `;
    });

    // Renderizar Acordeão
    faqData.forEach((item, index) => {
        accordion.innerHTML += `
            <div class="acc-item">
                <button class="acc-header" aria-expanded="false" aria-controls="faq-${index}">
                    ${item.q}
                </button>
                <div id="faq-${index}" class="acc-content" role="region">
                    <p>${item.a}</p>
                </div>
            </div>
        `;
    });

    setupEvents();
}

// --- ACESSIBILIDADE E COMPONENTES ---
function setupEvents() {
    // 1. Alto Contraste
    document.getElementById('btn-contrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // 2. Tamanho da Fonte
    let fontSize = 100;
    document.getElementById('btn-increase').addEventListener('click', () => {
        fontSize += 10;
        document.documentElement.style.fontSize = `${fontSize}%`;
    });
    document.getElementById('btn-decrease').addEventListener('click', () => {
        fontSize -= 10;
        document.documentElement.style.fontSize = `${fontSize}%`;
    });

    // 3. Lógica do Acordeão
    document.querySelectorAll('.acc-header').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            button.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('open');
        });
    });

    // 4. Scroll Reveal (Observer API)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-container').forEach(sec => observer.observe(sec));
}

// Inicializar
window.onload = initApp;
