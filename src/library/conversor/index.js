let PESO = 1;
let VOLUME = 0;
let ingredientes = new Array();
let medidas = new Array();
let selectIngredientes;
let selectMedidasEntrada;
let selectMedidasSaida;
let inputEntrada;
let inputSaida;
let ingredienteSelecionado;
let medidaEntrada;
let medidaSaida;

export default class Conversor
{

  constructor(){
    ingredientes = [];
    ingredientes.push(new Ingrediente("Açúcar", false, [180, 10, 5, 150], require('../../../assets/icons/acucar.png'), 14));
    ingredientes.push(new Ingrediente("Água", true, [240, 15, 2.5, 200], require('../../../assets/icons/agua.png'), 14));
    ingredientes.push(new Ingrediente("Amendoim cru", false, [160, 10, 5, 120], require('../../../assets/icons/amendoin.png'), 12));
    ingredientes.push(new Ingrediente("Amido de milho", false, [120, 5, 2.5, 100], require('../../../assets/icons/amido_de_milho.png'), 12));
    ingredientes.push(new Ingrediente("Arroz arborio cru", false, [210, 10, 5, 150], require('../../../assets/icons/arroz_arboreo.png'), 12));
    ingredientes.push(new Ingrediente("Arroz cru", false, [175, 15, 5, 155], require('../../../assets/icons/arroz_cru.png'), 12));
    ingredientes.push(new Ingrediente("Aveia em flocos finos", false, [115, 5, 2.5, 85], require('../../../assets/icons/aveia_em_flocos.png'), 12));
    ingredientes.push(new Ingrediente("Café pronto", true, [240, 15, 5, 200], require('../../../assets/icons/chocolate_cacau_achocolatado.png'), 12));
    ingredientes.push(new Ingrediente("Cebola picadinha", false, [110, 10, 5, 90], require('../../../assets/icons/arroz_arboreo.png'), 12));
    ingredientes.push(new Ingrediente("Chocolate em pó / Cacau / Achocolatado", false, [100, 10, 5, 80], require('../../../assets/icons/chocolate_cacau_achocolatado.png'), 12));
    ingredientes.push(new Ingrediente("Creme de leite de caixinha", true, [240, 15, 5, 200], require('../../../assets/icons/creme_de_leite_caixinha.png'), 12));
    ingredientes.push(new Ingrediente("Creme de leite fresco", true, [240, 15, 5, 200], require('../../../assets/icons/creme_de_leite_fresco.png'), 12));
    ingredientes.push(new Ingrediente("Farinha de rosca", false, [100, 5, 2.5, 70], require('../../../assets/icons/farinha_de_rosca.png'), 12));
    ingredientes.push(new Ingrediente("Farinha de trigo", false, [140, 5, 2.5, 120], require('../../../assets/icons/farinha_de_trigo.png'), 12));
    ingredientes.push(new Ingrediente("Feijão cru", false, [200, 10, 5, 160], require('../../../assets/icons/arroz_cru.png'), 12));
    ingredientes.push(new Ingrediente("Grão de bico cozido", false, [170, 20, 10, 130], require('../../../assets/icons/grao_de_bico_cozido.png'), 12));
    ingredientes.push(new Ingrediente("Grão de bico cru", false, [195, 15, 5, 140], require('../../../assets/icons/grao_de_bico_cru.png'), 12));
    ingredientes.push(new Ingrediente("Leite", true, [240, 15, 5, 200], require('../../../assets/icons/leite.png'), 14));
    ingredientes.push(new Ingrediente("Leite condensado", true, [240, 15, 5, 200], require('../../../assets/icons/leite_condensado.png'), 12));
    ingredientes.push(new Ingrediente("Leite de coco", true, [240, 15, 10, 200], require('../../../assets/icons/leite_de_coco.png'), 12));
    ingredientes.push(new Ingrediente("Milho cru", false, [200, 20, 10, 165], require('../../../assets/icons/milho_cru.png'), 12));
    ingredientes.push(new Ingrediente("Passas", false, [140, 15, 5, 100], require('../../../assets/icons/passas.png'), 14));
    ingredientes.push(new Ingrediente("Polvilho doce e azedo", false, [155, 15, 2.5, 100], require('../../../assets/icons/polvilho_doce.png'), 12));
    ingredientes.push(new Ingrediente("Sal grosso", false, [300, 20, 5, 210], require('../../../assets/icons/sal_grosso.png'), 12));
    medidas = [];
    medidas.push(new Medida(PESO, "quilograma", "Kg", 1000, false, "quilogramas"));
    medidas.push(new Medida(PESO, "grama", "g", 1, false, "gramas"));
    medidas.push(new Medida(VOLUME, "xícara (chá)", "", 0, false, "xícaras (chá)"));
    medidas.push(new Medida(VOLUME, "colher (sopa)", "", 1, false, "colheres (sopa)"));
    medidas.push(new Medida(VOLUME, "colher (chá)", "", 2, false, "colheres (chá)"));
    medidas.push(new Medida(VOLUME, "copo (americano)", "", 3, false, "copos (americano)"));  
  }

