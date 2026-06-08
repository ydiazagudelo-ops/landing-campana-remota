# landing-campana-remota

![Validacion de Landing Page Politica](https://github.com/ydiazagudelo-ops/landing-campana-remota/actions/workflows/ci.yml/badge.svg?branch=master)

## Actualización remota de prueba

---

## 📄 Documentación Técnica del Flujo de Integración Continua (CI)

Este proyecto cuenta con un sistema de validación automatizada mediante **GitHub Actions** para asegurar la calidad y la estructura mínima de la Landing Page antes de realizar cualquier integración.

### ⚙️ Características del Workflow
* **Nombre del flujo:** Validacion de Landing Page Politica
* **Desencadenadores (Triggers):** Se ejecuta automáticamente ante cualquier evento de `push` o `pull_request` dirigido a la rama `master`.
* **Entorno de ejecución:** Servidor virtual con la última versión de Ubuntu (`ubuntu-latest`).

### 🛠️ Validaciones Automatizadas
El archivo de configuración `.github/workflows/ci.yml` realiza los siguientes pasos de forma estricta:
1. **Clonación del Repositorio:** Descarga el código fuente en el entorno virtual utilizando la acción oficial `actions/checkout@v4`.
2. **Verificación de Estructura Básica:** Comprueba mediante comandos nativos de Linux (`test -f`) la existencia obligatoria de los siguientes archivos en la raíz del proyecto:
   * `index.html` (Estructura de contenido)
   * `README.md` (Documentación del proyecto)
   * `style.css` (Estilos y diseño visual)
   * `script.js` (Lógica e interactividad)