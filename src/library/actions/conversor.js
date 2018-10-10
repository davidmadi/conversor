
export default class ConversorAction
{
  static setMedidaFrom(dispatch, _this, medida){
    dispatch(
    {
      type:"CONVERSOR_MEDIDAFROM",
      medidaFrom:medida
    });
  }

  static setMedidaTo(dispatch, _this, medida){
    dispatch(
    {
      type:"CONVERSOR_MEDIDATO",
      medidaTo:medida
    });
  }

  static setIngrediente(dispatch, _this, ingrediente){
    dispatch(
    {
      type:"CONVERSOR_INGREDIENTE",
      ingrediente:ingrediente
    });
  }

  static setQuantidade(dispatch, _this, text){
    dispatch(
    {
      type:"CONVERSOR_QUANTIDADE",
      quantidade:text
    });
  }

  static plusQuantidade(dispatch, _this){

    let currQuantity = parseInt(_this.props.quantidade);
    let add = ConversorAction.addQty(currQuantity);
    currQuantity =  currQuantity + add;

    dispatch({
      type:"CONVERSOR_QUANTIDADE",
      quantidade: currQuantity
    });
  }

  static minusQuantidade(dispatch, _this){

    let currQuantity = parseInt(_this.props.quantidade);
    let add = ConversorAction.addQty(currQuantity);
    currQuantity =  currQuantity + (add * -1);

    dispatch({
      type:"CONVERSOR_QUANTIDADE",
      quantidade: currQuantity
    });
  }

  static addQty(currQuantity){
    if (currQuantity >= 1000){//1000
      return 100;
    }
    else if (currQuantity > 99 && currQuantity < 1000){//100
      return 10;
    }
    else if (currQuantity >= 50 && currQuantity < 99){
      return 5;
    }
    else
      return 1;
  }
}