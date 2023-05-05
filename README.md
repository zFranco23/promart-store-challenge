# Promart Store Challenge

Este es un proyecto desarrollado con Vite, React, Typescript, ESLint y Prettier para el reto técnico de Promart Store.

[DEMO](https://promart-store-chal.web.app)

![My Image](https://i.ibb.co/3crQqDh/imagen.png)

- Consultar un acceso : https://fakestoreapi.com/docs

### Descripción del proyecto

Este proyecto tiene como objetivo desarrollar una aplicación web que permita agregar products al carrito de compras con una cantidad determinada. La aplicación también permite al usuario agregar/eliminar productos desde el carrito hasta antes del checkout.

Se escogió la libreria de React para crear una interfaz rápida y robusta, como manejador de estado global usamos Redux junto redux-toolkit.
Para el estilo del codigo usamos Prettier + Eslint + Prettier.

### Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar todas las dependencias del proyecto.
4. Crear un archivo env y agregar tu base url, ejemplo : `VITE_BASE_API_URL = https://fakestoreapi.com`
5. Ejecutar `npm run dev` para ejecutar el servidor local de desarrollo.
6. El server estará corriendo en `http://localhost:5173`.

### Estructura general del proyecto

Para la estructura del proyect se escogió una arquitectura basada en modulos, que nos permitirá escalar en base a nuevos features
que pueda tener el ecommerce.

    .
    ├── assets                   # Archivos estáticos
    ├── common                   # Recursos comunes al proyecto
    ├── entities                 # Entidades y tipos
    ├── environment              # Entorno
    ├── http                     # Módulo http
    ├── hooks                    # Configuración de hooks
    ├── router                   # Configuración del router
    ├── store                    # Configuración estado global
    ├── modules                  # Modulos de la aplicación
    └── _tests__

### Tecnologías utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- Vite: Manejo del entorno de desarrollo.
- React: Construcción de la interfaz de usuario.
- Redux/RTK: Manejo del estado global.
- Typescript: Tipificación de todo el proyecto.
- ESLint: Linting del código.
- Prettier: Formateo y estilo del código.
- Firebase: Hosting.
- Styled-components: Framework css
- Tailwind: Framework css
- Jest + Enzyme : Pruebas unitarias.

### Retos futuros

- Integración con backend
- Validación de la sesión (refrescar token/cookie)
- Configura lógica de stock
- Otros
