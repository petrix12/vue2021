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