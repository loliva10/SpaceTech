import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Login from "../pages/login/login.jsx";
import CadastroEletronicos from "../pages/CadastrarEletronicos/CadastrarEletronicos.jsx";
import CadastroTipoEletronicos from "../pages/CadastrarTipoEletronicos/CadastrarTipoEletronicos.jsx";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/eletronicos" element={<CadastroEletronicos />} />
                <Route path="/tipo-eletronicos" element={<CadastroTipoEletronicos /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;