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