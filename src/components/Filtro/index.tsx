import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {
  const [data, setData] = useState<undefined | string>('');
  const [status, setStatus] = useState<'completo' | 'incompleto' | 'ambos'>(
    'ambos'
  );
  const setFiltroDeEventos =
    useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltroDeEventos = {};

    filtro.data = data ? new Date(data) : null;

    filtro.status = status;

    setFiltroDeEventos(filtro);
  };

  const statusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'incompleto' || value === 'completo' || value === 'ambos') {
      setStatus(value);
    }
  };
  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />
      <select value={status} onChange={statusChange}>
        <option value={'ambos'}>NENHUM</option>
        <option value={'completo'}>COMPLETO</option>
        <option value={'incompleto'}>INCOMPLETO</option>
      </select>

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
