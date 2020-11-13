import livros from "../Services/Dados"

const Lista = () => {
    return (
        <div>
            {livros.map(livro =>
                <div key={livro.id}>

                    <img src={livro.capa} alt="Capa do livro" width="300px"/>
                    <h2>{livro.nome}</h2>
                    <h3>{livro.autor}</h3>
                    <p>{livro.ano}</p>

                </div>

            )}
        </div>
    )
}

export default Lista