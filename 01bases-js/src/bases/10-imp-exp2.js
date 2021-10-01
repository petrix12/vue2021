    // Importación por defecto
    import superHeroes from './data/heroes'
    console.log(superHeroes)

    // getHeroById(id)  find
    const getHeroById = (id) => superHeroes.find(hero => hero.id === id)
    console.log(getHeroById(2))

    // getHeroByOwner('DC' o 'Marvel') filter
    const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
    console.log(getHeroByOwner('DC'))