import { eventosAsync } from './selectors/index';
import { atom } from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos';

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: eventosAsync
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key:'filtroDeEventos',
  default: {}
});
