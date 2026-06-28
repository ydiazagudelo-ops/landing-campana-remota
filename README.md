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


   ---

## 🔍 FASE 1: Diagnóstico del Repositorio y Gestión de Riesgos

Tras analizar el estado actual del repositorio `landing-campana-remota`, se identificaron los siguientes puntos críticos:

*   **Flujo Actual:** Trabajo directo sobre la rama principal (`master`), exponiendo el código de producción a cambios inestables sin fases de pruebas previas.
*   **Riesgos Identificados:** 
    1. Modificaciones accidentales o sobreescritura de código funcional mediante `git push --force`.
    2. Falta de estandarización al reportar errores o solicitar integraciones de nuevas características.
    3. Ausencia de un filtro de revisión humana antes de realizar mezclas (*merges*).
*   **Oportunidades de Mejoras:** Implementar el modelo de gobernanza *GitHub Flow*, activar reglas estrictas de protección para la rama `master`, estandarizar el repositorio mediante plantillas automatizadas (`Templates`) y definir roles claros de desarrollo.

## 👥 FASE 5: Definición de Roles Estructurados

Para garantizar la correcta gobernanza del proyecto de manera individual, asumo los siguientes roles simulados:

| Rol | Responsable | Funciones Clave |
| :--- | :--- | :--- |
| **Líder Técnico (Tech Lead)** | Yuri Díaz | Configura las reglas de protección, administra el repositorio, diseña los flujos de CI y autoriza los despliegues finales. |
| **Desarrollador (Developer)** | Yuri Díaz | Crea las ramas de trabajo, implementa los cambios de código e interactividad en HTML/CSS/JS y documenta el progreso. |
| **Revisor (Reviewer)** | GitHub System / Autorevisión | Valida la calidad sintáctica del código mediante GitHub Actions y audita los Pull Requests creados. |

