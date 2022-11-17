import { selector } from 'recoil';
import { filtroDeEventos, listaDeEventosState } from '../atom';

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const allEvents = get(listaDeEventosState);
    const eventos = allEvents.filter((e) => {
      if (!filtro.data) {
        return (
          (filtro.status === 'completo' && e.completo === true) ||
          (filtro.status === 'incompleto' && e.completo === false) ||
          filtro.status === 'ambos'
        );
      } else {
        return (
          filtro.data.toISOString().slice(0, 10) ===
            e.inicio.toISOString().slice(0, 10) &&
          ((filtro.status === 'completo' && e.completo === true) ||
            (filtro.status === 'incompleto' && e.completo === false) ||
            filtro.status === 'ambos')
        );
      }
    });
    return eventos;
  },
});
