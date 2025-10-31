// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    const gallery = document.getElementById('certificate-gallery');

    // Carga los datos del archivo JSON
    fetch('certificados.json')
        .then(response => {
            // Verifica si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            // Itera sobre cada certificado en los datos
            data.forEach(cert => {
                // 1. Crea un nuevo elemento <div> para la tarjeta
                const card = document.createElement('div');
                card.className = 'certificate-card'; // Asigna la clase CSS

                // 2. Define el contenido HTML de la tarjeta
                card.innerHTML = `
                    <img src="${cert.imagen_url}" alt="Imagen del certificado ${cert.titulo}">
                    <div class="card-content">
                        <h3>${cert.titulo}</h3>
                        <p>Otorgado por: <strong>${cert.otorgado_por}</strong></p>
                        <p>Fecha: ${cert.fecha}</p>
                        <a href="${cert.credencial_url}" target="_blank" rel="noopener noreferrer">Ver Credencial</a>
                    </div>
                `;

                // 3. Añade la tarjeta recién creada a la galería
                gallery.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al cargar los certificados:', error);
            gallery.innerHTML = '<p>No se pudieron cargar los certificados. Intenta más tarde.</p>';
        });
});