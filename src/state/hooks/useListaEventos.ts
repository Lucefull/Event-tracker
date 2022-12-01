import { useRecoilValue } from 'recoil';
import { eventosFiltradosState } from '../selectors';
const useListaEventos = () =>{
  
  return useRecoilValue(eventosFiltradosState)
}

export default useListaEventos;