  getIngredientes(){
    return ingredientes;
  }

  getMedidas(){
    return medidas;
  }

  getMedida(nome){
    return medidas.find((m) => m.nome == nome);
  }

  getIngrediente(nome){
    return ingredientes.find((m) => m.nome == nome);
  }

  criarOpcao(texto, valor) {
    var elementoOption = document.createElement("option");
    elementoOption.text = texto;
    elementoOption.value = valor;
    return elementoOption;
  }

  exibirIngredientes(elementoDestino) {
    var elementoSelect, indiceIngrediente;
    elementoSelect = document.createElement("select");
    elementoSelect.onchange = selecionarIngrediente;
    elementoSelect.options[0] = criarOpcao("Escolha o ingrediente", -1);
    elementoSelect.selectedIndex = 0;
    for (indiceIngrediente = 0; indiceIngrediente < ingredientes.length; indiceIngrediente++) {
      elementoSelect.options[indiceIngrediente + 1] = criarOpcao(ingredientes[indiceIngrediente].nome, indiceIngrediente);
    }
    var I = document.createElement('i');
    I.className += "icon-arrow-down icon-field";
    document.getElementById(elementoDestino).appendChild(elementoSelect);
    document.getElementById(elementoDestino).append(I);
    return elementoSelect;
  }

  exibirMedidas(idDestino) {
    var elementoSelect, indiceMedida;
    elementoSelect = document.createElement("select");
    elementoSelect.onchange = selecionarMedida;
    if (ingredienteSelecionado) {
      elementoSelect.options[0] = criarOpcao("- unidade -", -1);
      for (indiceMedida = 0; indiceMedida < medidas.length; indiceMedida++) {
        if (!medidas[indiceMedida].liquido || ingredienteSelecionado.liquido) {
          elementoSelect.options[indiceMedida + 1] = criarOpcao(medidas[indiceMedida].nome, indiceMedida);
        }
      }
    }
    elementoSelect.selectedIndex = 0;
    elementoDestino = document.getElementById(idDestino);
    while (elementoDestino.hasChildNodes()) {
      elementoDestino.removeChild(elementoDestino.firstChild);
    }
    var I = document.createElement('i');
    I.className += "icon-arrow-down icon-field";
    elementoDestino.appendChild(elementoSelect);
    elementoDestino.append(I);
    return elementoSelect;
  }

  setIngrediente(ingrediente) {
    ingredienteSelecionado = ingrediente;//selectIngredientes.options[selectIngredientes.selectedIndex].value;
    //selectMedidasEntrada = exibirMedidas("entradaMedidas");
    //selectMedidasSaida = exibirMedidas("saidaMedidas");
    //selecionarMedida();
  }

  setMedidaEntrada(medida) {
    medidaEntrada = medida;// selectMedidasEntrada.options[selectMedidasEntrada.selectedIndex].value;
    //medidaSaida = selectMedidasSaida.options[selectMedidasSaida.selectedIndex].value;
    //inputSaida.value = "";
  }
  setMedidaSaida(medida) {
    medidaSaida = medida;// selectMedidasEntrada.options[selectMedidasEntrada.selectedIndex].value;
    //medidaSaida = selectMedidasSaida.options[selectMedidasSaida.selectedIndex].value;
    //inputSaida.value = "";
  }

  setEntrada(entrada){
    inputEntrada = entrada;
  }

