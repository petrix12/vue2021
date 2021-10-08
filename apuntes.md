# Vue.js: De cero a experto
+ **URL Curso**: https://www.udemy.com/course/vuejs-fh/
+ **URL Repositorio**: https://github.com/petrix12/vue2021.git
+ **URL App en producción de 04pokemon**: https://solucionespp-pokemon.netlify.app

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
+ **Contenido:** Conocimientos previos y que esperar del curso.
1. Commit Video 001:
    + $ git add .
    + $ git commit -m "Commit 001: Introducción"
    + $ git push -u origin main

### Video 002. ¿Cómo funciona el curso?
+ **Contenido:** Detalles y recomendaciones sobre el funcionamiento del curso.
1. Commit Video 002:
    + $ git add .
    + $ git commit -m "Commit 002: ¿Cómo funciona el curso?"
    + $ git push -u origin main

### Video 003. ¿Cómo hacer preguntas?
+ **Contenido:** Políticas del curso sobre como formular preguntas.
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

## Sección 02: Reforzamiento de JavaScript

### Video 005. Introducción a la sección
+ **Contenido**: Importancia de reforzar JavaScript.
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
    //console.log(superHeroes)

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
4. Commit Video 017:
    + $ git add .
    + $ git commit -m "Commit 017: Exportar funciones - Tarea"
    + $ git push -u origin main

### Video 018. Promesas
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    console.log('Inicio')

    new Promise((resolve, reject) => {
        console.log('Cuerpo de la promesa')
        resolve('Promesa resuelta')
    }).then(msg => console.log(msg))

    console.log('Fin')
    ```
    + Guardar este archivo como: **01bases-js\src\bases\13-promise1.js**.
2. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    console.log('Inicio')

    new Promise((resolve, reject) => {
        console.log('Cuerpo de la promesa 1')
        reject('Promesa 1 resuelta con error')
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err))

    // La Promise2 es equivalente a Promise
    new Promise((resolve, reject) => {
        console.log('Cuerpo de la promesa 2')
        reject('Promesa 2 resuelta con error')
    })
    .then(console.log)
    .catch(console.log)

    console.log('Fin')
    ```
    + Guardar este archivo como: **01bases-js\src\bases\14-promise2.js**.
3. Commit Video 018:
    + $ git add .
    + $ git commit -m "Commit 018: Promesas"
    + $ git push -u origin main

### Video 019. Argumentos a las promesas
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    import { getHeroById } from './bases/11-imp-exp3'

    const getHeroByIdAsync = (id) => {
        return new Promise((resolve, reject) => {
            // la siguiente instrucción se ejecutará 1 seg después
            setTimeout(() => {
                const hero = getHeroById(id)
                if(hero){
                    resolve(hero)
                }else{
                    reject('El héroe no existe')
                }
                
            })
        })
    }

    getHeroByIdAsync(5)
        .then(h => {
            console.log(`El héroe es: ${ h.name }`)
        })
        .catch(console.log)
    ```
    + Guardar este archivo como: **01bases-js\src\bases\15-promise-async.js**.
2. Commit Video 019:
    + $ git add .
    + $ git commit -m "Commit 019: Argumentos a las promesas"
    + $ git push -u origin main

### Video 020. Fetch API
1. Ingresar a [Giphy](https://developers.giphy.com/) e iniciar sesión.
2. Crear una nueva aplicación.
3. Seleccionar API y dar clic en siguiente:
    + Your App Name: Prueba VueJs
    + App Description: Este es un demo para pruebas Vue Js
4. Recuperar el **API Key**: 3aYTpZYbtPMeAPMXJ3AfCcEJTVwfymFt
5. Ir a **Docs** y luego a **API Endpoints** y luego a **Random Enpoint**.
6. Obtener el **Gif URL**: api.giphy.com/v1/gifs/random
7. Construir la siguiente petición http: 'https://' + **Gif URL** + '?api_key=' + **API Key**:
    + **URL resultante**: https://api.giphy.com/v1/gifs/random?api_key=3aYTpZYbtPMeAPMXJ3AfCcEJTVwfymFt
8. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const apiKey = '3aYTpZYbtPMeAPMXJ3AfCcEJTVwfymFt'

    // Pasar como parámetro la URL resultante
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        .then(resp => {
            /* console.log(resp.json()) */
            resp.json().then(resp => console.log(resp))
        })
        .catch(e => console.log(e))

    // Esta instrucción es equivalente a la anterior
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        .then(resp => resp.json())
        .then(img => {
            console.log(img)
        })
        .catch(e => console.log(e))

    // Para obtener unicamente la data desestructuramos la respuesta json
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        .then(resp => resp.json())
        .then(({data}) => {
            console.log(data)
        })
        .catch(e => console.log(e))

    // Para obtener la imagen original
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        .then(resp => resp.json())
        .then(({data}) => {
            const {url} = data.images.original
            console.log(url)

            // Para añadir la imagen en el index.html
            const img = document.createElement('img')
            img.src = url
            document.body.append(img)
        })
        .catch(e => console.log(e))
    ```
    + Guardar este archivo como: **01bases-js\src\bases\16-fetch.js**.
9. Commit Video 020:
    + $ git add .
    + $ git commit -m "Commit 020: Fetch API"
    + $ git push -u origin main

