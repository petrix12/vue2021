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