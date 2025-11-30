class ProductList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="py-20 px-4 max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-serif font-bold mb-4">Nuestros Productos</h2>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">Explora nuestra selección de estopas, preparada para usos industriales, limpieza y acabado fino.</p>
                </div>
                <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            </section>
        `;

        function escapeAttr(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        fetch('data/products.json')
            .then(res => res.json())
            .then(products => {
                const grid = this.querySelector('#products-grid');
                grid.innerHTML = products.map(p => `
                    <custom-product-card
                        title="${escapeAttr(p.title)}"
                        description="${escapeAttr(p.description)}"
                        image="${escapeAttr(p.image)}"
                        slug="${escapeAttr(p.slug)}">
                    </custom-product-card>
                `).join('');
            })
            .catch(err => {
                const grid = this.querySelector('#products-grid');
                grid.innerHTML = '<p class="text-red-600">No se pudieron cargar los productos.</p>';
                console.error(err);
            });
    }
}

customElements.define('product-list', ProductList);