### Video 021. Axios
+ [Axios](https://www.npmjs.com/package/axios)
1. Instalar las dependencias de Axios en la raíz del proyecto **01bases-js**:
    + $ npm i axios
2. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    import axios from 'axios'

    const apiKey = '3aYTpZYbtPMeAPMXJ3AfCcEJTVwfymFt'

    //`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

    const giphyApi = axios.create({
        baseURL: 'https://api.giphy.com/v1/gifs',
        params: {
            api_key: apiKey
        }
    })

    giphyApi.get('/random')
        .then(resp => {
            console.log(resp.data.data.images.original)
            
            // Forma 1 de obtener la imagen
            //const {url} = resp.data.data.images.original

            // Forma 2 de obtener la imagen
            //const url = resp.data.data.images.original.url
            
            // Forma 3 de obtener la imagen (la más elegante)
            const { data } = resp.data
            const { url } = data.images.original

            console.log(url)

            // Para añadir la imagen en el index.html
            const img = document.createElement('img')
            img.src = url
            document.body.append(img)
        })
    ```
   + Guardar este archivo como: **01bases-js\src\bases\17-axios.js**.
3. Commit Video 021:
    + $ git add .
    + $ git commit -m "Commit 021: Axios"
    + $ git push -u origin main

### Video 022. Async - Await
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    const miPromesa = () => {
        return new Promise( resolve => {
            setTimeout(() => {
                resolve('Tenemos un valor en la promesa')
            }, 1000)
        })
    }

    const medirTiempoAsync = async() => {
        try {
            console.log('Inicio')

            //miPromesa().then(console.log)
            const respuesta = await miPromesa()
            console.log(respuesta)

            console.log('Fin')

            return 'Fin de medir tiempo async'        
        }catch{
            // return 'catch en medirTiempoAsync'
            throw 'Error en medirTiempoAsync'
        }
    }

    medirTiempoAsync()
        .then(valor => console.log(valor))
        .catch(err => console.log('error:', err))
    ```
   + Guardar este archivo como: **01bases-js\src\bases\18-async-await-a.js**.
2. Commit Video 022:
    + $ git add .
    + $ git commit -m "Commit 022: Async - Await"
    + $ git push -u origin main

### Video 023. Async - Await - Aplicado
1. Modificar el archivo **01bases-js\src\bases\17-axios.js**:
    ```js
    import axios from 'axios'

    const apiKey = '3aYTpZYbtPMeAPMXJ3AfCcEJTVwfymFt'

    const giphyApi = axios.create({
        baseURL: 'https://api.giphy.com/v1/gifs',
        params: {
            api_key: apiKey
        }
    })

    export default giphyApi
    ```
2. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    import giphyApi from './bases/17-axios'

    const getImage = async() => {
        try {
            const { data } = (await giphyApi.get('/random')).data
            const { url } = data.images.original
            //console.log(url)

            // Para añadir la imagen en el index.html
            const img = document.createElement('img')
            img.src = url
            document.body.append(img)
        } catch (error) {
            console.log('Error en la petición', error)
            throw error
        }
    }

    getImage();
    ```
   + Guardar este archivo como: **01bases-js\src\bases\19-async-await-b.js**.
3. Commit Video 023:
    + $ git add .
    + $ git commit -m "Commit 023: Async - Await - Aplicado"
    + $ git push -u origin main

### Video 024. Ternarios y null check
1. Modificar el archivo **01bases-js\src\index.js**:
    ```js
    let firstName
    let lastName = 'Bazó'

    /* console.log(`${ firstName || 'No firstName'} ${ lastName || 'No lastName'}`) */

    const isActive = true

    const message = isActive ? 'Activo' : 'Inactivo'

    console.log(message)
    ```
   + Guardar este archivo como: **01bases-js\src\bases\20-ternary.js**.
3. Commit Video 024:
    + $ git add .
    + $ git commit -m "Commit 024: Ternarios y null check"
    + $ git push -u origin main

### Nota 025. Código fuente de la sección
+ [Repositorio del proyecto **01bases-js**](https://github.com/Klerith/javascript-intro/tree/introduccion-terminada)
1. Commit Video 025:
    + $ git add .
    + $ git commit -m "Commit 025: Código fuente de la sección"
    + $ git push -u origin main

## Sección 03: Introducción a Vue.js

### Video 026. Introducción a la sección
+ **Contenido**: Breve introducción a Vue.js.
1. Commit Video 026:
    + $ git add .
    + $ git commit -m "Commit 026: Introducción a la sección"
    + $ git push -u origin main

### Nota 027. Temas puntuales de la sección
1. Temas puntuales de la sección: 
   + Sección introductoria a Vue.js
       + En esta sección tocaremos las bases generales sobre Vue.js, creando una pequeña aplicación encapsulada y demostrando el por qué es un framework progresivo.
       + Veremos los siguientes temas de forma general:
           + Options Api
           + Métodos
           + Eventos
           + Modificadores de eventos
           + Propiedades reactivas
           + Directivas
           + v-if
           + v-show
           + v-for
           + Crear una aplicación / componente
           + Y más
       + Esta sección tiene por objetivo darnos el empujón inicial para romper la barrera de entrada al Framework de Vue.js
2. Commit Video 027:
    + $ git add .
    + $ git commit -m "Commit 027: Temas puntuales de la sección"
    + $ git push -u origin main

### Video 028. Breve introducción sobre Vue.js
+ [Framework más usados](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-web-frameworks-loved2)
+ [Empresas que usan Vue.js](https://medium.com/notonlycss/google-apple-and-other-users-of-vue-js-e4505359e5d5)
+ **Contenido**: Comparación entre **Vue.js**, **React** y **Angular**.
1. Commit Video 028:
    + $ git add .
    + $ git commit -m "Commit 028: Breve introducción sobre Vue.js"
    + $ git push -u origin main

### Video 029. Puntos interesantes de Vue.js
+ **Contenido**: Posicionamiento de **Vue.js** entre los principales framework y librerías, y principales empresas que lo usan.
1. Commit Video 029:
    + $ git add .
    + $ git commit -m "Commit 029: Puntos interesantes de Vue.js"
    + $ git push -u origin main

### Video 030. Hola Mundo - Vue.js
+ [Página de **Vue.js**](https://v3.vuejs.org)
1. Crear una nueva carpeta para el proyecto base de Vue.js llamada **02bases-vue**.
2. Crear el archivo **02bases-vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js intro</title>
    </head>
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp"></div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
    </html>
    ```
3. Crear archivo **02bases-vue\app.js**:
    ```js
    // console.log(Vue)
    const app = Vue.createApp({
        template: `
            <h1>Hola Guillermo y Rosita</h1>
            <p>Desde app.js</p>
        `
    })

    app.mount('#myApp')
    // Si fuese una clase:
    // app.mount('.myApp')
    ```
4. Commit Video 030:
    + $ git add .
    + $ git commit -m "Commit 030: Hola Mundo - Vue.js"
    + $ git push -u origin main

### Video 031. Representación declarativa
1. Modificar el archivo **02bases-vue\app.js**:
    ```js
    const app = Vue.createApp({

    })

    app.mount('#myApp')
    ```
2. Modificar el archivo **02bases-vue\index.html**:
    ```js
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js intro</title>
    </head>
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>Hola Leticia</h1>
            <p>Desde index.html {{ 24 * 88 }}</p>        
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
    </html>
    ```
3. Commit Video 031:
    + $ git add .
    + $ git commit -m "Commit 031: Representación declarativa"
    + $ git push -u origin main

### Video 032. Estado del componente - Data
1. Modificar el archivo **02bases-vue\app.js**:
    ```js
    const app = Vue.createApp({
        data(){
            return{
                message: 'Hola Isabel',
                quote: 'Soluciones++'
            }
        }
    })
    app.mount('#myApp')
    ```
2. Modificar el archivo **02bases-vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js intro</title>
    </head>
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>{{ quote }}</h1>
            <p>{{ message }}</p>        
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
    </html>
    ```
3. Commit Video 032:
    + $ git add .
    + $ git commit -m "Commit 032: Estado del componente - Data"
    + $ git push -u origin main

### Video 033. Introducción a los eventos
1. Modificar el archivo **02bases-vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js intro</title>
    </head>
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>{{ quote }}</h1>
            <p>{{ message }}</p>
            <button v-on:click="changeQuote">
                Cambiar
            </button>       
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
    </html>
    ```
2. Modificar el archivo **02bases-vue\app.js**:
    ```js
    const app = Vue.createApp({
        data(){
            return{
                message: 'Hola Isabel',
                quote: 'Soluciones++'
            }
        },
        methods: {
            changeQuote(event){
                console.log('Hola María Valentina', event)
                this.message = 'Hola Rebeca'
                this.capitalize()
            },
            capitalize(){
                this.quote = this.quote.toUpperCase()
            }
        }
    })

    app.mount('#myApp')
    ```
3. Commit Video 033:
    + $ git add .
    + $ git commit -m "Commit 033: Introducción a los eventos"
    + $ git push -u origin main

### Video 034. Directiva v-for
+ [Arreglo quote](https://gist.github.com/Klerith/2cda65e18f4575b8e70fd8a5f12c0048)
1. Crear una copia de los archivos **02bases-vue\index.html** y **02bases-vue\app.js** y en una carpeta llamada **bases**.
2. Modificar **02bases-vue\app.js**:
    ```js
    const quotes = [
        { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
        { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
        { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
        { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
        { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
        { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
    ]

    console.log(quotes)

    const app = Vue.createApp({
        data(){
            return{
                // quotes: quotes
                // La expresión comentada arriba es equivalente a la de abajo
                quotes
            }
        },
    })

    app.mount('#myApp')
    ```
3. Modificar **02bases-vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js intro</title>
    </head>
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>Frases de Batman</h1>
            <ul>
                <li v-for="quote in quotes">cita autor</li>
            </ul>      
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
    </html>
    ```
4. Commit Video 034:
    + $ git add .
    + $ git commit -m "Commit 034: Directiva v-for"
    + $ git push -u origin main

### Video 035. Indices y desestructuración dentro de v-for
1. Modificar **02bases-vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js intro</title>
    </head>
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>Frases de Batman</h1>
            <ul><!-- 
                <li v-for="quote in quotes">
                    <span>{{ quote.quote }}</span>
                    <blockquote>-{{ quote.author }}</blockquote>
                </li> -->
                <!-- La siguiente expresión es equivalente a la anteriormente comentada -->
                <!-- <li v-for="{quote, author} in quotes">
                    <span>{{ quote }}</span>
                    <blockquote>-{{ author }}</blockquote>
                </li> -->
                <!-- <li v-for="(quote, index) in quotes">
                    <span>{{ index + 1 }} {{ quote.quote }}</span>
                    <blockquote>-{{ quote.author }}</blockquote>
                </li> -->
                <li v-for="({quote, author}, index) in quotes">
                    <span>{{ index + 1 }} - {{ quote }}</span>
                    <blockquote>-{{ author }}</blockquote>
                </li>
            </ul>      
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
    </html>
    ```
2. Commit Video 035:
    + $ git add .
    + $ git commit -m "Commit 035: Indices y desestructuración dentro de v-for"
    + $ git push -u origin main

### Video 036. Directiva v-model
1. Modificar **02bases-vue\index.html**:
    ```html
    ≡
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>Frases de Batman</h1>
            <input
                type="text"
                v-model="newQuote"
                v-on:keypress="addQuote"
            >
            <p>{{ newQuote }}</p>
            <hr>
            <ul>
                <li v-for="({quote, author}, index) in quotes">
                    <span>{{ index + 1 }} - {{ quote }}</span>
                    <blockquote>-{{ author }}</blockquote>
                </li>
            </ul>      
        </div>
        ≡
    </body>
    </html>
    ```
2. Modificar **02bases-vue\app.js**:
    ```js
    ≡
    const app = Vue.createApp({
        data(){
            return{
                quotes,
                newQuote: 'Hola mundo'
            }
        },
        methods: {
            addQuote(event) {
                console.log(this.newQuote)
                console.log(event)

                if(event.key == 'Enter'){
                    this.quotes.unshift({
                        quote: this.newQuote
                    })
                }
            }
        }
    })

    app.mount('#myApp')
    ```
3. Commit Video 036:
    + $ git add .
    + $ git commit -m "Commit 036: Directiva v-model"
    + $ git push -u origin main

### Video 037. Modificadores de eventos
1. Modificar **02bases-vue\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js intro</title>
    </head>
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>Frases de Batman</h1>
            <input
                type="text"
                v-model="newQuote"
                v-on:keypress.enter="addQuote"
            >
            <p>{{ newQuote }}</p>
            <hr>
            <ul>
                <li v-for="({quote, author}, index) in quotes">
                    <span>{{ index + 1 }} - {{ quote }}</span>
                    <blockquote>-{{ author }}</blockquote>
                </li>
            </ul>      
        </div>

        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
    </html>
    ```
    + [Vue.js - Event Modifiers](https://v3.vuejs.org/guide/events.html#multiple-event-handlers)
    + Modificadores del evento **keypress**:
        + .enter
        + .tab
        + .delete (captura las teclas: **Delete** y **Backspace**)
        + .esc
        + .space
        + .up
        + .down
        + .left
        + .right
2. Modificar **02bases-vue\app.js**:
    ```js
    ≡
    const app = Vue.createApp({
        data(){
            return{
                quotes,
                newQuote: 'Hola mundo'
            }
        },
        methods: {
            addQuote() {
                console.log(this.newQuote)
                this.quotes.unshift({
                    quote: this.newQuote
                })
            }
        }
    })
    ≡
    ```
3. Commit Video 037:
    + $ git add .
    + $ git commit -m "Commit 037: Modificadores de eventos"
    + $ git push -u origin main

### Video 038. Directivas v-if y v-show
+ [Vue.js - Directiva v-show](https://v3.vuejs.org/guide/conditional.html#v-show)
1. Modificar 02bases-vue\index.html:
    ```html
    ≡
    <body>
        <!-- Vue tendrá el control de este div -->
        <div id="myApp">
            <h1>Frases de Batman</h1>
            <input
                type="text"
                v-model="newQuote"
                v-on:keypress.enter="addQuote"
            >
            <p>{{ newQuote }}</p>
            <hr>
            <ul>
                <li v-for="({quote, author}, index) in quotes">
                    <span>{{ index + 1 }} - {{ quote }}</span>
                    <!-- <blockquote v-if="author">-{{ author }}</blockquote> -->
                    <blockquote v-show="author">-{{ author }}</blockquote>
                </li>
            </ul>      
        </div>
        ≡
    </body>
    ≡
    ```
2. Commit Video 038:
    + $ git add .
    + $ git commit -m "Commit 038: Directivas v-if y v-show"
    + $ git push -u origin main

### Video 039. Recapitulación de la sección
+ **Contenido**: Resumen de lo visto en esta sección.
1. Commit Video 039:
    + $ git add .
    + $ git commit -m "Commit 039: Resumen de lo visto en esta sección"
    + $ git push -u origin main

### Nota 040. Código fuente de la sección
+ [Repositorio del autor bases de Vue.js](https://github.com/Klerith/vue-bases)
1. Commit Video 040:
    + $ git add .
    + $ git commit -m "Commit 040: Código fuente de la sección"
    + $ git push -u origin main

## Sección 04: Vue CLI - Primera aplicación real

### Video 041. Introducción a la sección
+ **Contenido**: Introducción a nuevos conceptos de Vue.js
1. Commit Video 041:
    + $ git add .
    + $ git commit -m "Commit 041: Introducción a nuevos conceptos de Vue.js"
    + $ git push -u origin main

### Nota 042. Temas puntuales de la sección
1. Temas puntuales de la sección:
    + En esta sección comenzaremos a trabajar con el Vue CLI (Command Line Interface), pero también explicaremos muchas cosas como:
        + Estructura de directorios
        + Guía de atajos de Vue.js
        + Props
        + Methods
        + Propiedades computadas
        + Componentes
        + Validaciones
        + Y más
    + Esta sección es muy importante ya que empezaremos explicando desde las bases hasta ir creciendo poco a poco, eventualmente terminaremos creando soluciones mucho más complejas, pero todo parte desde el inicio.
2. Commit Video 042:
    + $ git add .
    + $ git commit -m "Commit 042: Temas puntuales de la sección"
    + $ git push -u origin main

### Video 043. Bonus: Atajos de Vue.js
+ **Contenido**: Entrega de un pdf sobre atajos de Vue.js
1. Commit Video 043:
    + $ git add .
    + $ git commit -m "Commit 043: Atajos de Vue.js"
    + $ git push -u origin main

### Video 044. Inicio de proyecto - FundamentosApp
1. Verficar que la versión de Vue.js sea superior a 4.5.12:
    + $ vue --version
2. Crear nuevo proyecto de Vue.js:
    + $ vue create 03fundamentos
    + Seleccionar la opción: **Manually select features**.
    + Check the features needed for your project:
        + **Choose Vue version**
        + **Babel**
        + **Unit Testing**
    + Choose a version of Vue.js that you want to start the project with: **3.x**
    + Pick a unit testing solution: **Jest**
    + Where do you prefer placing config for Babel, ESLint, etc.?: **In dedicated config files**
    + Save this as a preset for future projects? **n**
3. Ejecutar proyecto:
    + $ cd 03fundamentos
    + $ cd 03fundamentos
    + $ npm run serve (También se podría utilizar yarn serve)
5. Commit Video 044:
    + $ git add .
    + $ git commit -m "Commit 044: Inicio de proyecto - FundamentosApp"
    + $ git push -u origin main

### Video 045. Estructura de directorios generada por defecto
+ **Contenido**: Estructura de un proyecto Vue.js generado con Vue CLI.
1. Commit Video 045:
    + $ git add .
    + $ git commit -m "Commit 045: Estructura de directorios generada por defecto"
    + $ git push -u origin main

### Video 046. Estructura básica del directorio SRC
+ **Contenido**: Estructura de un proyecto Vue.js generado con Vue CLI. Continuación del video anterior.
1. Commit Video 046:
    + $ git add .
    + $ git commit -m "Commit 046: Estructura básica del directorio SRC"
    + $ git push -u origin main

### Video 047. Mi primer componente
1. Modificar el archivo **03fundamentos\src\App.vue**:
    ```vue
    <template>
    <img alt="Vue logo" src="./assets/logo.png">
    <Counter />
    </template>

    <script>
    import Counter from './components/Counter.vue'
    export default {
        name: 'App',
        components: {
            Counter
        }
    }
    </script>

    <style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    </style>
    ```
2. Borrar el archivo **03fundamentos\src\components\HelloWorld.vue**.
3. Crear componente **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <h2>Contador</h2>
        <p>10</p>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
4. Commit Video 047:
    + $ git add .
    + $ git commit -m "Commit 047: Mi primer componente"
    + $ git push -u origin main

### Video 048. Estado del componente y Vue DevTools
1. Modificar **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <h2>Contador</h2>
        <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
    </template>

    <script>
    export default {
        data(){
            return {
                counter: 5
            }
        }
    }
    </script>

    <style>

    </style>
    ```
2. Commit Video 048:
    + $ git add .
    + $ git commit -m "Commit 048: Estado del componente y Vue DevTools"
    + $ git push -u origin main

### Video 049. Propiedades computadas - Computed Properties
+ [Vue.js - Computed Properties](https://v3.vuejs.org/guide/computed.html#computed-properties)
1. Modificar **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <h2>Contador</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

        <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    </template>

    <script>
    export default {
        data(){
            return {
                counter: 5
            }
        },
        methods: {
            getSquareValue(){
                console.log('getSquareValue')
                return this.counter * this.counter
            }
        },
        computed: {
            squareCounter(){
                console.log('squareCounter')
                return this.counter * this.counter
            }
        }
    }
    </script>

    <style>

    </style>
    ```
2. Commit Video 049:
    + $ git add .
    + $ git commit -m "Commit 049: Propiedades computadas - Computed Properties"
    + $ git push -u origin main

### Video 050. Incrementar y Decrementar
1. Modificar **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <h2>Contador</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <div>
            <!-- <button v-on:click="increase">+1</button>
            <button v-on:click="decrease">-1</button> -->
            <!-- Las siguientes dos líneas de código son equivalentes a las dos comentadas anteriormente -->
            <button @click="increase">+1</button>
            <button @click="decrease">-1</button>
        </div>
    </template>

    <script>
    export default {
        data(){
            return {
                counter: 5
            }
        },
        methods: {
            getSquareValue(){
                return this.counter * this.counter
            },
            increase(){
                this.counter++
            },
            decrease(){
                this.counter--
            }
        },
        computed: {
            squareCounter(){
                return this.counter * this.counter
            }
        }
    }
    </script>

    <style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
    </style>
    ```
2. Commit Video 050:
    + $ git add .
    + $ git commit -m "Commit 050: Incrementar y Decrementar"
    + $ git push -u origin main

### Video 051. Properties - Props
+ [Vue.js - Prop Types](https://v3.vuejs.org/guide/component-props.html#prop-types)
1. Modificar **03fundamentos\src\App.vue**:
    ```vue
    <template>
        <img alt="Vue logo" src="./assets/logo.png">
        <Counter title="Contador A" />
        <Counter />
    </template>
    ≡
    ```
2. Modificar **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <!-- <h2>{{ title || 'Contador' }}</h2> -->
        <h2>{{ customTitle }}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <div>
            <!-- <button v-on:click="increase">+1</button>
            <button v-on:click="decrease">-1</button> -->
            <!-- Las siguientes dos líneas de código son equivalentes a las dos comentadas anteriormente -->
            <button @click="increase">+1</button>
            <button @click="decrease">-1</button>
        </div>
    </template>

    <script>
    export default {
        props: ['title'],
        data(){
            return {
                counter: 5
            }
        },
        methods: {
            getSquareValue(){
                return this.counter * this.counter
            },
            increase(){
                this.counter++
            },
            decrease(){
                this.counter--
            }
        },
        computed: {
            squareCounter(){
                return this.counter * this.counter
            },
            customTitle(){
                /* console.log(this.title)
                return this.title */
                return this.title || 'Contador'
            }
        }
    }
    </script>
    ≡
    ```
3. Commit Video 051:
    + $ git add .
    + $ git commit -m "Commit 051: Properties - Props"
    + $ git push -u origin main

### Video 052. Diferentes formas de definir las props
1. Modificar **03fundamentos\src\App.vue**:
    ```vue
    <template>
        <img alt="Vue logo" src="./assets/logo.png">
        <Counter :start="10" />
    </template>
    ≡
    ```
2. Modificar **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <!-- <h2>{{ title || 'Contador' }}</h2> -->
        <h2>{{ customTitle }}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <div>
            <!-- <button v-on:click="increase">+1</button>
            <button v-on:click="decrease">-1</button> -->
            <!-- Las siguientes dos líneas de código son equivalentes a las dos comentadas anteriormente -->
            <button @click="increase">+1</button>
            <button @click="decrease">-1</button>
        </div>
    </template>

    <script>
    export default {
        /* props: ['title', 'start'], */
        props: {
            title: String, 
            start: {
                type: Number,
                // required: true
                default: 100
            }
        },
        data(){
            return {
                counter: this.start
            }
        },
        methods: {
            getSquareValue(){
                return this.counter * this.counter
            },
            increase(){
                this.counter++
            },
            decrease(){
                this.counter--
            }
        },
        computed: {
            squareCounter(){
                return this.counter * this.counter
            },
            customTitle(){
                /* console.log(this.title)
                return this.title */
                return this.title || 'Contador'
            }
        }
    }
    </script>
    ≡
    ```
3. Commit Video 052:
    + $ git add .
    + $ git commit -m "Commit 052: Diferentes formas de definir las props"
    + $ git push -u origin main


### Video 053. Validación de los props
+ [Vue.js - Prop Validation](https://v3.vuejs.org/guide/component-props.html#prop-validation)
1. Modificar **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <!-- <h2>{{ title || 'Contador' }}</h2> -->
        <h2>{{ customTitle }}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <div>
            <!-- <button v-on:click="increase">+1</button>
            <button v-on:click="decrease">-1</button> -->
            <!-- Las siguientes dos líneas de código son equivalentes a las dos comentadas anteriormente -->
            <button @click="increase">+1</button>
            <button @click="decrease">-1</button>
        </div>
    </template>

    <script>
    export default {
        /* props: ['title', 'start'], */
        props: {
            title: String, 
            start: {
                type: Number,
                // required: true
                default: 100,
                validator1(value){
                    return value >= 0
                }
            }
        },
        data(){
            return {
                counter: this.start
            }
        },
        methods: {
            getSquareValue(){
                return this.counter * this.counter
            },
            increase(){
                this.counter++
            },
            decrease(){
                this.counter--
            }
        },
        computed: {
            squareCounter(){
                return this.counter * this.counter
            },
            customTitle(){
                /* console.log(this.title)
                return this.title */
                return this.title || 'Contador'
            }
        }
    }
    </script>

    <style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
    </style>
    ```
2. Commit Video 053:
    + $ git add .
    + $ git commit -m "Commit 053: Validación de los props"
    + $ git push -u origin main

### Nota 054. Código fuente
+ [Repositorio de esta sección](https://github.com/Klerith/vue-fundamentos-cli/tree/fin-seccion-4)
1. Commit Video 054:
    + $ git add .
    + $ git commit -m "Commit 054: Código fuente"
    + $ git push -u origin main

## Sección 05: IndecisionApp - Continuación

### Video 055. Introducción a la sección
+ **Contenido**: Breve explicación al **Options API** y **Composition API**.
1. Commit Video 055:
    + $ git add .
    + $ git commit -m "Commit 055: Introducción a la sección"
    + $ git push -u origin main

### Nota 056. Temas puntuales de la sección
1. Temas puntuales de la sección:
    + Esta sección aunque es pequeña, contiene información importante sobre:
        + Watch
        + Métodos
        + Peticiones HTTP
        + Ternarios
        + Renderizado condicional
        + Estilos globales
        + Y más
    + Al final, crearemos una aplicación pequeña pero muy útil para poder ir tomando confianza en Vue.js
2. Commit Video 056:
    + $ git add .
    + $ git commit -m "Commit 056: Temas puntuales de la sección"
    + $ git push -u origin main

### Video 057. Demostración del objetivo final
+ **Contenido**: breve explicación de una aplicación que consume una API.
1. Commit Video 057:
    + $ git add .
    + $ git commit -m "Commit 057: Demostración del objetivo final"
    + $ git push -u origin main

### Video 058. Continuación de proyecto - FundamentosApp
**Contenido**: indicaciones para seguir trabajando con el proyecto **03fundamentos**.
1. Commit Video 058:
    + $ git add .
    + $ git commit -m "Commit 058: Continuación de proyecto - FundamentosApp"
    + $ git push -u origin main

### Video 059. Indecision Component
+ [Klerith/indecision.html](https://gist.github.com/Klerith/0008cd42c24ae01089749ad4d5dcc0c2)
1. Crear componente Vue **03fundamentos\src\components\Indecision.vue**:
    ```vue
    <template>
        <img src="https://via.placeholder.com/250" alt="bg">
        <div class="bg-dark"></div>
        <div class="indecision-container">
            <input type="text" placeholder="Hazme una pregunta">
            <p>Recuerda terminar con un signo de interrogación (?)</p>
            <div class="">
                <h2>Seré millonario?</h2>
                <h1>Si, no, ... pensando</h1>
            </div>
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style>
        img, .bg-dark {
            height: 100vh;
            left: 0px;
            max-height: 100%;
            max-width: 100%;
            position: fixed;
            top: 0px;
            width: 100vw;
        }

        .bg-dark {
            background-color: rgba(0, 0, 0, 0.4);
        }

        .indecision-container {
            position: relative;
            z-index: 99;
        }
        
        input {
            width: 250px;
            padding: 10px 15px;
            border-radius: 5px;
            border: none;
        }
        input:focus {
            outline: none;
        }

        p {
            color: white;
            font-size: 20px;
            margin-top: 0px;
        }

        h1, h2 {
            color: white;
        }
        
        h2 {
            margin-top: 150px;
        }
    </style>   
    ```
2. Modifica **03fundamentos\src\App.vue**:
    ```vue
    <template>
        <Indecision />
    </template>

    <script>
    import Indecision from './components/Indecision.vue'
    export default {
        name: 'App',
        components: {
            Indecision
        }
    }
    </script>

    <style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    </style>
    ```
3. Commit Video 059:
    + $ git add .
    + $ git commit -m "Commit 059: Indecision Component"
    + $ git push -u origin main

### Video 060. Watch - Observar cambios en una propiedad reactiva
1. Modificar **03fundamentos\src\components\Indecision.vue**:
    ```vue
    <template>
        <img src="https://via.placeholder.com/250" alt="bg">
        <div class="bg-dark"></div>
        <div class="indecision-container">
            <input
                type="text"
                v-model="question"
                placeholder="Hazme una pregunta">
            <p>Recuerda terminar con un signo de interrogación (?)</p>
            <div class="">
                <h2>{{ question }}</h2>
                <h1>Si, no, ... pensando</h1>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return{
                question: null
            }
        },
        watch: {
            question(value, oldValue){
                /* console.log({value, oldValue}) */
                if (!value.includes('?')) return
                // TODO: Realizar petición http
            }
        }
    }
    </script>
    ≡
    ```
2. Commit Video 060:
    + $ git add .
    + $ git commit -m "Commit 060: Watch - Observar cambios en una propiedad reactiva"
    + $ git push -u origin main

### Video 061. Realizar petición HTTP a un backend
+ [Yes or No](https://yesno.wtf)
1. Modificar **03fundamentos\src\components\Indecision.vue**:
    ```vue
    <template>
        <img v-if="img" :src="img" alt="bg">
        <div class="bg-dark"></div>
        <div class="indecision-container">
            <input
                type="text"
                v-model="question"
                placeholder="Hazme una pregunta">
            <p>Recuerda terminar con un signo de interrogación (?)</p>
            <div class="">
                <h2>{{ question }}</h2>
                <h1>{{ answer }}</h1>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return{
                question: null,
                answer: null,
                /* img: "https://via.placeholder.com/250" */
                img: null
            }
        },
        methods:{
            async getAnswer(){
                this.answer = 'Pensando...'
                /* const data = await fetch('https://yesno.wtf/api').then(r => r.json()) */
                const { answer, image } = await fetch('https://yesno.wtf/api').then(r => r.json())
                /* console.log(answer) */
                this.answer = answer
                this.img = image
            }
        },
        watch: {
            question(value, oldValue){
                if ( !value.includes('?') ) return

                // TODO: Realizar petición http
                this.getAnswer()
            }
        }
    }
    </script>
    ≡
    ```
2. Crear archivo de estilos **03fundamentos\src\css\styles.css**:
    ```css
    html, body {
        background-color: black;
    }
    ```
3. Modificar **03fundamentos\src\main.js**:
    ```js
    import { createApp } from 'vue'
    import App from './App.vue'

    import './css/styles.css'

    createApp(App).mount('#app')
    ```
4. Commit Video 061:
    + $ git add .
    + $ git commit -m "Commit 061: Realizar petición HTTP a un backend"
    + $ git push -u origin main

### Video 062. Pulir detalles de nuestra aplicación
1. Modificar **03fundamentos\src\components\Indecision.vue**:
    ```vue
    <template>
        <img v-if="img" :src="img" alt="bg">
        <div class="bg-dark"></div>
        <div class="indecision-container">
            <input
                type="text"
                v-model="question"
                placeholder="Hazme una pregunta">
            <p>Recuerda terminar con un signo de interrogación (?)</p>
            <div v-if="isValidQuestion">
                <h2>{{ question }}</h2>
                <h1>{{ answer }}</h1>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return{
                question: null,
                answer: null,
                /* img: "https://via.placeholder.com/250" */
                img: null,
                isValidQuestion: false
            }
        },
        methods:{
            async getAnswer(){
                this.answer = 'Pensando...'
                /* const data = await fetch('https://yesno.wtf/api').then(r => r.json()) */
                const { answer, image } = await fetch('https://yesno.wtf/api').then(r => r.json())
                /* console.log(answer) */
                this.answer = answer === 'yes' ? 'Si' : answer
                this.img = image
            }
        },
        watch: {
            question(value, oldValue){
                this.isValidQuestion = false
                if ( !value.includes('?') ) return
                this.isValidQuestion = true

                // TODO: Realizar petición http
                this.getAnswer()
            }
        }
    }
    </script>

    <style>
        img, .bg-dark {
            height: 100vh;
            left: 0px;
            max-height: 100%;
            max-width: 100%;
            position: fixed;
            top: 0px;
            width: 100vw;
        }

        .bg-dark {
            background-color: rgba(0, 0, 0, 0.4);
        }

        .indecision-container {
            position: relative;
            z-index: 99;
        }
        
        input {
            width: 250px;
            padding: 10px 15px;
            border-radius: 5px;
            border: none;
        }
        input:focus {
            outline: none;
        }

        p {
            color: white;
            font-size: 20px;
            margin-top: 0px;
        }

        h1, h2 {
            color: white;
        }
        
        h2 {
            margin-top: 150px;
        }
    </style>
    ```
2. Commit Video 062:
    + $ git add .
    + $ git commit -m "Commit 062: Pulir detalles de nuestra aplicación"
    + $ git push -u origin main

### Nota 063. Código fuente de la sección
+ [Repositorio de la sección en GitHub](https://github.com/Klerith/vue-fundamentos-cli/tree/fin-seccion-5)
1. Commit Video 063:
    + $ git add .
    + $ git commit -m "Commit 063: Código fuente de la sección"
    + $ git push -u origin main

## Sección 06: Introducción a las pruebas unitarias y de integración

### Video 064. Introducción a la sección
+ **Contenido**: importancia de probar nuestra aplicaciones.
1. Commit Video 064:
    + $ git add .
    + $ git commit -m "Commit 064: Introducción a la sección"
    + $ git push -u origin main

### Nota 065. Temas puntuales de la sección
1. Temas puntuales de la sección:
    + Esta es nuestra primera sección de pruebas unitarias, el objetivo es que probemos todo el trabajo realizado anteriormente. Aquí tocaremos los siguientes temas:
        + Jest
        + Expect
        + Spies (SpyOn)
        + Ciclo de vida de las pruebas
        + wrapper
        + ShallowMount
        + Mount
        + Expect
        + Snapshot
        + Props
        + Mocks
        + Y mucho más
    + Antes de que piensen en saltarse la sección, porque muchos consideras las pruebas algo innecesario, miren los videos iniciales, son muy importantes, y también recuerden que hay muchas personas que están cursando este curso únicamente por la sección de pruebas.
2. Commit Video 065:
    + $ git add .
    + $ git commit -m "Commit 065: Temas puntuales de la sección"
    + $ git push -u origin main

### Video 066. Introducción a las pruebas unitarias y de integración
+ **Contenido**: Breve introducción a las pruebas unitarias y de integración
1. Commit Video 066:
    + $ git add .
    + $ git commit -m "Commit 066: Introducción a las pruebas unitarias y de integración"
    + $ git push -u origin main

### Video 067. Mi primera prueba
+ **Nota**: Para las pruebas se recomienda copiar la misma estructura del directorio **03fundamentos\src** en **03fundamentos\tests\unit**.
1. Modificar o crear según sea el caso el archivo **03fundamentos\tests\unit\example.spec.js**:
    ```js
    describe('Example Component', () => {
        test('Debe de ser mayor a 10', () => {
            // Arreglar
            let value = 5

            // Estímulo
            value = value + 2

            // Observar el resultado
            if(value > 10){
                // TODO: todo bien!
            }else{
                throw `${ value } no es mayor a 10`
            }
        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
    + **Nota**: este comando ejecutará todas las pruebas (*.spec.js) que se encuentren en el directorio **03fundamentos\tests\unit**.
3. Commit Video 067:
    + $ git add .
    + $ git commit -m "Commit 067: Mi primera prueba"
    + $ git push -u origin main

### Video 068. Expect
+ [Jest.js](https://jestjs.io)
1. Modificar **03fundamentos\tests\unit\example.spec.js**:
    ```js
    describe('Example Component', () => {
        test('Debe de ser mayor a 10', () => {
            // Arreglar
            let value = 5

            // Estímulo
            value = value + 2

            // Observar el resultado
            expect(value).toBeGreaterThan(10);
        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
3. Commit Video 068:
    + $ git add .
    + $ git commit -m "Commit 068: Expect"
    + $ git push -u origin main

### Video 069. Snapshot
1. Crear archivo de prueba **03fundamentos\tests\unit\counter.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Counter from '@/components/Counter'

    describe('Counter Component', () => {
        test('debe de hacer match con el snapshot', () => {
            const wrapper = shallowMount(Counter)
            expect( wrapper.html() ).toMatchSnapshot()
        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
3. Si se modifica algo en el componente **03fundamentos\src\components\Counter.vue** y se desea actualizar los cambios, ejecutar:
    + $ npm run test:unit -u
4. Commit Video 069:
    + $ git add .
    + $ git commit -m "Commit 069: Snapshot"
    + $ git push -u origin main

### Video 070. Verificar valor en una etiqueta HTML
1. Modificar **03fundamentos\tests\unit\counter.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Counter from '@/components/Counter'

    describe('Counter Component', () => {
        /* test('debe de hacer match con el snapshot', () => {
            const wrapper = shallowMount(Counter)
            expect( wrapper.html() ).toMatchSnapshot()
        }) */
        
        test('h2 debe de tener el valor por defecto "Contador"', () => {
            const wrapper = shallowMount(Counter)
            /* const h2 = wrapper.find('h2') */
            /* console.log(h2.text()) */
            /* expect( h2.text() ).toBe('Contador!') */
            expect(wrapper.find('h2').exists()).toBeTruthy()
            const h2Value = wrapper.find('h2').text()
            expect(h2Value).toBe('Contador')
        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
3. Commit Video 070:
    + $ git add .
    + $ git commit -m "Commit 070: Verificar valor en una etiqueta HTML"
    + $ git push -u origin main

### Video 071. FindAll vs Find
1. Modificar componente **03fundamentos\src\components\Counter.vue**:
    ```vue
    <template>
        <!-- <h2>{{ title || 'Contador' }}</h2> -->
        <h2>{{ customTitle }}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <!-- <p>{{ counter }}</p> -->
        <p data-testid="counter">{{ counter }}</p>
        <div class="buttons-container">
            <!-- <button v-on:click="increase">+1</button>
            <button v-on:click="decrease">-1</button> -->
            <!-- Las siguientes dos líneas de código son equivalentes a las dos comentadas anteriormente -->
            <button @click="increase">+1</button>
            <button @click="decrease">-1</button>
        </div>
    </template>
    ≡
    ```
2. Modificar prueba **03fundamentos\tests\unit\counter.spec.js**:
    ```js
    ≡
    describe('Counter Component', () => {
        ≡
        test('El valor por defecto debe de ser 100 en el p', () => {
            const wrapper = shallowMount(Counter)
            /* const pTags = wrapper.findAll('p') */
            const value = wrapper.find('[data-testid="counter"]').text()
            /* console.log(pTags) */
            /* expect(pTags[1].text()).toBe('100') */
            expect(value).toBe('100')
        })
    })
    ```
3. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
4. Commit Video 071:
    + $ git add .
    + $ git commit -m "Commit 071: FindAll vs Find"
    + $ git push -u origin main

### Video 072. Simular eventos
1. Modificar prueba **03fundamentos\tests\unit\counter.spec.js**:
    ```js
    ≡
    describe('Counter Component', () => {
        ≡

        test('Debe de incrementer en 1 el valor del contador', async() => {
            const wrapper = shallowMount(Counter)
            const increaseBtn = wrapper.find('button')
            await increaseBtn.trigger('click')
            let value = wrapper.find('[data-testid="counter"]').text()
            expect(value).toBe('101')

            const decreaseBtn = wrapper.findAll('button')[1]
            await decreaseBtn.trigger('click')
            await decreaseBtn.trigger('click')
            value = wrapper.find('[data-testid="counter"]').text()
            expect(value).toBe('99')
        })
    })   
    ```
2. Para realizar una prueba específica:
    + $ npm run test:unit counter
    + **Nota**: este comando solo evaluará las pruebas contenidas en **03fundamentos\tests\unit\counter.spec.js**.
3. Commit Video 072:
    + $ git add .
    + $ git commit -m "Commit 072: Simular eventos"
    + $ git push -u origin main

### Video 073. Optimización de código
+ [Jest.js - Setup and Teardown](https://jestjs.io/docs/setup-teardown)
1. Modificar **03fundamentos\tests\unit\counter.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Counter from '@/components/Counter'

    describe('Counter Component', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallowMount(Counter)
        })
        
        test('h2 debe de tener el valor por defecto "Contador"', () => {
            expect(wrapper.find('h2').exists()).toBeTruthy()
            const h2Value = wrapper.find('h2').text()
            expect(h2Value).toBe('Contador')
        })

        test('El valor por defecto debe de ser 100 en el p', async() => {
            const value = wrapper.find('[data-testid="counter"]').text()
            expect(value).toBe('100')

            const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
            await increaseBtn.trigger('click')
        })

        test('Debe de incrementer en 1 el valor del contador', async() => {
            const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

            await increaseBtn.trigger('click')
            await increaseBtn.trigger('click')
            await increaseBtn.trigger('click')
            await decreaseBtn.trigger('click')
            await decreaseBtn.trigger('click')

            const value = wrapper.find('[data-testid="counter"]').text()
            expect(value).toBe('101')
        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
3. Commit Video 073:
    + $ git add .
    + $ git commit -m "Commit 073: Optimización de código"
    + $ git push -u origin main

### Video 074. Leer props desde pruebas
1. Modificar **03fundamentos\tests\unit\counter.spec.js**:
    ```js
    ≡
    describe('Counter Component', () => {
        ≡
        test('Debe de establecer el valor por defecto', () => {
            /* console.log(wrapper.props()) */
            /* const start = wrapper.props('start') */
            // La siguiente instrucción es equivalente a la anteriormente comentada
            const {start} = wrapper.props()
            /* console.log(start, typeof start) */

            const value = wrapper.find('[data-testid="counter"]').text()
            expect(Number(value)).toBe(start)
        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
3. Commit Video 074:
    + $ git add .
    + $ git commit -m "Commit 074: Leer props desde pruebas"
    + $ git push -u origin main

### Video 075. Enviar Props y evaluarlas
1. Modificar **03fundamentos\tests\unit\counter.spec.js**:
    ```js
    ≡
    describe('Counter Component', () => {
        ≡
        test('Debe de mostrar la prop title', () => {
            const title = 'Hola Tía Elizabeth'
            const wrapper = shallowMount(Counter, {
                props: {
                    /* title: title */
                    // La expresión de abajo es equivalente a la anteriormente comentada
                    title
                }
            })
            /* console.log(wrapper.html()) */
            expect(wrapper.find('h2').text()).toBe(title)
        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit
3. Commit Video 075:
    + $ git add .
    + $ git commit -m "Commit 075: Enviar Props y evaluarlas"
    + $ git push -u origin main

### Video 076. Pruebas iniciales en el Indecision component
1. Crear el archivo de prueba para el componente Indecision **03fundamentos\tests\unit\indecision.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Indecision from '@/components/Indecision'

    describe('Indecision Component', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallowMount(Indecision)
        })

        test('Debe de hacer match con el sanpshot', () => {
            expect( wrapper.html() ).toMatchSnapshot()
        })
    })    
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit indecision
3. Commit Video 076:
    + $ git add .
    + $ git commit -m "Commit 076: Pruebas iniciales en el Indecision component"
    + $ git push -u origin main

### Video 077. Definir las pruebas a realizar
1. Modificar prueba **03fundamentos\tests\unit\indecision.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Indecision from '@/components/Indecision'

    describe('Indecision Component', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallowMount(Indecision)
        })

        test('debe de hacer match con el sanpshot', () => {
            expect( wrapper.html() ).toMatchSnapshot()
        })

        test('escribir en el input no debe de disparar nada (console.log)', () => {

        })

        test('escribir el simbolo de "?" debe de disparar el fetch', () => {

        })

        test('pruebas en getAnswer', () => {

        })

        test('pruebas en getAnswer - Fallo en el API', () => {

        })
    })
    ```
2. Modificar componente **03fundamentos\src\components\Indecision.vue**:
    ```vue
    ≡
    <script>
    export default {
        ≡
        watch: {
            question(value, oldValue){
                this.isValidQuestion = false
                console.log({value})
                ≡
            }
        }
    }
    </script>
    ≡
    ```
3. Commit Video 077:
    + $ git add .
    + $ git commit -m "Commit 077: Definir las pruebas a realizar"
    + $ git push -u origin main

### Video 078. Spy y Mocks
1. Modificar prueba **03fundamentos\tests\unit\indecision.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Indecision from '@/components/Indecision'

    describe('Indecision Component', () => {
        let wrapper
        let clgSpy

        beforeEach(() => {
            wrapper = shallowMount(Indecision)
            clgSpy = jest.spyOn(console, 'log')
        })

        test('debe de hacer match con el sanpshot', () => {
            expect( wrapper.html() ).toMatchSnapshot()
        })

        test('escribir en el input no debe de disparar nada (console.log)', async() => {
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo')

            expect(clgSpy).toHaveBeenCalledTimes(1)
        })

        test('escribir el simbolo de "?" debe de disparar el fetch', () => {

        })

        test('pruebas en getAnswer', () => {

        })

        test('pruebas en getAnswer - Fallo en el API', () => {

        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit indecision
3. Commit Video 078:
    + $ git add .
    + $ git commit -m "Commit 078: Spy y Mocks"
    + $ git push -u origin main

### Video 079. Spy con la instancia de Vue
+ [Vue Test Utils](https://vue-test-utils.vuejs.org/api/wrapper)
1. Modificar prueba **03fundamentos\tests\unit\indecision.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Indecision from '@/components/Indecision'

    describe('Indecision Component', () => {
        let wrapper
        let clgSpy

        beforeEach(() => {
            wrapper = shallowMount(Indecision)
            clgSpy = jest.spyOn(console, 'log')
        })

        test('debe de hacer match con el sanpshot', () => {
            expect( wrapper.html() ).toMatchSnapshot()
        })

        test('escribir en el input no debe de disparar nada (console.log)', async() => {
            const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo')

            expect(clgSpy).toHaveBeenCalledTimes(1)
            /* expect(getAnswerSpy).toHaveReturnedTimes(0) */
            expect(getAnswerSpy).not.toHaveBeenCalled()
        })

        test('escribir el simbolo de "?" debe de disparar el fetch', () => {
            
        })

        test('pruebas en getAnswer', () => {

        })

        test('pruebas en getAnswer - Fallo en el API', () => {

        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit indecision
3. Commit Video 079:
    + $ git add .
    + $ git commit -m "Commit 079: Spy con la instancia de Vue"
    + $ git push -u origin main

### Video 080. Tarea: Probar que el getAnswer fue llamado
1. Modificar prueba **03fundamentos\tests\unit\indecision.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Indecision from '@/components/Indecision'

    describe('Indecision Component', () => {
        let wrapper
        let clgSpy

        global.fetch = jest.fn()

        beforeEach(() => {
            wrapper = shallowMount(Indecision)
            clgSpy = jest.spyOn(console, 'log')
            jest.clearAllMocks()
        })

        test('debe de hacer match con el sanpshot', () => {
            expect( wrapper.html() ).toMatchSnapshot()
        })

        test('escribir en el input no debe de disparar nada (console.log)', async() => {
            const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo')

            expect(clgSpy).toHaveBeenCalledTimes(1)
            expect(getAnswerSpy).not.toHaveBeenCalled()
        })

        test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
            const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo?')

            expect(getAnswerSpy).toHaveBeenCalledTimes(1)
        })

        test('pruebas en getAnswer', () => {

        })

        test('pruebas en getAnswer - Fallo en el API', () => {

        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit indecision
3. Commit Video 080:
    + $ git add .
    + $ git commit -m "Commit 080: Probar que el getAnswer fue llamado"
    + $ git push -u origin main

### Video 081. Pruebas sobre Fetch Api
1. Modificar prueba **03fundamentos\tests\unit\indecision.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Indecision from '@/components/Indecision'

    describe('Indecision Component', () => {
        let wrapper
        let clgSpy

        global.fetch = jest.fn( () => Promise.resolve({
            json: () => Promise.resolve({
                answer: 'yes',
                forced: false,
                image:  'https://yesno.wtf/assets/yes/2.gif'
            })
        }))

        beforeEach(() => {
            wrapper = shallowMount(Indecision)
            clgSpy = jest.spyOn(console, 'log')
            jest.clearAllMocks()
        })

        test('debe de hacer match con el sanpshot', () => {
            expect( wrapper.html() ).toMatchSnapshot()
        })

        test('escribir en el input no debe de disparar nada (console.log)', async() => {
            const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo')

            expect(clgSpy).toHaveBeenCalledTimes(1)
            /* expect(getAnswerSpy).toHaveReturnedTimes(0) */
            expect(getAnswerSpy).not.toHaveBeenCalled()
        })

        test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
            const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo?')

            expect(clgSpy).toHaveBeenCalledTimes(1)
            expect(getAnswerSpy).toHaveBeenCalled()
        })

        test('pruebas en getAnswer', async() => {
            await wrapper.vm.getAnswer()

            const img = wrapper.find('img')

            expect( img.exists() ).toBeTruthy()
            expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
            expect( wrapper.vm.answer ).toBe('Si!')
        })

        test('pruebas en getAnswer - Fallo en el API', () => {

        })
    })
    ```
2. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit indecision
3. Commit Video 081:
    + $ git add .
    + $ git commit -m "Commit 081: Pruebas sobre Fetch Api"
    + $ git push -u origin main

### Video 082. Simular un fallo en el API
1. Modificar **03fundamentos\src\components\Indecision.vue**:
    ```vue
    ≡
    <script>
    export default {
        ≡
        methods:{
            async getAnswer(){
                try{
                    this.answer = 'Pensando...'
                    /* const data = await fetch('https://yesno.wtf/api').then(r => r.json()) */
                    const { answer, image } = await fetch('https://yesno.wtf/api').then(r => r.json())
                    /* console.log(answer) */
                    this.answer = answer === 'yes' ? 'Si' : answer
                    this.img = image
                } catch(error){
                    console.log('IndecisionComponent: ', error)
                    this.answer = 'No se pudo cargar del API'
                    this.img = null
                }
            }
        },
        ≡
    }
    </script>
    ≡
    ```
2. Modificar prueba **03fundamentos\tests\unit\indecision.spec.js**:
    ```js
    import { shallowMount } from '@vue/test-utils'
    import Indecision from '@/components/Indecision'

    describe('Indecision Component', () => {
        let wrapper
        let clgSpy

        global.fetch = jest.fn( () => Promise.resolve({
            json: () => Promise.resolve({
                answer: 'yes',
                forced: false,
                image:  'https://yesno.wtf/assets/yes/2.gif'
            })
        }))

        beforeEach(() => {
            wrapper = shallowMount(Indecision)
            clgSpy = jest.spyOn(console, 'log')
            jest.clearAllMocks()
        })

        test('debe de hacer match con el sanpshot', () => {
            expect( wrapper.html() ).toMatchSnapshot()
        })

        test('escribir en el input no debe de disparar nada (console.log)', async() => {
            const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo')

            expect(clgSpy).toHaveBeenCalledTimes(1)
            /* expect(getAnswerSpy).toHaveReturnedTimes(0) */
            expect(getAnswerSpy).not.toHaveBeenCalled()
        })

        test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
            const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
            const input = wrapper.find('input')
            await input.setValue('Hola Mundo?')

            expect(clgSpy).toHaveBeenCalledTimes(1)
            expect(getAnswerSpy).toHaveBeenCalled()
        })

        test('pruebas en getAnswer', async() => {
            await wrapper.vm.getAnswer()

            const img = wrapper.find('img')

            expect( img.exists() ).toBeTruthy()
            expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
            expect( wrapper.vm.answer ).toBe('Si!')
        })

        test('pruebas en getAnswer - Fallo en el API', async() => {
            fetch.mockImplementationOnce( () => Promise.reject('API is down') )

            await wrapper.vm.getAnswer()

            const img = wrapper.find('img')

            expect( img.exists() ).toBeFalsy()
            expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
        })
    })
    ```
3. Ubicarse en la raíz del proyecto **03fundamentos** y ejecutar una prueba global:
    + $ npm run test:unit indecision
4. Commit Video 082:
    + $ git add .
    + $ git commit -m "Commit 082: Simular un fallo en el API"
    + $ git push -u origin main

### Nota 083. Código fuente de la sección
+ [Código fuente de la sección](https://github.com/Klerith/vue-fundamentos-cli/tree/fin-seccion-6)
1. Commit Video 083:
    + $ git add .
    + $ git commit -m "Commit 083: Código fuente de la sección"
    + $ git push -u origin main

## Sección 07: Pokemon Game

### Video 084. Introducción a la sección
+ **Contenido**: Sobre el proyecto que se construirá en esta sección.
1. Commit Video 084:
    + $ git add .
    + $ git commit -m "Commit 084: Introducción a la sección"
    + $ git push -u origin main

### Nota 085. Temas puntuales de la sección
1. Temas puntuales de la sección
    + En esta sección haremos un juego que nos permita aprender mucho sobre Vue y la comunicación entre componentes. Puntualmente veremos:
        + Mount
        + Axios en Vue.js
        + Emitir eventos
        + Escuchar eventos personalizados
        + Funciones para generar información aleatoria
        + Lógica para resolver la necesidad de la aplicación
2. Commit Video 085:
    + $ git add .
    + $ git commit -m "Commit 085: Temas puntuales de la sección"
    + $ git push -u origin main

### Video 086. Demostración del objetivo al final de la sección
+ **Contenido**: Muestra del proyecto terminado.
1. Commit Video 086:
    + $ git add .
    + $ git commit -m "Commit 086: Demostración del objetivo al final de la sección"
    + $ git push -u origin main

### Video 087. Inicio de proyecto - Pokémon Game
+ [Klerith/animations.css](https://gist.github.com/Klerith/4c2c2d726a0c6875367174dcef49631c)
1. Crear aplicación Vue.js **04pokemon**:
    + $ vue create 04pokemon
    + Seleccionar: **Manually select features**
    + Check the features needed for your project:
        + **Choose Vue version**
        + **Babel**
        + **Unit Testing**
    + Choose a version of Vue.js that you want to start the project with: **3.x**
    + Pick a unit testing solution: **Jest**
    + Where do you prefer placing config for Babel, ESLint, etc.?: **In dedicated config files**
    + Save this as a preset for future projects?: **N**
2. Ir a la raíz del proyecto **04pokemon** y levantar un servidor:
    + $ cd 04pokemon
    + $ npm run serve
3. Crear archivo de estilo **04pokemon\src\css\animations.css**:
    ```css
    .fade-in {
        animation: fadeIn 0.3s;
        -webkit-animation: fadeIn 0.3s;
        -moz-animation: fadeIn 0.3s;
        -o-animation: fadeIn 0.3s;
        -ms-animation: fadeIn 0.3s;
    }
    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    ```
4. Crear archivo de estilo **04pokemon\src\css\styles.css**:
    ```css
    html, body {
        background-color: #f1f1f1;
        margin: 0px;
    }  
    ```
5. Importar los estilos nuevos en **04pokemon\src\main.js**:
    ```js
    import { createApp } from 'vue'
    import App from './App.vue'

    import './css/styles.css'
    import './css/animations.css'

    createApp(App).mount('#app')
    ```
7. Commit Video 087:
    + $ git add .
    + $ git commit -m "Commit 087: Inicio de proyecto - Pokémon Game"
    + $ git push -u origin main

### Video 088. Estructura del proyecto y componentes
1. Crear componente **04pokemon\src\pages\PokemonPage.vue**:
    ```vue
    <template>
        <h1>¿Quién es este pokémon?</h1>
        
        <PokemonPicture />
        <PokemonOptions />
    </template>

    <script>
    import PokemonPicture from '@/components/PokemonPicture'
    import PokemonOptions from '@/components/PokemonOptions'

    export default {
        components: {
            PokemonPicture,
            PokemonOptions
        }
    }
    </script>
    ```
2. Modificar **04pokemon\src\App.vue**:
    ```vue
    <template>
        <PokemonPage />
    </template>

    <script>
    import PokemonPage from './pages/PokemonPage.vue'

    export default {
    name: 'App',
        components: {
            PokemonPage
        }
    }
    </script>

    <style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    </style>
    ```
3. Borrar el componente **04pokemon\src\components\HelloWorld.vue**.
4. Crear componente **04pokemon\src\components\PokemonPicture.vue**:
    ```vue
    <template>
        <h3>Pokemon picture</h3>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
5. Crear componente **04pokemon\src\components\PokemonOptions.vue**:
    ```vue
    <template>
        <h3>Pokemon options</h3>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>   
    ```
6. Commit Video 088:
    + $ git add .
    + $ git commit -m "Commit 088: Estructura del proyecto y componentes"
    + $ git push -u origin main

### Video 089. Diseño de los componentes
+ [Klerith/pokemon-options-picture.css](https://gist.github.com/Klerith/2f3d69f8b03de511fe87dd14fb7a235c)
+ [Imagen de un pokémon](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg)
+ [PokéAPI](https://pokeapi.co/)
1. Modificar el componente **04pokemon\src\components\PokemonPicture.vue**:
    ```vue
    <template>
        <div class="pokemon-container">
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                class="hidden-pokemon" 
                alt="pokémon"
            >
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                class="fade-in" 
                alt="pokémon"
            >
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style scoped>
    /* Pokemon Picture */
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        right: 32%;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }
    </style>
    ```
2. Modificar el componente **04pokemon\src\components\PokemonOptions.vue**:
    ```vue
    <template>
        <div class="options-container">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style scoped>
    /* Pokemon Options */
    ul {
        list-style-type: none;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .options-container {
        display: flex;
        justify-content: center;
    }
    </style>
    ```
3. Commit Video 089:
    + $ git add .
    + $ git commit -m "Commit 089: Diseño de los componentes"
    + $ git push -u origin main

### Video 090. Funcionalidad de PokemonPicture
1. Modificar componente **04pokemon\src\components\PokemonPicture.vue**:
    ```vue
    <template>
        <div class="pokemon-container">
            <img 
                :src="imgSrc" 
                class="hidden-pokemon" 
                alt="pokémon"
            >
            <img 
                v-if="showPokemon"
                :src="imgSrc" 
                class="fade-in" 
                alt="pokémon"
            >
        </div>
    </template>

    <script>
    export default {        
        props: {
            pokemonId: {
                type: Number,
                required: true
            },
            showPokemon: {
                type: Boolean,
                required: true,
                default: false
            }
        },    
        computed: {
            imgSrc(){
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
            }
        }
    }
    </script>

    <style scoped>
    /* Pokemon Picture */
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        right: 32%;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }
    </style>
    ```
2. Modificar componente **04pokemon\src\pages\PokemonPage.vue**:
    ```vue
    <template>
        <h1>¿Quién es este pokémon?</h1>
        
        <PokemonPicture :pokemonId="4" :showPokemon="true" />
        <PokemonOptions />
    </template>

    <script>
    import PokemonPicture from '@/components/PokemonPicture'
    import PokemonOptions from '@/components/PokemonOptions'

    export default {
        components: {
            PokemonPicture,
            PokemonOptions
        }
    }
    </script>    
    ```
3. Commit Video 090:
    + $ git add .
    + $ git commit -m "Commit 090: Funcionalidad de PokemonPicture"
    + $ git push -u origin main

### Video 091. Lógica de los nombres de los pokémons
1. Crear helper **04pokemon\src\helpers\getPokemonOptions.js**:
    ```js
    const getPokemons = () => {
        const pokemonsArr = Array.from(Array(650))
        /* console.log(pokemonsArr) */
        return pokemonsArr.map((_, index) => index +1)
    }

    const getPokemonOptions = () => {
        const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
        /* console.log(mixedPokemons) */
        getPokemonNames(mixedPokemons.splice(0, 4))
    }

    const getPokemonNames = ([a, b, c, d] = []) => {
        console.log(a, b, c, d)
    }

    export default getPokemonOptions
    ```
2. Modificar 04pokemon\src\pages\PokemonPage.vue:
    ```vue
    ≡
    <script>
    import PokemonPicture from '@/components/PokemonPicture'
    import PokemonOptions from '@/components/PokemonOptions'
    import getPokemonOptions from '@/helpers/getPokemonOptions'

    console.log(getPokemonOptions())
    ≡
    </script>
    ```
3. Commit Video 091:
    + $ git add .
    + $ git commit -m "Commit 091: Lógica de los nombres de los pokémons"
    + $ git push -u origin main

### Video 092. Obtener nombres de los 4 pokémons
1. Instalar Axios:
    + $ npm install axios
2. Crear **04pokemon\src\api\pokemonApi.js**:
    ```js
    import axios from 'axios'

    const pokemonApi = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon'
    })

    export default pokemonApi
    ```
3. Modificar **04pokemon\src\helpers\getPokemonOptions.js**:
    ```js
    import pokemonApi from '../api/pokemonApi'

    const getPokemons = () => {
        const pokemonsArr = Array.from( Array(650) )
        return pokemonsArr.map( ( _ , index ) => index + 1 )
    }

    const getPokemonOptions = async() => {
        const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 ) 
        const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )
        return pokemons
    }

    const getPokemonNames = async( [a,b,c,d] = [] ) => {
        // const resp = await pokemonApi.get(`/3`)
        // console.log(resp.data.name, resp.data.id)
        const promiseArr = [
            pokemonApi.get(`/${ a }`),
            pokemonApi.get(`/${ b }`),
            pokemonApi.get(`/${ c }`),
            pokemonApi.get(`/${ d }`),
        ]

        const [ p1, p2, p3, p4 ] = await Promise.all( promiseArr )
        
        return [
            { name: p1.data.name, id: p1.data.id },
            { name: p2.data.name, id: p2.data.id },
            { name: p4.data.name, id: p3.data.id },
            { name: p3.data.name, id: p4.data.id },
        ]
    }

    export default getPokemonOptions
    ```
4. Commit Video 092:
    + $ git add .
    + $ git commit -m "Commit 092: Obtener nombres de los 4 pokémons"
    + $ git push -u origin main

### Video 093. Mostrar las opciones posibles
1. Modificar **04pokemon\src\pages\PokemonPage.vue**:
    ```vue
    <template>
        ≡
        <PokemonOptions :pokemons="pokemonArr" />
    </template>

    <script>
    ≡
    export default {
        ≡
        methods:{
            async mixPokemonArray(){
                this.pokemonArr = await getPokemonOptions()
                /* console.log(this.pokemonArr) */
            },
        },
        mounted(){
            this.mixPokemonArray()
        }
    }
    </script>
    ```
2. Modificar componente **04pokemon\src\components\PokemonOptions.vue**:
    ```vue
    <template>
        <div class="options-container">
            <ul>
                <li
                    v-for="pokemon in pokemons"
                    :key="pokemon.id">
                    {{ pokemon.name }}
                </li>
            </ul>
        </div>
    </template>

    <script>
    export default {
        props:{
            pokemons: {
                type: Array,
                required: true
            }
        }
    }
    </script>
    ≡
    ```
3. Commit Video 093:
    + $ git add .
    + $ git commit -m "Commit 093: Mostrar las opciones posibles"
    + $ git push -u origin main

### Video 094. Seleccionar un pokémon aleatoriamente
1. Modificar **04pokemon\src\pages\PokemonPage.vue**:
    ```vue
    <template>
        <h1 v-if="!pokemon">Espere por favor...</h1>
        <div v-else>
            <h1>¿Quién es este pokémon?</h1>
            
            <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
            <PokemonOptions :pokemons="pokemonArr" />
        </div>
    </template>

    <script>
    ≡
    export default {
        ≡
        data(){
            return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false
            } 
        },
        methods:{
            async mixPokemonArray(){
                this.pokemonArr = await getPokemonOptions()
                /* console.log(this.pokemonArr) */
                const rndInt = Math.floor(Math.random()*4)
                this.pokemon = this.pokemonArr[rndInt]
            },
        },
        ≡
    }
    </script>
    ```
2. Commit Video 094:
    + $ git add .
    + $ git commit -m "Commit 094: Seleccionar un pokémon aleatoriamente"
    + $ git push -u origin main

### Video 095. Emit - Emitir eventos
+ [Documentación Vue.js - v-model arguments](https://v3.vuejs.org/guide/component-custom-events.html#v-model-arguments)
1. Modificar componente hijo **04pokemon\src\components\PokemonOptions.vue**:
    ```vue
    <template>
        <div class="options-container">
            <ul>
                <li
                    v-for="pokemon in pokemons"
                    :key="pokemon.id"
                    @click="$emit('selectionPokemon', pokemon.id)"
                >
                    {{ pokemon.name }}
                </li>
            </ul>
        </div>
    </template>
    ≡
    ```
2. Modificar componente padre **04pokemon\src\pages\PokemonPage.vue**:
    ```vue
    <template>
        <h1 v-if="!pokemon">Espere por favor...</h1>
        <div v-else>
            <h1>¿Quién es este pokémon?</h1>
            
            <pokemon-picture
                :pokemon-id="pokemon.id"
                :show-pokemon="showPokemon"
            ></pokemon-picture>
            <PokemonOptions
                :pokemons="pokemonArr"
                @selection-pokemon="checkAnswer"
            />
        </div>
    </template>

    <script>
    ≡
    export default {
        ≡
        methods:{
            ≡
            checkAnswer(pokemonId){
                /* console.log('Llamado Pokemon Page', pokemonId) */
                this.showPokemon = true
            }
        },
        ≡
    }
    </script>
    ```
3. Commit Video 095:
    + $ git add .
    + $ git commit -m "Commit 095: Emit - Emitir eventos"
    + $ git push -u origin main

### Video 096. Resultado y reinicio de juego
1. Modificar componente padre **04pokemon\src\pages\PokemonPage.vue**:
    ```vue
    <template>
        <h1 v-if="!pokemon">Espere por favor...</h1>
        <div v-else>
            <h1>¿Quién es este pokémon?</h1>
            
            <PokemonPicture
                :pokemon-id="pokemon.id"
                :show-pokemon="showPokemon"
            />
            <PokemonOptions
                :pokemons="pokemonArr"
                @selection-pokemon="checkAnswer"
            />

            <div v-if="showAnswer">
                <h2 class="fade-in">{{ message }}</h2>
                <button @click="newGame">Nuevo Juego</button>
            </div>
        </div>
    </template>

    <script>
    import PokemonPicture from '@/components/PokemonPicture'
    import PokemonOptions from '@/components/PokemonOptions'
    import getPokemonOptions from '@/helpers/getPokemonOptions'

    console.log(getPokemonOptions())

    export default {
        components: {
            PokemonPicture,
            PokemonOptions
        },
        data(){
            return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
            } 
        },
        methods:{
            async mixPokemonArray(){
                this.pokemonArr = await getPokemonOptions()
                /* console.log(this.pokemonArr) */
                const rndInt = Math.floor(Math.random()*4)
                this.pokemon = this.pokemonArr[rndInt]
            },
            checkAnswer(selectedId){
                /* console.log('Llamado Pokemon Page', selectedId) */
                this.showPokemon = true
                this.showAnswer = true

                if(selectedId === this.pokemon.id){
                    this.message = `Correcto, ${this.pokemon.name}`
                }else{
                    this.message = `Ooops, Incorrecto, era ${this.pokemon.name}`
                }
            },
            newGame(){
            this.pokemonArr = []
            this.pokeman = null
            this.showPokemon = false
            this.showAnswer = false
            this.mixPokemonArray()      
            }
        },
        mounted(){
            this.mixPokemonArray()
        }
    }
    </script>
    ```
2. Commit Video 096:
    + $ git add .
    + $ git commit -m "Commit 096: Resultado y reinicio de juego"
    + $ git push -u origin main

### Video 097. Desplegar nuestro juego en producción
+ [netlify](https://www.netlify.com)
1. Modificar estilos en el componente **04pokemon\src\components\PokemonPicture.vue**:
    ```vue
    ≡
    <style scoped>
    ≡
    img {
        height: 200px;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    ≡
    </style>
    ```
2. Preparar y compilar la aplicación el deploy:
    + $ npm run build
    + **Nota**: esta acción genera un proyecto optimizado para producción ubicado en **04pokemon\dist**.
3. Ir a la página de [netlify](https://www.netlify.com), iniciar sesión e ir a **Site**.
4. Arrastrar la carpeta para distribución **04pokemon\dist** en la página de netlify.
5. Ir a **Site settings** y luego a **Change site name** y cambiar el **Site name** a **solucionespp-pokemon**.
    + Nota: ahora podemos ver nuestra aplicación en producción en: https://solucionespp-pokemon.netlify.app
6. Modificar nuevamente el componente **04pokemon\src\components\PokemonPicture.vue**:
    ```vue
    <template>
        <div class="pokemon-container">
            <img
                v-if="!showPokemon"
                :src="imgSrc" 
                class="hidden-pokemon" 
                alt="pokémon"
            >
            <img 
                v-else
                :src="imgSrc" 
                class="fade-in" 
                alt="pokémon"
            >
        </div>
    </template>
    ≡
    ```
7. Generar la nueva versión de producción:
    + $ npm run build
8. Ingresar nuevamente a la página de [netlify](https://www.netlify.com) e ir a **Deploys** y arrastra la nueva versión de la aplicación.
9. Commit Video 097:
    + $ git add .
    + $ git commit -m "Commit 097: Desplegar nuestro juego en producción"
    + $ git push -u origin main

### Nota 098. Código fuente de la sección
**Contenido**: entrega del código fuente de la sección, la cual esta ubicada en **04pokemon\codigo-fuente-autor**.
1. Commit Video 098:
    + $ git add .
    + $ git commit -m "Commit 098: Código fuente de la sección"
    + $ git push -u origin main

## Sección 08: Pokemon Game - Unit Test

### Video 099. Introducción a la sección



### Nota 100. Temas puntuales de la sección
### Video 101. Pruebas con Axios
### Video 102. Pruebas en helpers
### Video 103. getPokemonNames y getPokemonOptions
### Video 104. Pruebas en PokemonPicture
### Video 105. PokemonPicture - Segunda Parte
### Video 106. Pruebas en PokemonOptions
### Video 107. Pruebas con emisiones
### Video 108. Pruebas en PokemonPage
### Video 109. Snapshot con data y stubs
### Video 110. Tarea: Pruebas de que los componentes existan
### Video 111. Pruebas las propiedades reactivas del componente
### Nota 112. Código fuente de la sección





0.30 - x
1 - 321



    ≡
    ```vue
    ```
    ```js
    ```
    npm run serve