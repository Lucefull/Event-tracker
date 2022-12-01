import { selector } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
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
          (filtro.status === 'ambos' || filtro.status === undefined)
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

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const res = await fetch('http://localhost:8080/eventos');
    const eventosJson: IEvento[] = await res.json();
    return eventosJson.map((evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim),
    }))
  },
});
