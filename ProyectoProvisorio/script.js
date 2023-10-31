document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');
    const content = document.getElementById('contenido');

    // Función para abrir el menú
    function openMenu() {
        menu.classList.add('show');
        document.addEventListener('click', closeMenuOutside);
    }

    // Función para cerrar el menú
    function closeMenu() {
        menu.classList.remove('show');
        document.removeEventListener('click', closeMenuOutside);
    }

    // Función para cerrar el menú cuando se hace clic fuera de él
    function closeMenuOutside(event) {
        if (!menu.contains(event.target) && event.target !== toggleMenuButton) {
            closeMenu();
        }
    }

    // Abrir o cerrar el menú cuando se hace clic en el botón
    toggleMenuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Evitar que el clic llegue al documento
        if (menu.classList.contains('show')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Cerrar el menú al cargar la página
    closeMenu();

    // Evitar que el menú se cierre al hacer clic en el contenido
    content.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});