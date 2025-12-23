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
                        <p>Otorgado por: <br><strong>${cert.otorgado_por}</strong></p>
                        <p>Fecha: <br>${cert.fecha}</p>
                        <a href="${cert.credencial_url}" target="_blank" rel="noopener noreferrer">Ver Credencial</a>
                    </div>
                `;

                // 3. Añade la tarjeta recién creada a la galería
                gallery.appendChild(card);
            });
        })
        .catch(error => {
            gallery.innerHTML = '<p>No se pudieron cargar los certificados. Intenta más tarde.</p>';
        });

    // Carga los datos de experiencia
    const experienceGallery = document.getElementById('experience-gallery');
    if (experienceGallery) {
        fetch('experiencia.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                data.forEach(exp => {
                    const card = document.createElement('div');
                    card.className = 'experience-card'; // New class for flex layout
                    card.innerHTML = `
                        <div class="exp-logo">
                            <img src="${exp.logo_url}" alt="Logo ${exp.empresa}">
                        </div>
                        <div class="exp-content">
                            <h3>${exp.titulo}</h3>
                            <p class="exp-company"><strong>${exp.empresa}</strong></p>
                            <p class="exp-date">${exp.fecha}</p>
                            <p class="exp-desc">${exp.descripcion}</p>
                        </div>
                    `;
                    experienceGallery.appendChild(card);
                });
            })
            .catch(error => console.error('Error cargando experiencia:', error));
    }

    // Lógica del Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');

    // Delegación de eventos para abrir el lightbox
    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.certificate-card')) {
            lightboxImg.src = e.target.src;
            lightboxImg.alt = e.target.alt;
            lightbox.classList.add('active');
        }
    });

    // Cerrar lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
});