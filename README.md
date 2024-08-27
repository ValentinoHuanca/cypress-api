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
NOTA:los casos se ubican en la ruta cypress/e2e/tests/API-tests/nameTest.cy.js

1. **Chrome**:
    ```
    npm run test-reporter-chrome **/*/<nameTest>
    ````
2. **Firefox**:
    ```
    npm run test-reporter-firefox **/*/<nameTest>
    ````    
3. **Edge**:
    ```
    npm run test-reporter-edge **/*/<nameTest>
    ````

estos comando se deben ejecutar en la terminal, generaran cada uno tres informes(uno en html,json y xml) en distintas rutas(cypress/junit-report y mochawesome-report)

NOTA:para ejecutar los casos de la branch orders, se debe primero generar el token de acceso, esto se puede hacer en la branch APIauthentication, ejecutando el caso atrabes de cypress, una vez generado se debe remplazar el token antiguo por el token recien generado, en la parte de cypress.env en el archivo cypress.config.js, el token tiene una valides de 7 dias

## Documentacion

https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md