import React, { useState } from "react";
import "./CadastrarTipoEletronicos.css";
import { Link } from "react-router-dom";   
import Header from "../../components/Header/Header";

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  // Estados para o upload de imagem
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);

  // Função para gerenciar a seleção da imagem
  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      // Cria uma URL temporária para exibir a prévia da imagem na tela
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCadastrar = () => {
    if (!nome) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    alert(
      `Produto cadastrado!\n` +
      `Nome: ${nome}\n` 
    );
  };

  return (
    <div className="app">
      <Header />

      {/* MAIN */}
      <main className="main">
        {/* Flag decoration */}
        <div className="flag-deco">
          <svg width="360" height="360" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>

        {/* CARD */}
        <div className="card">
          {/* Header */}
          <div className="card-header">
            <div className="header-top">
              <div className="tag-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <h1 className="card-title">
                Cadastro de <span>Tipo de Eletronico</span>
              </h1>
            </div>
            <div className="title-divider">
              <div className="divider-line" />
              <span className="star">★</span>
              <div className="divider-line" />
            </div>
            <p className="card-sub">Preencha os dados abaixo para cadastrar um novo Eletronico.</p>
          </div>

          {/* Nome do Produto */}
          <div className="field">
            <div className="field-icon green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <div className="field-body">
              <label className="field-label">Nome do Eletrônico <span className="req">★</span></label>
              <input
                className="field-input green-border"
                type="text"
                placeholder="Digite o nome do Eletronico"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </div>

          

          

          {/* Button */}
          <button className="btn-cadastrar" onClick={handleCadastrar}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Cadastrar Produto
          </button>
        </div>
      </main>
    </div>
  );
}