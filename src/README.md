[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=53&pause=1000&center=true&vCenter=true&width=460&lines=Urban+Clothes+)](https://git.io/typing-svg)

# Proyecto de eCommerce de Indumentaria (React-Vite)

## Descripción del Proyecto

Proyecto desarrollado con **React, Vite, Material UI y TailwindCSS** para un **eCommerce de indumentaria** que simula una tienda en línea con funcionalidades de autenticación, carrito de compras, CRUD de productos, búsqueda, paginación y optimización para despliegue.


![alt text](<Screenshot 2024-11-15 at 21-34-40 Urban Clothes- eCommerce Website.png>)

## Características Principales

- **Catálogo de productos**: Visualización de una variedad de productos  con detalles como nombre, precio e imagen y categoria.
- **Búsqueda y filtros**: Los usuarios pueden buscar productos por categorías, tallas y rangos de precio.
- **Carrito de compras interactivo**: Agregar productos al carrito, actualizar el total en tiempo real, y mantener los datos del carrito utilizando **localStorage** para que persistan entre sesiones.
- **Sistema de navegación**: Cambio dinámico en el menú de navegación para mostrar el perfil del usuario si está logueado.
- **Responsividad**: Diseño adaptable a diferentes dispositivos (móviles, tablets y escritorio) .

## 🚀 Tecnologías Utilizadas
![lenguajes utilizados](<ChatGPT Image 20 jul 2025, 02_11_10 p.m.>)


React

Vite

TailwindCSS

Material UI

React Router DOM

MockAPI

React Icons

React Toastify

React Helmet

## Uso de JavaScript

JavaScript es clave para la interacción y dinamismo en la página. Algunas funcionalidades importantes incluyen:

- **Carrito de compras**: Los productos se pueden agregar o eliminar del carrito, y el total se actualiza en tiempo real. Los datos se almacenan en `localStorage`, permitiendo que los usuarios conserven su carrito entre sesiones.
- **Filtros dinámicos**: El catálogo de productos se filtra sin necesidad de recargar la página. Los filtros aplican por categorías, colores, tallas y precio.
- **Validación de formularios**: JavaScript se utiliza para validar formularios de registro e inicio de sesión antes de ser enviados.
- **Manipulación del DOM**: Se implementa para mostrar/ocultar elementos según las acciones del usuario, como el estado de logueo o el carrito de compras.

## Estructura del Proyecto

1. **HTML**: Estructura base de todas las páginas del eCommerce (catálogo, carrito, registro, login, etc.).
2. **CSS**: Estilos personalizados ubicados en la carpeta `assets`, donde se definen los colores, fuentes y el diseño responsive.
3. **JavaScript**: Archivo principal donde se maneja la interacción del usuario, desde el carrito hasta la búsqueda y filtrado de productos.
4. **Imágenes**: Ubicadas en la carpeta `public`, todas las imágenes de productos y diseño se cargan desde aquí.

## Instalación y Configuración

1. **Clonar el repositorio**:
    ```bash
    git clone 
    ```

2. **Abrir en tu navegador**:
    Abre el archivo `index.html` en cualquier navegador moderno para ver el proyecto en funcionamiento.

3. **Configurar imágenes**:
    Asegúrate de que todas las imágenes de productos estén en la carpeta `public` para su correcta visualización.

## Próximas Mejoras

- **Agregar más filtros**: Implementar más opciones de filtros avanzados, como estilos y temporadas.
- **Integración con API**: Conectar con una API para obtener productos y usuarios de manera dinámica.
- **Mejoras en la accesibilidad**: Asegurar que el sitio sea completamente accesible para usuarios con discapacidades visuales y motrices.

## Contribuciones

Este proyecto está abierto a contribuciones. Si deseas colaborar, crea un **pull request** o abre un **issue** con sugerencias.

## Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.


🛒 E-Commerce App con React + Vite
Proyecto desarrollado con React, Vite, Material UI y TailwindCSS que simula una tienda en línea con funcionalidades de autenticación, carrito de compras, CRUD de productos, búsqueda, paginación y optimización para despliegue.

🚀 Tecnologías utilizadas
React

Vite

TailwindCSS

Material UI

React Router DOM

MockAPI

React Icons

React Toastify

React Helmet

✅ Requerimientos Implementados
🔐 Requerimiento #1: Gestión del Carrito y Autenticación de Usuarios
🛍️ Carrito de Compras (Context API)
Implementación de CarritoContext para gestionar los productos.

Funciones: agregar, eliminar y vaciar el carrito.

Estado global mantenido con useContext.

👤 Autenticación de Usuarios
Creación de AuthContext para controlar la sesión.

Login simulado utilizando localStorage.

Rutas protegidas para asegurar acceso solo a usuarios autenticados (por ejemplo, el carrito o sección de administración).

🛠️ Requerimiento #2: CRUD de Productos con MockAPI
➕ Formulario para Agregar Productos
Formulario controlado con useState.

Validaciones:

Nombre obligatorio.

Precio mayor a 0.

Descripción de al menos 10 caracteres.

Envío de datos a MockAPI mediante POST.

✏️ Edición y Eliminación de Productos
Edición de productos con PUT a MockAPI.

Eliminación con confirmación mediante modal.

Manejo de errores y mensajes al usuario con React Toastify.

⚠️ Manejo de Errores
Mensajes de error en pantalla si falla la API.

Gestión de estados de carga y error en la obtención de productos.

📱 Requerimiento #3: Optimización de Diseño y Responsividad
📐 Diseño Responsivo
Sistema de grillas responsivo utilizando TailwindCSS (en reemplazo de Bootstrap).

Estilos personalizados con Material UI y Tailwind para un diseño moderno.

🎨 Interactividad
Uso de React Icons en botones y elementos.

Notificaciones de éxito/error con React Toastify.

♿ SEO y Accesibilidad
Uso de React Helmet para optimizar <title> y <meta>.

Atributos ARIA para mejorar accesibilidad.

🔍 Requerimiento #4: Funcionalidades de Búsqueda y Paginación
🔎 Barra de Búsqueda
Filtro dinámico por nombre o categoría.

Resultados actualizados en tiempo real.

📄 Paginación
División de productos en páginas.

Navegación entre páginas con botones y mejor experiencia de usuario.

🚢 Requerimiento #5: Preparación para el Despliegue
🧪 Pruebas de Compatibilidad
Funcionalidad comprobada en:

Móviles

Tablets

Escritorio

⚙️ Optimización del Código
Limpieza de código innecesario.

Buena gestión del estado global.

📝 Documentación Básica
Incluye este README.md con:

Tecnologías utilizadas.

Requerimientos implementados.

Instrucciones de instalación.

🧾 Instalación y uso
bash
Copiar
Editar
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
📦 Despliegue

