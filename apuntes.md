# Vue.js: De cero a experto
+ **URL Curso**: https://www.udemy.com/course/vuejs-fh/
+ **URL Repositorio**: https://github.com/petrix12/vue2021.git

## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **vue2021**.
    + **Description**: Proyecto para seguir el curso de Vue.js: De cero a experto, de Fernando Herrera en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Commit 000: Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/vue2021.git
    + $ git push -u origin main

## Sección 01: Introducción

### Video 001. Introducción
**Contenido:** Conocimientos previos y que esperar del curso.
1. Commit Video 001:
    + $ git add .
    + $ git commit -m "Commit 001: Introducción"
    + $ git push -u origin main

### Video 002. ¿Cómo funciona el curso?
**Contenido:** Detalles y recomendaciones sobre el funcionamiento del curso.
1. Commit Video 002:
    + $ git add .
    + $ git commit -m "Commit 002: ¿Cómo funciona el curso?"
    + $ git push -u origin main

### Video 003. ¿Cómo hacer preguntas?
**Contenido:** Políticas del curso sobre como formular preguntas.
1. Commit Video 003:
    + $ git add .
    + $ git commit -m "Commit 003: ¿Cómo hacer preguntas?"
    + $ git push -u origin main

### Video 004. Instalaciones recomendadas y obligatorias
+ [Instalaciones recomendadas](https://gist.github.com/Klerith/c994a32ad825d4e87b9efbfb7174bcaa)
1. Instalaciones recomendadas:
    + [Node Js](https://nodejs.org)
    + [Visual Studio Code](https://code.visualstudio.com/download)
    + [Google Chrome](https://www.google.com/intl/es/chrome/?brand=UUXU&gclid=CjwKCAjwndCKBhAkEiwAgSDKQVlgpc0j06KtDtMn3gg-cCI_2KuhgL-PoRBJXLhg93KfoAmqVbPeLBoCkSwQAvD_BwE&gclsrc=aw.ds)
    + [Vue CLI](https://cli.vuejs.org/guide/installation.html)
    + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
    + [Postman](https://www.postman.com/downloads)
2. Extensiones de VSCode:
    + Activitus Bar:
        + Gruntfuggly
        + Save some real estate by recreating the activity bar buttons on the status bar
    + TypeScript importer:
        + pmneo
        + Automatically searches for TypeScript definitions in workspace files and provides all known symbols as completion item to allow code completion.
3. Extensiones de Chrome
    + Vue DevTools
    + Vue DevTools Beta
    + Json Viewer Awesome
4. Instalación de **Vue CLI**:
    + Abrir terminal como administrador.
    + $ npm install -g @vue/cli
5. Instalación de Vetur en VSCode:
    + Abrir VSCode.
    + Ir a la página de [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).
    + Presionar el botón **Install**.
    + Seguir el resto de las instrucciones de forma intuitiva.
6. Instalar Bracket Pair Colorizer 2 en VSCode:
    + Abrir VSCode.
    + Ir a la página de [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2).
    + Presionar el botón **Install**.
    + Una vez instalado, para configurar los colores de las llaves, ir a **Ver > Paleta de comandos...**.
    + Ubicar **Open Settings (JEISON)** y establecer la configuración de colores de llaves anexando en **C:\Users\bazop\AppData\Roaming\Code\User\settings.json**:
        ```json
        "bracket-pair-colorizer-2.colors": [
            "#fafafa",
            "#9F51B6",
            "#F7C244",
            "#F07850",
            "#9CDD29",
            "#0098FA"
        ],
        ```
7. Consultar las versiones de los programas:
    + Node Js:
        + $ node --version
    + Vue CLI:
        + $ vue --version
8. Commit Video 004:
    + $ git add .
    + $ git commit -m "Commit 004: Instalaciones recomendadas y obligatorias"
    + $ git push -u origin main

## Sección 2: Reforzamiento de JavaScript

### Video 005. Introducción a la sección
**Contenido**: Importancia de reforzar JavaScript.
1. Commit Video 005:
    + $ git add .
    + $ git commit -m "Commit 005: Importancia de reforzar JavaScript"
    + $ git push -u origin main

### Nota 006. Temas puntuales de la sección
1. Puntos importantes a reforzar en JavaScript: 
    + Constantes, let y var
    + Template literals
    + Objetos
    + Arreglos
    + Funciones
    + Funciones de flecha
    + Desestructuración de objetos y arreglos
    + Importaciones y exportaciones
    + Promesas
    + Argumentos a promesas
    + Valor y referencia
    + Async y Await
    + Peticiones HTTP
    + Ternarios
    + Null check

2. Commit Video 006:
    + $ git add .
    + $ git commit -m "Commit 006: Temas puntuales de la sección"
    + $ git push -u origin main

### Video 007. Inicio de proyecto - Bases de JavaScript
1. Descargar repositorio: https://github.com/Klerith/javascript-intro
2. Ir a la raíz del proyecto y descargar todos los modulos de Node Js requeridos:
    + $ npm i
3. Levantar un servidor para el proyecto:
    + $ npm start
4. Ir en el navegador a las **Herramientas para desarrolladores** y luego a **Console**.
5. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    console.log('Soluciones++')
    ```
6. Commit Video 007:
    + $ git add .
    + $ git commit -m "Commit 007: Inicio de proyecto - Bases de JavaScript"
    + $ git push -u origin main

### Video 008. Let vs Var vs Const
+ **Nota**: No usar **var** en JavaScript, en su lugar utilizar **let** y **const**.
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const nombre = 'Tony'
    const apellido = 'Stark'

    console.log(nombre, apellido)

    if(true){
        let nombre = ''
        nombre = 'Peter'
    }

    console.log(nombre)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\01-const-let.js**.
2. Commit Video 008:
    + $ git add .
    + $ git commit -m "Commit 008: Let vs Var vs Const"
    + $ git push -u origin main

### Video 009. Template literals
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const nombre = 'Leticia'
    const apellido = 'Rodríguez'

    const nombreCompleto = `${ nombre } ${ apellido }`

    console.log(nombreCompleto)

    console.log(`Resultado: ${ 7 + 18 }`)

    function getSaludo(nombre){
        return 'Hola ' + nombre
    }

    console.log(`Este es un texto: ${ getSaludo(nombre) }`)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\02-template.js**.
2. Commit Video 009:
    + $ git add .
    + $ git commit -m "Commit 009: Template literals"
    + $ git push -u origin main

### Video 010. Object literal
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const persona = {
        nombre: 'Isabel',
        apellido: 'Bazó',
        edad: 130,
        direccion: {
            ciudad: 'Roma',
            zip: 525545,
            lat: 14.5777,
            lng: 3.99988
        }
    }

    const persona2 = persona

    persona2.nombre = 'María'

    const persona3 = { ...persona }

    persona3.nombre = 'Rebeca'

    console.log(persona)
    console.log(persona2)
    console.log(persona3)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\03-objets.js**.
2. Commit Video 010:
    + $ git add .
    + $ git commit -m "Commit 010: Object literal"
    + $ git push -u origin main

### Video 011. Arrays
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const arreglo1 = []
    const arreglo2 = new Array()
    /* la forma en que se definieron los arreglos 1 y 2 son equivalentes */

    const arreglo3 = [1, 2, 3, 4]
    // agregar un elemento al arreglo:
    arreglo3.push(5)

    const arreglo4 = [ ...arreglo3 ]
    arreglo4.push(6)

    const arreglo5 = arreglo4.map(function(n){
        // return 1
        return n * 2
    })

    console.log(arreglo1)
    console.log(arreglo2)
    console.log(arreglo3)
    console.log(arreglo4)
    console.log(arreglo5)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\04-arrays.js**.
2. Commit Video 011:
    + $ git add .
    + $ git commit -m "Commit 011: Arrays"
    + $ git push -u origin main

### Video 012. Functions
+ [Array.prototype.some](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    // Función tradicional
    function saludar1(nombre){
        return `Hola ${ nombre }`
    }

    // Función anónima
    const saludar2 = function(nombre){
        return `Hola ${ nombre }`
    }

    // Función flecha
    const saludar3 = (nombre) => `Hola ${ nombre }`

    const nombre = 'Rosa'

    // Otro ejemplo de función flecha
    const getUser = () => ({ 
        uid: 'ABC123', 
        username: 'Guillermo007' 
    })

    const heroes = [
        {
            id: 1,
            name: 'Batman'
        },
        {
            id: 2,
            name: 'Superman'       
        }
    ]

    const existe = heroes.some((heroe) => heroe.id === 1)

    console.log(saludar1(nombre))
    console.log(saludar2(nombre))
    console.log(saludar3(nombre))
    console.log(getUser())
    console.log(existe)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\06-functions1.js**.
2. Commit Video 012:
    + $ git add .
    + $ git commit -m "Commit 012: Functions"
    + $ git push -u origin main

### Video 013. Functions - Segunda Parte
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const heroes = [
        {
            id: 1,
            name: 'Batman'
        },
        {
            id: 2,
            name: 'Superman'       
        }
    ]

    const existe = heroes.find((heroe) => heroe.id === 1)

    // Desestructurado
    const { id, name } = heroes.find((heroe) => heroe.id === 2)

    console.log(existe.name)
    console.log(id)
    console.log(name)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\06-functions2.js**.
2. Commit Video 013:
    + $ git add .
    + $ git commit -m "Commit 013: Functions - Segunda Parte"
    + $ git push -u origin main

### Video 014. Desestructuración de objetos
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const person = {
        name: 'Tony',
        age: 45,
        codeName: 'Ironman',
        power1: 'Dinero'
    }

    console.log(person.name)
    console.log(person.age)
    console.log(person.codeName)

    // Desestructurando el objeto persona
    const { age, name, codeName, power1 = 'No tiene', power2 = 'No tiene' } = person

    console.log(name)
    console.log(age)
    console.log(codeName)
    console.log(power1)
    console.log(power2)

    // Otro ejemplo de desestructuración
    const createHero = (person) => {
        const { age, name, codeName, power } = person
        return {
            id: 11639889,
            name: name,
            age: age,
            codeName: codeName,
            power: power
        }
    }
    console.log(createHero(person))

    // Esta función es equivalente a la anterior
    const createHero2 = ({ age, name, codeName, power }) => {
        return {
            id: 11639889,
            name,
            age,
            codeName,
            power
        }
    }
    console.log(createHero2(person))

    // Esta función es equivalente a la anterior
    const createHero3 = ({ age, name, codeName, power }) => ({id: 11639889, name, age, codeName, power})
    console.log(createHero3(person))

    // Esta función es equivalente a la anterior
    const createHero4 = ({ age, name: nombre, codeName, power }) => ({id: 11639889, nombre, age, codeName, power})
    console.log(createHero4(person))
    ```
    + Guardar este archivo como: **01bases-js\src\bases\07-deses-obj.js**.
2. Commit Video 014:
    + $ git add .
    + $ git commit -m "Commit 014: Desestructuración de objetos"
    + $ git push -u origin main

### Video 015. Desestructuración de Arreglos
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const characters = ['Goku', 'Vegeta', 'Trunks']

    const goku = characters[0]
    const trunks = characters[2]

    console.log(goku, trunks)

    // Desestructurar el arreglo characters
    const [g, v, t, k = 'Sin valor'] = characters

    console.log(g, v, t, k)

    // Si quiero desestructurar solo el 3er elemento
    const [, , e3] = characters
    console.log(e3)

    // Otro ejemplo
    const returnArray = () => {
        return ['ABC', 123]
    }

    const [letters, numbers] = returnArray()

    console.log(letters, numbers)

    // Otro ejemplo más
    const returnArray2 = (arr) => {
        return [arr[0], arr[1]]
    }

    const [letters2, numbers2] = returnArray2(['ABC', 123])

    console.log(letters2, numbers2)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\08-deses-arr.js**.
2. Commit Video 015:
    + $ git add .
    + $ git commit -m "Commit 015: Desestructuración de Arreglos"
    + $ git push -u origin main

### Video 016. Importaciones y exportaciones
1. Modificar el archivo **01bases-js\src\data\heroes.js**:
    ```js
    const heroes = [
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        },
    ];

    export const owners = ['DC','Marvel'];

    export default heroes;
    ```
2. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    import {owners} from './data/heroes'
    console.log(owners)

    // Importación por defecto
    import superHeroes from './data/heroes'
    console.log(superHeroes)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\09-imp-exp1.js**.
3. Commit Video 016:
    + $ git add .
    + $ git commit -m "Commit 016: Importaciones y exportaciones"
    + $ git push -u origin main

### Video 017. Exportar funciones - Tarea
+ [Array.prototype.filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
+ [Array.prototype.find](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    // Importación por defecto
    import superHeroes from './data/heroes'
    console.log(superHeroes)

    // getHeroById(id)  find
    const getHeroById = (id) => superHeroes.find(hero => hero.id === id)
    console.log(getHeroById(2))

    // getHeroByOwner('DC' o 'Marvel') filter
    const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
    console.log(getHeroByOwner('DC'))
    ```
    + Guardar este archivo como: **01bases-js\src\bases\10-imp-exp2.js**.
2. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    // Importación por defecto
    import superHeroes from '../data/heroes'
    console.log(superHeroes)

    // getHeroById(id)  find
    export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)
    //console.log(getHeroById(2))

    // getHeroByOwner('DC' o 'Marvel') filter
    export const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
    //console.log(getHeroByOwner('DC'))
    ```
    + Guardar este archivo como: **01bases-js\src\bases\11-imp-exp3.js**.
3. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    import { getHeroById, getHeroByOwner } from './bases/11-imp-exp3'

    console.log(getHeroById(2))
    console.log(getHeroByOwner('Marvel'))
    ```
    + Guardar este archivo como: **01bases-js\src\bases\12-imp-exp4.js**.
4. Commit Video 018:
    + $ git add .
    + $ git commit -m "Commit 018: Exportar funciones - Tarea"
    + $ git push -u origin main

### Video 018. Promesas



### Video 019. Argumentos a las promesas
### Video 020. Fetch API
### Video 021. Axios
### Video 022. Async - Await
### Video 023. Async - Await - Aplicado
### Video 024. Ternarios y null check
### Video 025. Código fuente de la sección

    ```js
    ```