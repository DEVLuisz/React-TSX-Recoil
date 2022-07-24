import {useSetRecoilState} from "recoil";
import {listaDeEveventosState} from "../Atom";
import {IEvento} from "../../interfaces/IEvento";
import {obterId} from "../../Utils";

const useAdicionarEvento =() =>{

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEveventosState);

    return(evento : IEvento) =>{

       const hoje = new Date();
       if(evento.inicio < hoje){
           throw new Error("Não se pode cadastrar eventos do passado!")
       }

        evento.id = obterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }

}

export default useAdicionarEvento;