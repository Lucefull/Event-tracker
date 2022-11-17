import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { listaDeEventosState } from '../atom';
const useAtualizarEvento = () =>{
  const setListEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento)=>{
        return setListEventos((listaAntiga) => {
        const indice = listaAntiga.findIndex((e) => e.id === evento.id);

        return [
          ...listaAntiga.slice(0, indice),
          evento,
          ...listaAntiga.slice(indice + 1),
        ];
      })
    }
}

export default useAtualizarEvento;