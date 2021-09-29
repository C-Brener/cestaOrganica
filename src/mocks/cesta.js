import logo from '../../assets/logo.png'


const cesta = {
    topo:{
        titulo: "Detalhe da cesta",
    },
    detalhes:{
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha",
        preco: "R$40,00"
    }
} 

export default cesta;

// Mocks são informações/funções que criamos para substituir as originais evitando sujar a mesma 

//Sempre que usamos os mocks na hora de acessar eles dentro do componente passamos os nomes dos atributos e não o nome do objeto