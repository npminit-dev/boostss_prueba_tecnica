## Instrucciones

**INSTALACION** ⬇️

En el directorio donde se quiera instalar el proyecto:

 1. **Clonar repo:** `git clone https://github.com/npminit-dev/boostss_prueba_tecnica.git`
 2. **Moverse al directorio:** `cd boostss_prueba_tecnica`
 3. **Instalar dependencias:** `npm install`

---
 
 **EJECUTAR** 🚀
		 

 - **Build de produccion en servidor local:** `npm run preview`
 - **Modo de desarrollo**: `npm run buildtw` (esto ejecuta el compilador de *Tailwind* en watchmode si se desea) y luego `npm run dev`
 - **Ejecutar tests**: `npm run test`



## **Detalles de la prueba**

**Sobre la UI 💻:** *Savory Haven* es un restaurante de primera calidad conocida por su calidad y tradición gastronómica. En la UI he intentado reflejar esa filosofía, con una paleta de colores sofisticada y elegante, fuentes con un estilo clásico y a la vez suficientemente moderna para lucir bien en una web de hoy en día. Hago uso de principios como la regla 60-30-10, la jerarquía visual y el uso de botones 'Call-to-action' cuando se requiere.

**Sobre las buenas prácticas 👌:** He intentado aplicar todas las buenas practicas posibles para el diseño y codificación en la web en general y en React en particular: *HTML* semántico, meta-descripciones, SEO, accesibilidad, componentes reutilizables y atómicos, custom-hooks, gestión eficiente del estado de la aplicación, principios DRY y demás.

**Sobre el rendimiento 🔍:** La aplicación intenta ser lo mas eficiente posible, usando técnicas de mejora del rendimiento como la optimización y compresión de imágenes, uso de formatos óptimos para la web, relaciones de aspecto y tamaños adecuados, carga diferida de componentes con `React.lazy`, carga diferida de imágenes, carga diferida de elementos en listas largas, etc. 

![enter image description here](https://i.ibb.co/CKwWWgQ/Captura-de-pantalla-83.png)

**Sobre los tests 🧪:** He creado unos tests para comprobar la validación y la reactividad del formulario, se que no lo pidieron explícitamente pero ya había hecho algunos tests antes y creo que puede sumar 😃. En este caso he usado una herramienta nueva para mi llamada *Vitest*, en conjunto con *Jest*, *JSDom* y *React-Testing-Library*.

## Paquetes utilizados

    ├── @testing-library/dom@10.4.0
    ├── @testing-library/react@16.0.0
    ├── @testing-library/user-event@14.5.2
    ├── @types/lowdb@1.0.15
    ├── @types/react-dom@18.3.0
    ├── @types/react@18.3.3
    ├── @types/testing-library__user-event@4.1.1
    ├── @types/uuid@10.0.0
    ├── @vitejs/plugin-react@3.1.0
    ├── cssnano@7.0.4
    ├── jsdom@24.1.1
    ├── lowdb@7.0.1
    ├── postcss@8.4.40
    ├── react-dom@18.3.1
    ├── react-icons@5.2.1
    ├── react-intersection-observer@9.13.0
    ├── react-router-dom@6.25.1
    ├── react@18.3.1
    ├── tailwindcss@3.4.7
    ├── ts-node@10.9.2
    ├── typescript@4.9.5
    ├── uuid@10.0.0
    ├── vite@4.5.3
    └── vitest@2.0.5



Y eso es todo 😊 un saludo y buen fin de semana! 🍻.
