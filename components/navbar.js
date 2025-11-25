class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(245, 245, 245, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1.5rem 2rem;
                }
                
                .logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: black;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: black;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    padding: 0.5rem 0;
                }
                
                .nav-links a:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: black;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover:after {
                    width: 100%;
                }
                
                .cta-button {
                    background-color: black;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .cta-button:hover {
                    background-color: #333;
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    nav {
                        flex-direction: column;
                        padding: 1rem;
                    }
                    
                    .nav-links {
                        margin-top: 1rem;
                        gap: 1rem;
                    }
                }
            </style>
            
            <nav>
                <a href="/" class="logo">Estopas Alsina</a>
                
                <div class="nav-links">
                    <a href="/">Inicio</a>
                    <a href="/about">Nosotros</a>
                    <a href="/products">Productos</a>
                    <a href="/contact" class="cta-button">Contacto</a>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);