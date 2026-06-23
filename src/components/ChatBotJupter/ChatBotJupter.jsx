import "./ChatBotJupter.css";
import { useState } from "react";

export default function ChatBotJupter(){

    const [aberto,setAberto]=useState(false);

    return(

        <>
            <div
            className="botao-chat"
            onClick={()=>setAberto(!aberto)}
            >

                🤖

            </div>

            {

                aberto &&

                <div className="janela-chat">

                    <div className="topo-chat">

                        Jupter

                    </div>

                    <div className="mensagens">

                        Olá, sou o assistente da Space Tech.

                    </div>

                    <input
                    placeholder="Digite uma mensagem..."
                    />

                </div>

            }

        </>

    );

}