<template>
<div class="hello">
	<img src="logo_spp.png" alt="Logo Soluciones++">
	<h1>{{ msg }}</h1>
	<p>
		Trabajos realizados con la intención de profundizar en Vue.Js
	</p>
	<h3>Proyectos:</h3>
	<ul>
		<li><a href="https://solucionespp-pokemon.netlify.app" target="_blank" rel="noopener">¿Quién es este pokémon?</a></li>
		<li><a href="https://vue3-rick-and-morty.netlify.app" target="_blank" rel="noopener">Rick And Morty</a></li>
		<li><a href="https://solucionespp-vue3-net-core.netlify.app" target="_blank" rel="noopener">Lista de tareas</a></li>
	</ul>
	<h3>Repositorios:</h3>
	<ul>
		<li><a href="https://github.com/petrix12/vue2021.git" target="_blank" rel="noopener">Repositorio GitHub Vue.js: De cero a experto</a></li>
	</ul>
	<h3>Documentación</h3>
	<ul>
		<li><a href="https://github.com/petrix12/vue2021/blob/main/apuntes.md" target="_blank" rel="noopener">Documentación Vue.js: De cero a experto</a></li>
	</ul>
</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>