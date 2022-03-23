class Noticia{
  constructor(titulo, data_de_publicacao, resumo, texto){
    this.titulo = titulo;
    this.data_de_publicacao = data_de_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + this.data_de_publicacao + "\n" + this.resumo + "\n" +  "\n" + this.texto 
  }
}
let noticia = new Noticia ("Preço da gasolina aumenta mais uma vez", "20/03/2022", "Neste domindo dia 20 de março o preço da gasolina vai para oito reais.", "O preço médio da gasolina aumentou 8,7%, após o reajuste realizado pela Petrobras no dia 20 de março. O levantamento foi divulgado pela Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP).")
console.log(noticia.mostrarNoticia())
