class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #111;
                    color: white;
                    padding: 4rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    display: block;
                }
                
                .footer-description {
                    color: #aaa;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-heading:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 40px;
                    height: 2px;
                    background-color: white;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-links a {
                    color: #aaa;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: white;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .social-links a {
                    color: white;
                    background-color: #333;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background-color: #555;
                    transform: translateY(-3px);
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid #333;
                    color: #666;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div>
                    <span class="footer-logo">Estopas Alsina</span>
                    <p class="footer-description">
                        Crafting premium tow fiber since 1910. A century of tradition woven into every thread.
                    </p>
                    <div class="social-links">
                        <a href="#"><i data-feather="facebook"></i></a>
                        <a href="#"><i data-feather="instagram"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="linkedin"></i></a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Our Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-heading">Products</h3>
                    <ul class="footer-links">
                        <li><a href="#">Cotton Towels</a></li>
                        <li><a href="#">Linen Collection</a></li>
                        <li><a href="#">Microfiber Series</a></li>
                        <li><a href="#">Bamboo Selection</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-heading">Contact</h3>
                    <ul class="footer-links">
                        <li><i data-feather="map-pin"></i> 123 Fabric St, Textile District</li>
                        <li><i data-feather="phone"></i> +1 (555) 123-4567</li>
                        <li><i data-feather="mail"></i> info@estopasalsina.com</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} Estopas Alsina. All rights reserved.
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);