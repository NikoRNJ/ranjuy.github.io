// Navegación entre páginas
function goToModule(module) {
    if (module === 'logica') {
        window.location.href = 'paginas/modulo-logica.html';
    }
}

function goHome() {
    window.location.href = '/index.html';
}

function nextLesson() {
    const currentPagePath = window.location.pathname;

    if (currentPagePath.endsWith('modulo-logica.html')) {
        // Desde la página principal del módulo (Lección 1) a Lección 2
        window.location.href = '../modulos/logica/leccion2.html';
    } else if (currentPagePath.endsWith('leccion2.html')) {
        // Desde Lección 2 a Lección 3
        window.location.href = 'leccion3.html'; // Asume que leccion2.html y leccion3.html están en la misma carpeta modulos/logica/
    } else if (currentPagePath.endsWith('leccion3.html')) {
        // Estamos en la Lección 3 (última lección por ahora)
        alert('¡Felicidades! Has completado todas las lecciones de este módulo por ahora.\n\n¡Sigue practicando!');
    } else {
        // Comportamiento por defecto o si no se reconoce la página
        alert('Navegación a la siguiente lección no definida para esta página.');
    }
}

function showComingSoon() {
    alert('🚀 Este módulo estará disponible próximamente.\n\n¡Termina primero el módulo de Lógica para desbloquearlo!');
}

// Animación suave para el progreso
document.addEventListener('DOMContentLoaded', function() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = '10%';
        }, 1000);
    }
});

// Funciones adicionales para futuras expansiones
const ProjectManager = {
    // Sistema de progreso del usuario
    userProgress: {
        currentModule: 1,
        currentLesson: 1,
        completedLessons: [],
        totalScore: 0
    },

    // Guardar progreso (preparado para localStorage en futuro)
    saveProgress: function() {
        // Aquí puedes implementar guardado local o en servidor
        console.log('Progreso guardado:', this.userProgress);
    },

    // Cargar progreso
    loadProgress: function() {
        // Cargar desde localStorage o servidor
        console.log('Progreso cargado');
    },

    // Actualizar barra de progreso
    updateProgressBar: function(percentage) {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    }
};