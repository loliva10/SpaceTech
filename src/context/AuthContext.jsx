import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("usuario")) || null
    );

    function login(email, senha) {

        if (
            email === "lfernandoolivaemp@outlook.com" &&
            senha === "SpaceTech10"
        ) {

            const admin = {
                nome: "Luis Fernando",
                email,
                tipo: "admin"
            };

            localStorage.setItem(
                "usuario",
                JSON.stringify(admin)
            );

            setUsuario(admin);

            return true;
        }

        if (
            email === "giovanicato@gmail.com" &&
            senha === "Cato10"
        ) {

            const comum = {
                nome: "Giovani",
                email,
                tipo: "usuario"
            };

            localStorage.setItem(
                "usuario",
                JSON.stringify(comum)
            );

            setUsuario(comum);

            return true;
        }

        return false;
    }

    function logout() {

        localStorage.removeItem("usuario");

        setUsuario(null);

    }

    return (

        <AuthContext.Provider
            value={{
                usuario,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );
}