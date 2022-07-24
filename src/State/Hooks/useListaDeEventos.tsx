import {useRecoilValue} from "recoil";
import {eventosFiltradosState} from "../eventosFiltradosState";

const useListaDeEventos = () => {
return useRecoilValue(eventosFiltradosState)

}

export default useListaDeEventos;