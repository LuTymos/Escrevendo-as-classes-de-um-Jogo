class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "um ataque comum";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const mago = new Heroi("Gandalf", 150, "mago");
const guerreiro = new Heroi("Arthur", 35, "guerreiro");
const monge = new Heroi("Aang", 112, "monge");
const ninja = new Heroi("Naruto", 17, "ninja");
const humano = new Heroi("Leonardo", 22, "humano");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
humano.atacar();
