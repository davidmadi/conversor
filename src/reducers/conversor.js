import { Map, List, Set } from 'immutable';
import Conversor from '../library/conversor/index';


function initialState(){
  const conversorInstance = new Conversor();
  return {
    conversor : conversorInstance,
    medidaFrom : null,
    medidaTo : null,
    ingrediente : null,
    quantidade : '1',
    resultado : null,
    allMedidasFrom : conversorInstance.getMedidas(),
    allMedidasTo : conversorInstance.getMedidas(),
    allIngredientes : conversorInstance.getIngredientes(),
  }
}

export default (state = initialState(), action) =>{//sem nome mesmo
  let map = Map(state);

  switch (action.type) {
    case 'CONVERSOR_MEDIDAFROM':
      state.allMedidasFrom.forEach(m => m.selecionado = false);
      action.medidaFrom.selecionado = true;//mesma instancia do item do array
      map = map.set('allMedidasFrom', state.allMedidasFrom.slice())
        .set('medidaFrom', action.medidaFrom);
      state.conversor.setMedidaEntrada(action.medidaFrom);
      state = map.toObject();
      break;
    case 'CONVERSOR_MEDIDATO':
      state.allMedidasTo.forEach(m => m.selecionado = false);
      action.medidaTo.selecionado = true;//mesma instancia do item do array
      map = map.set('medidaTo', action.medidaTo)
        .set('allMedidasTo', state.allMedidasTo.slice());
      state.conversor.setMedidaSaida(action.medidaTo);
      state = map.toObject();
      break;
    case 'CONVERSOR_INGREDIENTE':
      state.allIngredientes.forEach(m => m.selecionado = false);
      action.ingrediente.selecionado = true;
      map = map.set('ingrediente', action.ingrediente)
        .set('allIngredientes', state.allIngredientes.slice());
      state.conversor.setIngrediente(action.ingrediente);
      state = map.toObject();
      break;
    case 'CONVERSOR_QUANTIDADE':
      state = map.set('quantidade', action.quantidade+"").toObject();
      break;
    case 'CONVERSOR_RESULTADO':
      state = map.set('resultado', action.resultado).toObject();
      break;
  }

  if (state.ingrediente && state.medidaFrom && state.medidaTo && state.quantidade)
  {
    map = Map(state);
    state.conversor.setEntrada(state.quantidade);
    let resultado = state.conversor.calcularResultado() + "";
    state = map.set('resultado', resultado).toObject();
  }


  return state;
}