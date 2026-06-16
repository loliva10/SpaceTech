import React from 'react';
import estilos from './login.module.css';
import LogoTipoStartup from "../../assets/LogoTipo.png";

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você adiciona a lógica de autenticação
        console.log('Tentativa de login enviada');
    };

    return (
        <div className={estilos.body}>
            <div className={estilos.ContainerLogin}>
                <div className={estilos.ladoEsquerdo}>
                </div>
                <div className={estilos.ladoDireito}>
                    <div className={estilos.AreaLogo}>
                        <div className={estilos.logoPlaceholder}>
                            <img
                                src={LogoTipoStartup}
                                alt="Logo da Startup"
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
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="Ex: exemplo123@gmail.com" required />
                        </div>
                        <div className={estilos.inputG}>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="Sua senha secreta" required />
                        </div>
                        <div className={estilos.EscSenha}>
                            <a href="#forgot">Esqueceu a senha?</a>
                        </div>
                        <button type="submit" className={estilos.btnSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}