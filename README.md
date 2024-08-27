# Cypress-API
Bienvenido a mi muestra de conocimientos en cypress, aplicando mis conocimientos en constante crecimiento.
A continuacion se explicara como ejecutar los diferentes casos de prueba en el ambito del testing de APIs

## Branch

En este caso cada branch trata una funcionalidad:
* status
* books
* orders

## Instalar dependencias

Ejecute el comando "npm i" y "npm i --legacy-peer-deps"()

## Abrir cypress

Se debe escribir en la terminal "npm test"

## Ejecutar pruebas en terminal
Se puede ejecutar en tres navegadores chrome, firefox y edge.
NOTA:los casos se ubican en la ruta cypress/e2e/tests/nameTest.cy.js

1. **Chrome**:
    ```
    npm run test-reporter-edge **/*/<nameTest.cy.js>
    ````
2. **Firefox**:
    ```
    npm run test-reporter-firefox **/*/<nameTest.cy.js>
    ````    
3. **Edge**:
    ```
    npm run test-reporter-edge **/*/<nameTest.cy.js>
    ````

estos comando se deben ejecutar en la terminal, generaran cada uno tres informes(uno en html,json y xml) en distintas rutas(cypress/junit-report y mochawesome-report)