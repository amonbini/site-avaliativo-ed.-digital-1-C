onst galaxies = [
    {
        id: 1,
        name: "Andromeda Galaxy",
        category: "spiral",
        description: "The nearest major galaxy to the Milky Way, located 2.5 million light-years away.",
        image: "onst galaxies = [
    {
        id: 1,
        name: "Andromeda Galaxy",
        category: "spiral",
        description: "The nearest major galaxy to the Milky Way, located 2.5 million light-years away.",
        image: "images/andromeda.jpg" // Place your image in 'images' folder
    },
    {
        id: 2,
        name: "Whirlpool Galaxy",
        category: "spiral",
        description: "A classic spiral galaxy with prominent dust lanes and spectacular structure.",
        image: "images/whirlpool.jpg"
    },
    {
        id: 3,
        name: "Sombrero Galaxy",
        category: "spiral",
        description: "Known for its bright central bulge and dark dust lane resembling a sombrero hat.",
        image: "images/sombrero.jpg"
    },
    {
        id: 4,
        name: "Elliptical Galaxy M87",
        category: "elliptical",
        description: "A supergiant elliptical galaxy with a supermassive black hole at its center.",
        image: "images/m87.jpg"
    },
    {
        id: 5,
        name: "Centaurus A",
        category: "elliptical",
        description: "An active elliptical galaxy with distinctive dust lanes and jets.",
        image: "images/centaurus-a.jpg"
    },
    {
        id: 6,
        name: "Large Magellanic Cloud",
        category: "irregular",
        description: "A satellite galaxy of the Milky Way with an irregular shape.",
        image: "images/lmc.jpg"
    },
    {
        id: 7,
        name: "Small Magellanic Cloud",
        category: "irregular",
        description: "Another satellite galaxy visible from the Southern Hemisphere.",
        image: "images/smc.jpg"
    },
    {
        id: 8,
        name: "Pinwheel Galaxy",
        category: "spiral",
        description: "A face-on spiral galaxy with beautiful spiral arms and star formation.",
        image: "images/pinwheel.jpg"
    }
];

// DOM elements
const gallery = document.getElementById('gallery');
const navButtons = document.querySelectorAll('.nav-btn');

// Initialize gallery
function initGallery() {
    renderGallery('all');
    setupEventListeners();
}

// Render gallery items
function renderGallery(filter) {
    gallery.innerHTML = '';
    
    const filteredGalaxies = filter === 'all' 
        ? galaxies 
        : galaxies.filter(galaxy => galaxy.category === filter);

    filteredGalaxies.forEach(galaxy => {
        const item = createGalleryItem(galaxy);
        gallery.appendChild(item);
    });
}

// Create individual gallery item
function createGalleryItem(galaxy) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
        <img src="${galaxy.image}" alt="${galaxy.name}" onerror="this.src='https://via.placeholder.com/300x250?text=${encodeURIComponent(galaxy.name)}'">
        <div class="gallery-item-info">
            <h3>${galaxy.name}</h3>
            <p>${galaxy.description}</p>
            <span class="category-tag">${galaxy.category.charAt(0).toUpperCase() + galaxy.category.slice(1)}</span>
        </div>
    `;
    return div;
}

// Setup filter buttons
function setupEventListeners() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            renderGallery(filter);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);" // Place your image in 'images' folder
    },
    {
        id: 2,
        name: "Whirlpool Galaxy",
        category: "spiral",
        description: "A classic spiral galaxy with prominent dust lanes and spectacular structure.",
        image: "ihttps://astrobackyard.com/wp-content/uploads/2020/04/whirlpool-galaxy.jpg"
    },
    {
        id: 3,
        name: "Sombrero Galaxy",
        category: "spiral",
        description: "Known for its bright central bulge and dark dust lane resembling a sombrero hat.",
        image: ""
    },
    {
        id: 4,
        name: "Elliptical Galaxy M87",
        category: "elliptical",
        description: "A supergiant elliptical galaxy with a supermassive black hole at its center.",
        image: ""
    },
    {
        id: 5,
        name: "Centaurus A",
        category: "elliptical",
        description: "An active elliptical galaxy with distinctive dust lanes and jets.",
        image: "images/centaurus-a.jpg"
    },
    {
        id: 6,
        name: "Large Magellanic Cloud",
        category: "irregular",
        description: "A satellite galaxy of the Milky Way with an irregular shape.",
        image: "images/lmc.jpg"
    },
    {
        id: 7,
        name: "Small Magellanic Cloud",
        category: "irregular",
        description: "Another satellite galaxy visible from the Southern Hemisphere.",
        image: "images/smc.jpg"
    },
    {
        id: 8,
        name: "Pinwheel Galaxy",
        category: "spiral",
        description: "A face-on spiral galaxy with beautiful spiral arms and star formation.",
        image: "images/pinwheel.jpg"
    }
];

// DOM elements
const gallery = document.getElementById('gallery');
const navButtons = document.querySelectorAll('.nav-btn');

// Initialize gallery
function initGallery() {
    renderGallery('all');
    setupEventListeners();
}

// Render gallery items
function renderGallery(filter) {
    gallery.innerHTML = '';
    
    const filteredGalaxies = filter === 'all' 
        ? galaxies 
        : galaxies.filter(galaxy => galaxy.category === filter);

    filteredGalaxies.forEach(galaxy => {
        const item = createGalleryItem(galaxy);
        gallery.appendChild(item);
    });
}

// Create individual gallery item
function createGalleryItem(galaxy) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
        <img src="${galaxy.image}" alt="${galaxy.name}" onerror="this.src='https://via.placeholder.com/300x250?text=${encodeURIComponent(galaxy.name)}'">
        <div class="gallery-item-info">
            <h3>${galaxy.name}</h3>
            <p>${galaxy.description}</p>
            <span class="category-tag">${galaxy.category.charAt(0).toUpperCase() + galaxy.category.slice(1)}</span>
        </div>
    `;
    return div;
}

// Setup filter buttons
function setupEventListeners() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            renderGallery(filter);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);
