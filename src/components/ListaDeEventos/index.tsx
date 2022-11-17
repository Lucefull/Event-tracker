import React from 'react';
import useListaEventos from '../../state/hooks/useListaEventos';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';

const ListaDeEventos: React.FC = () => {
  const eventos = useListaEventos();

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
