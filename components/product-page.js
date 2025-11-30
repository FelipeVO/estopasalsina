class ProductPage extends HTMLElement {
    connectedCallback() {
        // render placeholder while we fetch data
        this.innerHTML = `
            <section class="py-20 px-4 max-w-7xl mx-auto">
                <div id="product-root" class="text-center">Cargando producto...</div>
            </section>
        `;

        const params = new URLSearchParams(location.search);
        const slug = params.get('slug');

        fetch('data/products.json')
            .then(res => res.json())
            .then(products => {
                const product = products.find(p => p.slug === slug);
                const root = this.querySelector('#product-root');
                if (!product) {
                    root.innerHTML = `
                        <h2 class="text-3xl font-serif font-bold mb-4 p-20">Producto no encontrado</h2>
                        <p class="text-gray-600 mb-6">El producto solicitado no existe. <a href="index.html" class="text-black underline">Volver al inicio</a></p>
                    `;
                    return;
                }

                root.innerHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 py-20 gap-20 items-start">
                        <div class="">
                            <img src="${product.image}" alt="${product.title}" class="w-3/4 rounded-lg shadow-lg object-contain" loading="lazy" decoding="async" srcset="${product.image}">
                        </div>
                        <div class="text-left">
                            <h1 class="text-4xl font-serif font-bold mb-4">${product.title}</h1>
                            <p class="text-lg text-gray-700 mb-4">${product.short}</p>
                            <p class="text-lg text-gray-700 mb-4 text-justify">${product.description}</p>
                            <p class="text-gray-600 mb-6">${product.details}</p>
                            <p class="text-gray-600 mb-6">${product.memo}</p>
                            <a href="#contact" class="inline-block bg-black text-white px-8 py-3 rounded-full">Consultar por Producto</a>
                        </div>
                    </div>
                `;
            })
            .catch(err => {
                const root = this.querySelector('#product-root');
                root.innerHTML = `<p class="text-red-600">Error cargando productos.</p>`;
                console.error(err);
            });
    }
}

customElements.define('product-page', ProductPage);
