# Promart Store Challenge

Este es un proyecto desarrollado con Vite, React, Typescript, ESLint y Prettier para el reto técnico de Promart Store.

[DEMO](https://promart-store-chal.web.app)

![My Image](https://i.ibb.co/3crQqDh/imagen.png)

- Consultar un acceso : https://fakestoreapi.com/docs

### Descripción del proyecto

Este proyecto tiene como objetivo desarrollar una aplicación web que permita al usuario buscar productos de Promart y agregarlos al carrito de compras. La aplicación también permite al usuario ver el detalle de un producto y modificar la cantidad de unidades que desea agregar al carrito.

### Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar todas las dependencias del proyecto.
3. Ejecutar `npm run dev` para ejecutar el servidor local de desarrollo.
4. El server estará corriendo en `http://localhost:5173`.

### Estructura general del proyecto

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

- `src/components`: En esta carpeta se encuentran todos los componentes de la aplicación.
- `src/interfaces`: En esta carpeta se encuentran todas las interfaces utilizadas en el proyecto.
- `src/pages`: En esta carpeta se encuentran las páginas de la aplicación.
- `src/services`: En esta carpeta se encuentran todos los servicios utilizados en la aplicación.
- `src/utils`: En esta carpeta se encuentran todas las funciones de utilidad utilizadas en la aplicación.

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
- Configura lógica de stock
- Otros
