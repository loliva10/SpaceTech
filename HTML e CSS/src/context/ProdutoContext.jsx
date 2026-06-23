import { createContext, useState } from "react";

export const ProdutoContext = createContext();

export function ProdutoProvider({ children }) {

    const [produtos, setProdutos] = useState(

        JSON.parse(localStorage.getItem("produtos"))

        ||

        []

    );

    function adicionarProduto(produto) {

        const lista = [

            ...produtos,

            {
                id: Date.now(),
                ...produto
            }

        ];

        setProdutos(lista);

        localStorage.setItem(
            "produtos",
            JSON.stringify(lista)
        );

    }

    function excluirProduto(id) {

        const novaLista = produtos.filter(
            produto => produto.id !== id
        );

        setProdutos(novaLista);

        localStorage.setItem(
            "produtos",
            JSON.stringify(novaLista)
        );

    }

    function editarProduto(produtoAtualizado) {

        const lista = produtos.map(produto =>

            produto.id === produtoAtualizado.id
                ? produtoAtualizado
                : produto

        );

        setProdutos(lista);

        localStorage.setItem(
            "produtos",
            JSON.stringify(lista)
        );

    }

    return (

        <ProdutoContext.Provider

            value={{
                produtos,
                adicionarProduto,
                excluirProduto,
                editarProduto
            }}

        >

            {children}

        </ProdutoContext.Provider>

    );

}