  validarEntrada() {
    var entradasValidas = "0123456789.,/";
    var textoOrigem, textoDestino;
    var indice, caractere;
    textoOrigem = inputEntrada;
    textoDestino = "";
    for (indice = 0; indice < textoOrigem.length; indice++) {
      caractere = textoOrigem.charAt(indice);
      if (entradasValidas.indexOf(caractere) == -1) {
        caractere = "";
      }
      textoDestino += caractere;
    }
    for (caractere = textoDestino.charAt(0); entradasValidas.indexOf(caractere) > 9; caractere = textoDestino.charAt(0)) {
      textoDestino = textoDestino.substr(1, textoDestino.length - 1);
    }
    for (caractere = textoDestino.charAt(textoDestino.length - 1); entradasValidas.indexOf(caractere) > 9; caractere = textoDestino.charAt(textoDestino.length - 1)) {
      textoDestino = textoDestino.substr(0, textoDestino.length - 1);
    }
    textoOrigem = textoDestino;
    textoDestino = "";
    for (indice = 0; indice < textoOrigem.length; indice++) {
      caractere = textoOrigem.charAt(indice);
      if (entradasValidas.indexOf(caractere) == -1) {
        caractere = "";
      }
      if (entradasValidas.indexOf(caractere) > 9) {
        entradasValidas = "0123456789";
      }
      textoDestino += caractere;
    }
    if (textoDestino.length > 0) {
      textoDestino = textoDestino.replace(".", ",")
    }
    inputEntrada = textoDestino;
  }

  calcularResultado() {
    var entrada = eval(inputEntrada.replace(",", "."));
    var saida = -1;
    if ((ingredienteSelecionado) && (isFinite(entrada))) {
      if ((medidaEntrada) && (medidaSaida) && (inputEntrada)) {
        if (medidaEntrada.tipo == PESO) {
          saida = entrada * medidaEntrada.conversao;
        } else {
          saida = entrada * ingredienteSelecionado.conversao[medidaEntrada.conversao];
        }
        if (medidaSaida.tipo == PESO) {
          saida = saida / medidaSaida.conversao;
        } else {
          saida = saida / ingredienteSelecionado.conversao[medidaSaida.conversao];
        }
      }
    }
    var result = null;
    if (saida > -1) {
      result = this.filtrarFracao(saida);
    } else {
      result = "";
    }
    return result;
  }

  filtrarFracao(numero) {
    var fracoes = ["0", "1/4", "1/3", "1/2", "2/3", "3/4", "1"];
    var valores = [0, 1 / 4, 1 / 3, 1 / 2, 2 / 3, 3 / 4, 1];
    var diferenca, indice;
    var menorDiferenca, menorIndice;
    var inteiro = Math.floor(numero);
    let fracao = numero - inteiro;
    menorDiferenca = 10;
    for (indice = 0; indice < fracoes.length; indice++) {
      diferenca = Math.abs(fracao - valores[indice]);
      if (diferenca < menorDiferenca) {
        menorDiferenca = diferenca;
        menorIndice = indice;
      }
    }
    if (valores[menorIndice] == 1) {
      inteiro++;
      menorIndice = 0;
    }
    if (inteiro > 0) {
      if (menorIndice > 0) {
        return parseInt(inteiro) + " e " + fracoes[menorIndice];
      } else {
        return parseInt(inteiro);
      }
    } else {
      if (menorIndice > 0) {
        return fracoes[menorIndice];
      } else {
        return 0;
      }
    }
  }

  //inputEntrada = document.getElementById("quantidade-entrada");
  //inputSaida = document.getElementById("quantidade-saida");
  //inputEntrada.value = "";
  //inputEntrada.onchange = validarEntrada;
  //selectIngredientes = exibirIngredientes("lista-ingredientes");
  //jQuery(selectIngredientes).addClass("categorias");
  //selecionarIngrediente();
  //var selectResult = document.getElementById("saidaMedidas").getElementsByTagName('select')[0];
  //$(document).on('change', '#saidaMedidas select', function() {
  //  calcularResultado();
  //});
}

class Ingrediente {
  constructor(nome, liquido, conversao, imagem, font)
  {
    this.nome = nome;
    this.liquido = liquido;
    this.conversao = conversao;
    this.imagem = imagem;
    this.fontSize = font;
  }
}

class Medida {

  constructor(tipo, nome, abreviacao, conversao, liquido, plural)
  {
    this.tipo = tipo;
    this.nome = nome;
    this.abreviacao = abreviacao;
    this.conversao = conversao;
    this.liquido = liquido;
    this.plural = plural;
  }
  
}

