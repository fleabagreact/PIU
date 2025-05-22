import { useState } from 'react'
import Card from './Card'
import './Gallery.css'

import amora from '../assets/characters/amora.jpg'
import elphaba from '../assets/characters/elphaba.jpg'
import lestat from '../assets/characters/lestat.jpg'
import effie from '../assets/characters/effie.jpg'
import sylvie from '../assets/characters/sylvie.jpg'
import maren from '../assets/characters/maren.jpg'

const characters = [
  {
    id: 1,
    name: 'Amora',
    origin: 'Marvel Comics',
    image: amora,
    description: 'Amora, também conhecida como Encantor, é uma poderosa feiticeira Asgardiana e uma das principais vilãs do Thor nos quadrinhos da Marvel. Possui habilidades mágicas extraordinárias e é conhecida por sua beleza e manipulação.'
  },
  {
    id: 2,
    name: 'Elphaba',
    origin: 'Wicked',
    image: elphaba,
    description: 'Elphaba Thropp, a futura Bruxa Má do Oeste, é a protagonista do musical Wicked. Uma jovem inteligente e apaixonada com pele verde, que luta contra a discriminação e a corrupção em Oz antes de ser mal-entendida e rotulada como "má".'
  },
  {
    id: 3,
    name: 'Lestat',
    origin: 'Entrevista com o Vampiro',
    image: lestat,
    description: 'Lestat de Lioncourt é um vampiro carismático e rebelde da série Crônicas Vampirescas de Anne Rice. De nobre francês a roqueiro vampiro, Lestat desafia as convenções vampíricas com seu estilo de vida extravagante e filosofia de vida.'
  },
  {
    id: 4,
    name: 'Effie',
    origin: 'Jogos Vorazes',
    image: effie,
    description: 'Effie Trinket é a excêntrica e colorida acompanhante do Distrito 12 nos Jogos Vorazes. Conhecida por seu estilo fashion distrital e pelo icônico "Que a sorte esteja sempre a seu favor", ela evolui de uma figura superficial para uma aliada comprometida.'
  },
  {
    id: 5,
    name: 'Sylvie',
    origin: 'Loki (Marvel)',
    image: sylvie,
    description: 'Sylvie Laufeydottir é uma variante feminina de Loki que aparece na série da Disney+. Fugitiva da Autoridade de Variância Temporal, ela desenvolveu habilidades de encantamento únicas e está determinada a destruir a linha do tempo sagrada.'
  },
  {
    id: 6,
    name: 'Maren',
    origin: 'Bones and All',
    image: maren,
    description: 'Maren Yearly é uma jovem canibal em busca de respostas sobre seu passado e natureza. Em sua jornada pelos EUA dos anos 1980, ela descobre o amor e tenta reconciliar seus instintos com sua humanidade.'
  }
]

function Gallery({ theme }) {
    const [flippedId, setFlippedId] = useState(null)
  
    const handleCardClick = (id) => {
      if (id === flippedId) {
        setFlippedId(null)
      } 
      else {
        setFlippedId(id)
      }
    }
  
    return (
      <div className="gallery">
        {characters.map(character => (
          <Card
            key={character.id}
            character={character}
            isFlipped={character.id === flippedId}
            onClick={() => handleCardClick(character.id)}
            theme={theme}
          />
        ))}
      </div>
    )
  }
  
  export default Gallery
  