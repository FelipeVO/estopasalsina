class ContactForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="py-20 bg-gray-50">
                <div class="max-w-4xl mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-serif font-bold mb-4 text-gray-900">Hablemos sobre tus necesidades</h2>
                        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                            Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                        </p>
                    </div>
                    
                    <form class="bg-white p-8 rounded-lg shadow-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input type="text" id="name" name="name" required 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" name="email" required 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                <input type="tel" id="phone" name="phone" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                            </div>
                            <div>
                                <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                                <input type="text" id="company" name="company" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                            <input type="text" id="subject" name="subject" required 
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                        </div>
                        
                        <div class="mb-6">
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <textarea id="message" name="message" rows="4" required 
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"></textarea>
                        </div>
                        
                        <button type="submit" 
                            class="w-full bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition duration-300">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </section>
        `;

        // Optional: you can hook submit event here to do custom handling
        const form = this.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Simple client-side confirmation — replace with real send logic
                alert('Gracias — hemos recibido tu mensaje.');
                form.reset();
            });
        }
    }
}

customElements.define('contact-form', ContactForm);
