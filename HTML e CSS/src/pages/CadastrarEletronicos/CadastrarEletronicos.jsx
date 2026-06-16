import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CadastrarEletronicos.css";
// import Logotipo from '../assets/Logotipo.png';

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
    if (!nome || !marca || !tipo) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    alert(
      `Produto cadastrado!\n` +
      `Nome: ${nome}\n` +
      `Marca: ${marca}\n` +
      `Tipo: ${tipo}\n` +
      `Imagem enviada: ${imagem ? imagem.name : "Nenhuma"}`
    );
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          
          Space Tech
        </div>
        <div className="nav-right">
          <div className="nav-produtos">
            <Link className="nav-link" to="/buscar">Buscar</Link> {" | "}
            <Link className="nav-link" to="/tipo-eletronicos">Tipo Eletrônicos</Link>
          </div>
          <div className="nav-divider" />
          <div className="nav-user">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </nav>

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
                Cadastro de <span>Eletronicos</span>
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
                placeholder="Digite o nome do produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </div>

          {/* Marca do Produto */}
          <div className="field">
            <div className="field-icon yellow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8920a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="field-body">
              <label className="field-label">Marca do Eletrônico <span className="req">★</span></label>
              <input
                className="field-input yellow-border"
                type="text"
                placeholder="Digite a marca do produto"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
          </div>

          {/* Tipo do Produto */}
          <div className="field">
            <div className="field-icon blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div className="field-body">
              <label className="field-label">Tipo do Eletrônico <span className="req">★</span></label>
              <div className="select-wrap">
                <select
                  className="field-select"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value="" disabled>Selecione o tipo do Eletrônico</option>
                  <option value="Smartphone">Smartphone</option>
                  <option value="Notebook">Notebook</option>
                  <option value="Televisão">Televisão</option>
                  <option value="Monitor">Monitor</option>
                  <option value="Outros">Outros</option>
                </select>
                <span className="select-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a3a8f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* NOVO: Input de Imagem do Produto */}
          {/* Input de Imagem do Produto */}
          <div className="field">
            <div className="field-icon purple">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className="field-body">
              <span className="field-label">Imagem do Produto</span>

              {/* O input real fica escondido, mas o ID conecta ele à label abaixo */}
              <input
                id="upload-imagem"
                className="input-file-hidden"
                type="file"
                accept="image/*"
                onChange={handleImagemChange}
              />

              {/* Esta label vai funcionar como o seu novo botão bonito */}
              <label htmlFor="upload-imagem" className="custom-file-upload purple-border">
                Escolha a imagem do produto
              </label>

              {/* Exibe a prévia da imagem se o usuário tiver selecionado um arquivo */}
              {preview && (
                <div className="image-preview" style={{ marginTop: '10px' }}>
                  <img
                    src={preview}
                    alt="Prévia do produto"
                  />
                </div>
              )}
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