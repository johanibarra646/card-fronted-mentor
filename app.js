
const card = document.querySelector('.card')

const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1, 151)}`)
        const data = await res.json()
        const pokemon = {
            image: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            vida: data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            especial: data.stats[2].base_stat,
            defensa: data.stats[3].base_stat,
        }
        pintarcard(pokemon)
       
    } catch (error) {
        console.log(error)
    }
    
}

fetchData()


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


  const pintarcard = (pokemon) => {
    const flex = document.querySelector('.flex')
    const template_card = document.querySelector('#template-card').content
    const clone = template_card.cloneNode(true)
    const fragment = document.createDocumentFragment()
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.image)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.vida}hp</span>`
    clone.querySelector('.card-body-text').textContent = pokemon.experiencia + 'Exp'
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + 'K'
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial + 'K'
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa + 'K'
    fragment.appendChild(clone)
    flex.appendChild(fragment)

    console.log(pokemon)

  }