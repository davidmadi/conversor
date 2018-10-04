import {expect} from 'chai';
import Conversor from '../src/library/conversor/index.js';
//relativo ao dir root
let conversor = new Conversor();

describe('testando conversor.test.js', _ => {

  //Testes gerais e iniciais
  let acucar = conversor.getIngredientes()[0];
  let quilo = conversor.getMedidas()[0];
  let grama = conversor.getMedidas()[1];
  let colherSopa = conversor.getMedida("colher (sopa)");
  let colherCha = conversor.getMedida("colher (chá)");
  let xicaraCha = conversor.getMedida("Xícara (chá)");
  let leite = conversor.getIngrediente("Leite");
  expect(acucar.nome).to.equals("Açucar");
  expect(quilo.nome).to.equals("quilograma");
  expect(grama.nome).to.equals("gramas");
  expect(colherSopa.nome).to.equals("colher (sopa)");
  expect(colherCha.nome).to.equals("colher (chá)");
  expect(leite.nome).to.equals("Leite");
  expect(xicaraCha.nome).to.equals("Xícara (chá)");

  it('6 medidas', () => {
    expect(conversor.getMedidas().length).to.equal(6);
  })
  it('24 ingredientes', () => {
    expect(conversor.getIngredientes().length).to.equal(24);
  })

  it('Acucar 1kg - 1000g', () => {
    conversor.setIngrediente(acucar);
    conversor.setMedidaEntrada(quilo);
    conversor.setMedidaSaida(grama);
    conversor.setEntrada("1");
    let resultado = conversor.calcularResultado();

    expect(resultado).to.equal(1000);
  })

  it('Acucar 1000g - 1kg', () => {
    conversor.setIngrediente(acucar);
    conversor.setMedidaEntrada(grama);
    conversor.setMedidaSaida(quilo);
    conversor.setEntrada("1000");
    let resultado = conversor.calcularResultado();

    expect(resultado).to.equal(1);
  })

  it('Acucar 1Colher sopa - 2colher cha', () => {
    conversor.setIngrediente(acucar);
    conversor.setMedidaEntrada(colherSopa);
    conversor.setMedidaSaida(colherCha);
    conversor.setEntrada("1");
    let resultado = conversor.calcularResultado();

    expect(resultado).to.equal(2);
  })


  it('Leite 1xicara cha - 48colher cha', () => {
    conversor.setIngrediente(leite);
    conversor.setMedidaEntrada(xicaraCha);
    conversor.setMedidaSaida(colherCha);
    conversor.setEntrada("1");
    let resultado = conversor.calcularResultado();

    expect(resultado).to.equal(48);
  })


})
