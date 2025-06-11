import "./Card.css"

export default function Card(){
    let screen = "https://i.pinimg.com/736x/82/48/ea/8248ea61f8128583a627a356f0c6a45d.jpg"

    return(
        <div>
            <figure>
                <img src={screen} alt="Imagem abstrata de corrente" />
                <figcaption>Taylor fazendo compras no Ligzarb</figcaption>
            </figure>
        </div>
    )
}