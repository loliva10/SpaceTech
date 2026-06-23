import Header from "../../components/Header/Header";
import "./Conta.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Conta() {

const tipoUsuario = localStorage.getItem("tipoUsuario");
const email = localStorage.getItem("emailUsuario");

const usuario = {
    nome: email === "admin@gmail.com"
        ? "Administrador do Sistema"
        : "Usuário do Sistema",

    email: email,

    cargo: tipoUsuario === "admin"
        ? "Administrador"
        : "Usuário"
};

const navigate = useNavigate();
const handleLogout = () => {
    localStorage.removeItem("tipoUsuario");
    localStorage.removeItem("emailUsuario");

    navigate("/");
};

    return (

        <div className="conta">
            <Header />
            <div className="perfil">

                <div className="foto">

                    <svg
                        width="90"
                        height="90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#011752"
                        strokeWidth="2"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>

                </div>

                <h1>
                    {usuario.nome}
                </h1>

                <h2>
                    {usuario.email}
                </h2>

                <span>
                    {usuario.cargo}
                </span>

                <button onClick={handleLogout}>
    Sair da Conta
</button>

            </div>

        </div>

    );

}