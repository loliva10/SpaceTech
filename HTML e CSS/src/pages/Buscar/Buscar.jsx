import React, { useState } from "react";
import "./Buscar.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function BuscarProduto() {

  const [busca, setBusca] = useState("");

  // futuramente virá do banco
  const produtos = [
    {
      id: 1,
      nome: "Galaxy S25",
      marca: "Samsung",
      tipo: "Smartphone",
      imagem: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600"
    },
    {
  id: 2,
  nome: "Macbook Pro",
  marca: "Apple",
  tipo: "Notebook",
  imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-og-202410"
},
    {
      id: 3,
      nome: "PlayStation 5",
      marca: "Sony",
      tipo: "Console",
      imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600"
    }
  ];

  const resultado =
  busca.trim() === ""
    ? produtos
    : produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase())
      );

  return (
    <div className="app">
      <Header />
      <div className="container">

        <div className="busca">

          <input
            type="text"
            placeholder="Buscar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <button>

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

          </button>

        </div>

<div className="produtos">

  {resultado.length > 0 ? (
    resultado.map((produto) => (
      <div className="card" key={produto.id}>
        <img src={produto.imagem} alt={produto.nome} />
        <h2>{produto.nome}</h2>
        <h3>{produto.marca}</h3>
        <p>{produto.descricao}</p>
        <span>{produto.preco}</span>
      </div>
    ))
  ) : (
    <div className="aviso-busca">
      ❌ Nenhum produto encontrado
    </div>
  )}

</div>

      </div>

    </div>
  );
}