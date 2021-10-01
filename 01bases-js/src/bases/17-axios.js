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