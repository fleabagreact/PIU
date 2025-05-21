import imagem from "../assets/nature.jpg"

function Images (){

    return(
        <>
        <figure>
            <img src="./bridge.jpg" alt="Imagem de Ponte" />
            <figcaption>Imagem de uma ponte</figcaption>
        </figure>
        <figure>
            <img src={imagem} alt="Imagem de natureza" />
            <figcaption>Imagem da Natureza</figcaption>
        </figure>
        </>
    )
}

export default Imagesaula2/src/components