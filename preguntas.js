// preguntas.js

// Función para cargar preguntas desde un archivo JSON usando fetch
export function cargarPreguntas(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
            }
            return response.json();
        })
        .then(preguntas => {
            // Guardar las preguntas en localStorage
            localStorage.setItem('preguntas', JSON.stringify(preguntas));
            return preguntas;
        })
        .catch(error => {
            console.error('Error al cargar las preguntas:', error);
            return [];
        });
}

