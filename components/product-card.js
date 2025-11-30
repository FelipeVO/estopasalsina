class CustomProductCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'description', 'image', 'slug'];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    
    render() {
        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || '';
        const image = this.getAttribute('image') || 'http://static.photos/textures/640x360';
        // slug can be provided; otherwise generate a slug from title
        const providedSlug = this.getAttribute('slug');
        const slug = providedSlug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 2rem;
                    transition: all 0.3s ease;
                }
                
                .product-card {
                    background-color: white;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
                .product-image {
                    height: 250px;
                    width: 100%;
                    display: block;
                    object-fit: contain;
                    object-position: center;
                    background: transparent;
                }
                
                .product-content {
                    padding: 0 1.5rem 1.5rem 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                .product-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: black;
                }
                
                .product-description {
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                
                .product-button {
                    background-color: black;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    text-align: center;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    display: inline-block;
                    align-self: flex-start;
                    text-decoration: none;
                }
                
                .product-button:hover {
                    background-color: #333;
                    transform: translateY(-2px);
                }
            </style>
            
                <div class="product-card animate-fade-in">
                <img class="product-image" src="${image}" alt="${title}" loading="lazy" decoding="async" srcset="${image}">
                <div class="product-content">
                    <h3 class="product-title">${title}</h3>
                    <p class="product-description">${description}</p>
                    <a href="product.html?slug=${encodeURIComponent(slug)}" class="product-button">Ver Detalles</a>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-product-card', CustomProductCard);