import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import BannerMarcas from "../../components/BannersMarcas/BannersMarcas";

export default function Home() {

const produtos = [
  {
    id: 1,
    nome: "Galaxy S25",
    marca: "Samsung",
    descricao: "Smartphone premium",
    preco: "R$ 5.999,00",
    imagem: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600"
  },
  {
    id: 2,
    nome: "Macbook Pro",
    marca: "Apple",
    descricao: "Notebook profissional",
    preco: "R$ 12.999,00",
    imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-og-202410"
  },
  {
    id: 3,
    nome: "PlayStation 5",
    marca: "Sony",
    descricao: "Console de nova geração",
    preco: "R$ 3.999,00",
    imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600"
  }
];

const tipoUsuario = localStorage.getItem("tipoUsuario");
const isAdmin = tipoUsuario === "admin";

  return (
    <>
      <Header />

      <div className="home">

        <BannerMarcas />

        <h1 className="titulo">
          Produtos Cadastrados
        </h1>

        <div className="produtos">

          {produtos.map(produto => (

<div className="card-produto">
  <img src={produto.imagem} alt={produto.nome} />

  <h3>{produto.nome}</h3>

  <p>{produto.descricao}</p>

  <span className="preco">{produto.preco}</span>

  <div className="marca">{produto.marca}</div>

  {isAdmin && (
    <div className="botoes">
      <button className="editar">Editar</button>
      <button className="excluir">Excluir</button>
    </div>
  )}
</div>
          ))}

        </div>

      </div>
    </>
  );
}