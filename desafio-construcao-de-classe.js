class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar () {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

const mago = new Heroi("Diana", 20, "mago")
mago.atacar();
const guerreiro = new Heroi("Diana", 20, "guerreiro")
guerreiro.atacar();
const monge = new Heroi("Diana", 20, "monge")
monge.atacar();
const ninja = new Heroi("Diana", 20, "ninja")
ninja.atacar();