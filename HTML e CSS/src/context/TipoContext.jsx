import { createContext, useState } from "react";

export const TipoContext = createContext();

export function TipoProvider({ children }) {

    const [tipos, setTipos] = useState(

        JSON.parse(localStorage.getItem("tipos"))

        ||

        []

    );

    function adicionarTipo(nome) {

        const lista = [

            ...tipos,

            {

                id: Date.now(),

                nome

            }

        ];

        setTipos(lista);

        localStorage.setItem(

            "tipos",

            JSON.stringify(lista)

        );

    }

    return (

        <TipoContext.Provider

            value={{
                tipos,
                adicionarTipo
            }}

        >

            {children}

        </TipoContext.Provider>

    );

}