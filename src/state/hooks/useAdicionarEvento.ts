import { listaDeEventosState } from './../atom';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { obterId } from '../../util';
const useAdicionarEvento = () =>{
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) =>{
    const today = new Date();
    if(evento.inicio<today){
        throw new Error("Eventos não podem ser retroativos!")
    }
    evento.id = obterId();
    return setListaDeEventos(e=>[...e, evento])
  }

}

export default useAdicionarEvento;