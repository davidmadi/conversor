
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
    dispatch(
    {
      type:"CONVERSOR_QUANTIDADE",
      quantidade: parseInt(_this.props.quantidade) +1
    });
  }

  static minusQuantidade(dispatch, _this){
    dispatch(
    {
      type:"CONVERSOR_QUANTIDADE",
      quantidade: parseInt(_this.props.quantidade) - 1
    });
  }

}