import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import estilos from "./login.module.css";
import LogoTipoStartup from "../../assets/LogoTipo.png";
import PrivateRoute from "../../routes/PrivateRoute";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !senha) {
            alert("Preencha todos os campos.");
            return;
        }

        // ADMIN
        if (
            email === "admin@gmail.com" &&
            senha === "123456"
        ) {

localStorage.setItem("tipoUsuario", "admin");
localStorage.setItem("emailUsuario", email);

navigate("/eletronicos", { replace: true }); 


alert("Login realizado com sucesso!");
            return;
        }

        // USUÁRIO COMUM
        if (
            email === "giovanicato@gmail.com" &&
            senha === "Cato10"
        ) {

            localStorage.setItem("tipoUsuario", "usuario");
localStorage.setItem("emailUsuario", email);

navigate("/buscar", { replace: true });
            alert("Login realizado com sucesso!");

            return;
        }

        alert("E-mail ou senha incorretos.");
    };

    return (
        <div className={estilos.body}>
            <div className={estilos.ContainerLogin}>

                {/* Lado esquerdo */}
                <div className={estilos.ladoEsquerdo}>
                </div>

                {/* Lado direito */}
                <div className={estilos.ladoDireito}>

                    <div className={estilos.AreaLogo}>
                        <div className={estilos.logoPlaceholder}>
                            <img
                                src={LogoTipoStartup}
                                alt="Logo da Space Tech"
                                style={{
                                    width: "120px",
                                    height: "auto"
                                }}
                            />
                        </div>

                        <h2>Entrar</h2>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className={estilos.inputG}>
                            <label htmlFor="email">
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Ex: exemplo@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={estilos.inputG}>
                            <label htmlFor="password">
                                Senha
                            </label>

                            <input
                                type="password"
                                id="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <div className={estilos.EscSenha}>
                            <a href="#">
                                Esqueceu a senha?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className={estilos.btnSubmit}
                        >
                            LOGIN
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}