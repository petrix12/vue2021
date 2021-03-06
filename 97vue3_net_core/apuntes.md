# Aplicación de tareas con Vue 3 + Net Core + EFC
+ **URL Curso**: https://www.udemy.com/course/vue3-netcore
+ **URL Repositorio**: https://github.com/petrix12/vue3_net_core2021.git
+ **URL App en producción**: https://solucionespp-vue3-net-core.netlify.app

## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **vue3_net_core2021**.
    + **Description**: Proyecto para seguir el curso de "Aplicación de tareas con Vue 3 + Net Core + EFC", de Tomas Ruiz Diaz en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Commit 00: Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/vue3_net_core2021.git
    + $ git push -u origin main

## Sección 1: FrontEnd

### Video 01. Instalación NodeJS y VueCLI
1. Programas requeridos:
    + [Node Js](https://nodejs.org)
    + [Visual Studio Code](https://code.visualstudio.com/download)
    + [Visual Studio 2019](https://visualstudio.microsoft.com/es/vs)
        + **Nota 1**: descargar la versión **Community 2019**.
        + **Nota 2**: durante la instalación seleccionar "Desarrollo de ASP.NET y web"
    + [SDK Net Core](https://dotnet.microsoft.com/download)
        + Nota: descargar el **SDK Net Cote 3.1**.
    + [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
    + [Microsft SQL Express](https://www.microsoft.com/es-es/sql-server/sql-server-downloads)
        + **Nota 1**: antes descargar e intalar **SQL Server Management Studio**.
        + **Nota 2**: realizar la instalación básica.
        + Copiar los datos de conexión:
            + **Cadena de conexión**: Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;
2. Instalación de **Vue CLI**:
    + Abrir terminal como administrador.
    + $ npm install -g @vue/cli
        + [Vue CLI](https://cli.vuejs.org/guide/installation.html)
3. Consultar las versiones de los programas:
    + Node Js:
        + $ node --version
    + NPM:
        + $ npm --version
    + Vue CLI:
        + $ vue --version
4. Commit Video 01:
    + $ git add .
    + $ git commit -m "Commit 01: Instalación NodeJS y VueCLI"
    + $ git push -u origin main

### Video 02. Creación del Proyecto - Instalación de extensiones y agregamos bootstrap
1. Crear proyecto:
    + $ vue create 29vue3_net_core
    + Seleccionar: Default (Vue 3) ([Vue 3] babel, eslint)
2. Ingresar y levantar el proyecto:
    + $ cd 29vue3_net_core
    + $ npm run serve
3. Instalar las siguientes extensiones de VSCode:
    + Vetur v0.35.0
        + Pine Wu
        + Vue tooling for VS Code
    + Vue VSCode Snippets v2.2.1
        + sarah.drasner
        + Snippets that will supercharge your Vue workflow
4. Commit Video 02:
    + $ git add .
    + $ git commit -m "Commit 02: Creación del Proyecto - Instalación de extensiones y agregamos bootstrap"
    + $ git push -u origin main

### Video 03. Creación TareaComponent y Agregamos bootstrap
1. Agregar el CDN (solo CSS) de Bootstrap en **public\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <title><%= htmlWebpackPlugin.options.title %></title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <noscript>
            <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
    </body>
    </html>
    ```
    + https://getbootstrap.com/docs/5.1/getting-started/introduction
2. Eliminar el componente **src\components\HelloWorld.vue**.
3. Modificar **src\App.vue**:
    ```vue
    <template>
        <Tarea />
    </template>

    <script>
    import Tarea from '@/components/Tarea'

    export default {
        name: 'App',
        components: {
            Tarea
        }
    }
    </script>

    <style>
    </style>
    ```
4. Crear el componente **src\components\Tarea.vue**:
    ```vue
    <template>
        <div>
            <h1>Soluciones++</h1>
        </div>
    </template>

    <script>
        export default {
            name: 'Tarea'
        }
    </script>

    <style scoped>

    </style>
    ```
5. Commit Video 03:
    + $ git add .
    + $ git commit -m "Commit 03: Creación TareaComponent y Agregamos bootstrap"
    + $ git push -u origin main

### Video 04. TareaComponent HTML
1. Modificar **src\components\Tarea.vue**:
    ```vue
    <template>
        <div>
            <h1 class="display-4 text-center">Lista de tareas</h1>
            <hr>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="card mt-4">
                        <div class="card-body">
                            <div class="input-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Agregar tarea">
                                <div class="input-group-append">
                                    <button class="btn btn-success btn-lg">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    ≡
    ```
2. Commit Video 04:
    + $ git add .
    + $ git commit -m "Commit 04: TareaComponent HTML"
    + $ git push -u origin main

### Video 05. Agregamos FontAwesome
1. Agregar el CDN de FontAwesome en **public\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <title><%= htmlWebpackPlugin.options.title %></title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    </head>
    <body>
        <noscript>
            <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
    </body>
    </html>
    ```
    + https://fontawesome.com/v5.15/how-to-use/customizing-wordpress/snippets/setup-cdn-webfont
2. Modificar **src\components\Tarea.vue**:
    ```vue
    <template>
        <div>
            <h1 class="display-4 text-center">Lista de tareas</h1>
            <hr>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="card mt-4">
                        <div class="card-body">
                            <div class="input-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Agregar tarea">
                                <div class="input-group-append">
                                    <button class="btn btn-success btn-lg">Agregar</button>
                                </div>
                            </div>
                            <br>
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between">
                                    <div>
                                        <span class="cursor">
                                            <i class="far fa-circle"></i>
                                        </span>
                                        Tareas Soluciones++
                                    </div>
                                    <span class="text-danger cursor">
                                        <i class="fas fa-trash-alt"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    ≡
    ```
    + https://fontawesome.com/v5.15/icons
3. Commit Video 05:
    + $ git add .
    + $ git commit -m "Commit 05: Agregamos FontAwesome"
    + $ git push -u origin main

### Video 06. Agregamos tarea a la lista
1. Modificar **src\components\Tarea.vue**:
    ```vue
    <template>
        <div>
            <h1 class="display-4 text-center">Lista de tareas</h1>
            <hr>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="card mt-4">
                        <div class="card-body">
                            <div class="input-group">
                                <input 
                                    type="text"
                                    v-model="tarea"
                                    class="form-control form-control-lg" 
                                    placeholder="Agregar tarea"
                                >
                                <div class="input-group-append">
                                    <button 
                                        class="btn btn-success btn-lg"
                                        v-on:click="agregarTarea()"
                                    >Agregar</button>
                                </div>
                            </div>
                            <br>
                            <ul class="list-group">
                                <li 
                                    v-for="(tarea, index) of listTareas" :key="index"
                                    class="list-group-item d-flex justify-content-between"
                                >
                                    <div>
                                        <span class="cursor">
                                            <i class="far fa-circle"></i>
                                        </span>
                                        {{ tarea.nombre }}
                                    </div>
                                    <span class="text-danger cursor">
                                        <i class="fas fa-trash-alt"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        export default {
            name: 'Tarea',
            data() {
                return {
                    tarea: '',
                    listTareas: []
                }
            },
            methods: {
                agregarTarea() {
                    const tarea = {
                        nombre: this.tarea,
                        estado: false
                    }
                    this.listTareas.push(tarea)
                    this.tarea = ''
                }
            }
        }
    </script>

    <style scoped>
        .cursor {
            cursor: pointer;
        }
    </style>
    ```
2. Commit Video 06:
    + $ git add .
    + $ git commit -m "Commit 06: Agregamos tarea a la lista"
    + $ git push -u origin main

### Video 07. Eliminar Tarea
1. Modificar **src\components\Tarea.vue**:
    ```vue
    <template>
        <div>
            <h1 class="display-4 text-center">Lista de tareas</h1>
            <hr>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="card mt-4">
                        <div class="card-body">
                            ≡
                            <br>
                            <h5 v-if="listTareas.length == 0">No hay tareas para realizar</h5>
                            <ul class="list-group">
                                <li 
                                    v-for="(tarea, index) of listTareas" :key="index"
                                    class="list-group-item d-flex justify-content-between"
                                >
                                    ≡
                                    <span class="text-danger cursor" v-on:click="eliminarTarea(index)">
                                        <i class="fas fa-trash-alt"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        export default {
            ≡
            methods: {
                ≡
                eliminarTarea(index){
                    this.listTareas.splice(index, 1)
                }
            }
        }
    </script>
    ≡
    ```
2. Commit Video 07:
    + $ git add .
    + $ git commit -m "Commit 07: Eliminar Tarea"
    + $ git push -u origin main

### Video 08. Editar Tarea
1. Modificar **src\components\Tarea.vue**:
    ```vue
    <template>
        <div>
            <h1 class="display-4 text-center">Lista de tareas</h1>
            <hr>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="card mt-4">
                        <div class="card-body">
                            <div class="input-group">
                                <input 
                                    type="text"
                                    v-model="tarea"
                                    class="form-control form-control-lg" 
                                    placeholder="Agregar tarea"
                                >
                                <div class="input-group-append">
                                    <button 
                                        class="btn btn-success btn-lg"
                                        v-on:click="agregarTarea()"
                                    >Agregar</button>
                                </div>
                            </div>
                            <br>
                            <h5 v-if="listTareas.length == 0">No hay tareas para realizar</h5>
                            <!-- {{ listTareas }} -->
                            <ul class="list-group">
                                <li 
                                    v-for="(tarea, index) of listTareas" :key="index"
                                    class="list-group-item d-flex justify-content-between"
                                >
                                    <div>
                                        <span 
                                            class="cursor"
                                            v-bind:class="{'text-success' : tarea.estado}"
                                            v-on:click="editarTarea(tarea, index)"
                                        >
                                            <i v-bind:class="[tarea.estado ? 'fas fa-check-circle' : 'far fa-circle']"></i>
                                        </span>
                                        {{ tarea.nombre }}
                                    </div>
                                    <span class="text-danger cursor" v-on:click="eliminarTarea(index)">
                                        <i class="fas fa-trash-alt"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        export default {
            name: 'Tarea',
            data() {
                return {
                    tarea: '',
                    listTareas: []
                }
            },
            methods: {
                agregarTarea() {
                    const tarea = {
                        nombre: this.tarea,
                        estado: false
                    }
                    this.listTareas.push(tarea)
                    this.tarea = ''
                },
                eliminarTarea(index){
                    this.listTareas.splice(index, 1)
                },
                editarTarea(tarea, index){
                    this.listTareas[index].estado = !tarea.estado
                }
            }
        }
    </script>

    <style scoped>
        .cursor {
            cursor: pointer;
        }
    </style>
    ```
2. Commit Video 08:
    + $ git add .
    + $ git commit -m "Commit 08: Editar Tarea"
    + $ git push -u origin main

### Video 09. Deploy
1. Compilar el proyecto para producción:
    + $ npm run build
    + **Nota**: esta acción genera un proyecto optimizado para producción ubicado en **dist**.
2. Ir a la página de [netlify](https://www.netlify.com), iniciar sesión e ir a **Site**.
3. Arrastrar la carpeta para distribución **dist** en la página de netlify.
4. Ir a **Site settings** y luego a **Change site name** y cambiar el **Site name** a **solucionespp-vue3-net-core**.
    + **Nota**: ahora podemos ver nuestra aplicación en producción en: https://solucionespp-vue3-net-core.netlify.app
5. Commit Video 09:
    + $ git add .
    + $ git commit -m "Commit 09: Deploy"
    + $ git push -u origin main

## Sección 2: BackEnd

### Video 10. Creación del BackEnd
+ https://visualstudio.microsoft.com/es/vs
+ https://dotnet.microsoft.com/download
+ https://www.microsoft.com/es-es/sql-server/sql-server-downloads
+ https://www.youtube.com/watch?v=iYBXDQvIgTk
+ https://www.youtube.com/watch?v=Wktc7m7rX0s
1. Ejecutar **Visual Studio 2019** y crear un nuevo proyecto **ASP.NET Core Web API**. <!-- (ASP.NET Core Web Application) -->
2. Configuración del nuevo proyecto:
    + Nombre del proyecto: backend-tarea
    + Ubicación: C:\xampp\htdocs\cursos\29vue3_net_core\backend
3. Commit Video 10:
    + $ git add .
    + $ git commit -m "Commit 10: Creación del BackEnd"
    + $ git push -u origin main

### Video 11. Creación del Modelo
+ https://www.entityframeworktutorial.net/code-first/dataannotation-in-code-first.aspx
1. En el proyecto **backend-tarea**:
    + Agregar carpeta: **Models**.
        + Agregar clase: **Tarea.cs**.
2. Definir clase **backend\backend-tarea\backend-tarea\Models\Tarea.cs**:
    ```cs
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    namespace backend_tarea.Models
    {
        public class Tarea
        {
            public int Id { get; set; }
            [Required]
            [Column(TypeName = "varchar(100)")]
            public string Nombre { get; set; }
            [Required]
            public bool Estado { get; set; }
        }
    }
    ```
3. Eliminar clase **backend\backend-tarea\backend-tarea\WeatherForecast.cs**.
4. Crear controlador **Controlador de API con acciones de lectura y escritura**:
    + backend\backend-tarea\backend-tarea\Controllers\DefaultController.cs
5. Eliminar controlador **backend\backend-tarea\backend-tarea\Controllers\WeatherForecastController.cs**.
6. Programar el controlador **backend\backend-tarea\backend-tarea\Controllers\DefaultController.cs**:
    ```cs
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    // For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

    namespace backend_tarea.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class DefaultController : ControllerBase
        {
            // GET: api/<DefaultController>
            [HttpGet]
            public string Get()
            {
                return "Aplication corriendo..";
            }
        }
    }
    ```
7. Modificar el archivo de propiedades **backend\backend-tarea\backend-tarea\Properties\launchSettings.json**:
    + Cambiar:
    ```json
    "launchUrl": "weatherforecast",
    ```
    + Por:
    ```json
    "launchUrl": "api/Default",
    ```
8. Compilar (**► IIS Express**) la aplicación para verificar que todo sigue funcionando correctamente.
9. Commit Video 11:
    + $ git add .
    + $ git commit -m "Commit 11: Creación del Modelo"
    + $ git push -u origin main

### Video 12. Instalacion de dependencias
1. Ubicados en el proyecto **backend-tarea** en **Visual Studio 2019**:
    + Ir a **Herramientas > Administrador de paquetes NuGet > Administrar paquete NuGet para solución...**.
    + Ir a la pestaña **Examinar** y buscar las siguientes dependencias e instalarlas:
        + Microsoft.EntityFrameworkCore.
        + Microsoft.EntityFrameworkCore.Tools.
        + Microsoft.EntityFrameworkCore.SqlServer
2. Commit Video 12:
    + $ git add .
    + $ git commit -m "Commit 12: Instalacion de dependencias"
    + $ git push -u origin main

### Video 13. Creación del DbContext y Migraciones
1. Crear clase **backend\backend-tarea\backend-tarea\Context\AplicationDbContext.cs**:
    ```cs
    ```
2. dddd

3. Commit Video 13:
    + $ git add .
    + $ git commit -m "Commit 13: Creación del DbContext y Migraciones"
    + $ git push -u origin main

### Video 14. Creación TareaController y Get Tareas
### Video 15. POST Guardar Tarea
### Video 16. PUT Actualizar Tarea
### Video 17. DELETE Tarea
### Video 18. Cors

## Sección 3: Integración FrontEnd y BackEnd

### 19. Instalación Axios y obtenemos las tareas
### 20. Integramos eliminar tarea
### 21. Integramos guardar tarea
### 22. Integramos actualizar tarea
### 23. Deploy BackEnd Azure
### 24. Deploy FrontEnd
### 25. Conexión remota SQLServer (Azure)
### 26. Despedida


    ≡
    ```vue
    ```
    ```js
    ```
    npm run serve

## Comandos Git:
+ Historial de commit:
    + git log --pretty=oneline
+ Borrar ultimo commit:
    + git reset HEAD^ --soft
+ Forzar push
    + git push origin -f


Centro de documentación Sefar