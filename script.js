// Condição composta para verificar o período do dia
let dia = false;
if (dia) {
    console.log('Está claro');
} else {
    console.log('Está de noite');
}

// Loop for() para exibir números pares
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Função para exibir mensagem no console
function exibirMensagem() {
    console.log('Bom Dia');
}
exibirMensagem();

// Função que recebe e exibe um nome
function exibirNome(nome) {
    console.log(nome);
}
exibirNome('Elisama');

// Função que recebe nome, idade e estilo musical
function exibirDetalhes(nome, idade, estilo) {
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Estilo Musical:', estilo);
}
exibirDetalhes('Elisama', 25, 'Gospel');

// Função que recebe filme e música
function exibirGosto(filme, musica) {
    console.log('Filme:', filme);
    console.log('Música:', musica);
}
exibirGosto('Oppenheimer', 'Diz - Gabriela Rocha');

// Função que retorna o triplo de um número
function triploDoNumero(numero) {
    return numero * 3;
}
console.log(triploDoNumero(5));

// Função para verificar se uma variável é true ou false
function verificarVariavel(valor) {
    if (valor === true || valor === false) {
        console.log('É true');
    } else {
        console.log('É false');
    }
}
verificarVariavel(true);

// Criação de um array e exibição no console
let nomes = ['Alice', 'Breno', 'Carlos', 'Marcos', 'Fabiana'];
console.log(nomes);

// Adicionar um nome no início do array
nomes.unshift('Davi');
console.log(nomes);

// Remover o último nome do array
nomes.pop();
console.log(nomes);

// Adicionar dois nomes ao fim do array
nomes.push('Paulo', 'João');
console.log(nomes);

// Remover o primeiro nome do array
nomes.shift();
console.log(nomes);

// Ordenar array em ordem crescente
let numeros = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numeros.sort();
console.log(numeros);

// Crie um objeto que receba ao menos 3 propriedades sobre você
let objeto = [
    "branca", "magra", "sorridente"
];
console.log(objeto);

// Adicione uma nova propriedade sem alterar o objeto inicial
objeto.push('tímida');
console.log(objeto);
// Remova a propriedade desse objeto
objeto.shift()
console.log(objeto)
// Mostre no console todas as propriedades desse objeto
console.log(objeto)
// Crie um array chamado "cadastro" contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: Nome, Idade, Telefone, Amigos. Na propriedade amigos adicione ao menos 4 amigos
let cadastro = [
    {
        nome: "Maria",
        idade: 20,
        telefone: 22987891,
        amigos: ['Andre', 'Marlon', 'Marcos', 'Lucas']
    },
    {
        nome: "João",
        idade: 25,
        telefone: 22322191,
        amigos: ['Matheus','William', 'Thiago', 'Bruno']
    },
    {
        nome: "Pedro",
        idade: 27,
        telefone: 26374927,
        amigos: ['Irene','Manoel', 'Lis', 'Fernanda']
    },
    {
        nome: "Clara",
        idade: 22,
        telefone: 37693626,
        amigos: ['Sofia','Antonio', 'Arthur', 'Ana']
    },
    {
        nome: "Vanda",
        idade: 19,
        telefone: 69832356,
        amigos: ['Ricardo','Marta', 'Murilo', 'Guilherme']
    } 
]
console.log(cadastro[0].amigos[0],cadastro[1].amigos[0],cadastro[2].amigos[0],cadastro[3].amigos[0],cadastro[4].amigos[0])