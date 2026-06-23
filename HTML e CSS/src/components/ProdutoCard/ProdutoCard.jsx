import "./ProdutoCard.css";

export default function ProdutoCard({ produto }) {

    return (

        <div className="produto-card">

            <img
                src={produto.imagem}
                alt={produto.nome}
            />

            <h3>{produto.nome}</h3>

            <span>{produto.marca}</span>

            <p>{produto.descricao}</p>

            <strong>
                R$ {produto.preco}
            </strong>

        </div>

    );
}