import logo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png'
import batata from '../../assets/frutas/Batata.png'
import abobora from '../../assets/frutas/Abóbora.png'
import pepino from '../../assets/frutas/Pepino.png'


const cesta = {
    topo:{
        titulo: "Detalhe da cesta",
    },
    detalhes:{
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha",
        preco: "R$40,00",
        botao: "COMPRAR"
    },
    itens:{
        titulo:"Itens da cesta",
        lista: [
        {
            nome: "Tomate",
            imagem: tomate,
        },
        {
            nome: "Batata",
            imagem: batata,
        },
        {
            nome: "Abóbora",
            imagem: abobora,
        },
        {
            nome: "Pepino",
            imagem: pepino,
        }]

    }
} 

export default cesta;

// Mocks são informações/funções que criamos para substituir as originais evitando sujar a mesma 

//Sempre que usamos os mocks na hora de acessar eles dentro do componente passamos os nomes dos atributos e não o nome do objeto