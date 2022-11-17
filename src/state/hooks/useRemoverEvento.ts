import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { listaDeEventosState } from './../atom';
const useRemoverEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    setListaEventos((listaAntiga) =>
      listaAntiga.filter((e) => e.id !== evento.id)
    );
  };
};

export default useRemoverEvento;
