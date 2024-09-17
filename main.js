const criarAluno = (nome, idade, matricula, curso) => ({ nome, idade, matricula, curso }); // tarefa 1

const turma = Object.freeze([]); // tarefa 2

const adicionarAluno = (turma, nome, idade, matricula, curso) =>  // tarefa 3
  [...turma, criarAluno(nome, idade, matricula, curso)];

const turma1 = adicionarAluno(turma, 'João', 20, 20240003, 'CC')
const turma2 = adicionarAluno(turma1, 'Fagundes', 21, 20240001, 'CC')
const turma3 = adicionarAluno(turma2, 'Ricardo', 20, 20240004, 'EC')
const turma4 = adicionarAluno(turma3, 'Felipe', 19, 20240002, 'EC')
const turma5 = adicionarAluno(turma4, 'Pedro', 17, 20240005, 'CC')
const turma6 = adicionarAluno(turma5, 'Maria', 17, 20240006, 'SI')

const listarAlunos = (lista) => lista.filter((elemento) => elemento) // tarefa 4

const buscarPorCurso = (curso) => (lista) => lista.filter((elemento) => elemento.curso === curso) // tarefa 5

const removerAluno = (aluno) => (lista) => lista.filter((elemento) => elemento.nome !== aluno) // tarefa 6

const ordernar = (lista) => [...lista].sort((a, b) => a.matricula - b.matricula) // tarefa 7

const contagemAlunoporCurso = (lista) => [
    { Ciência_da_Computação: `${lista.filter((elemento) => elemento.curso === 'CC').length} aluno(s)` },  // tarefa 8
    { Engenharia_da_Computação: `${lista.filter((elemento) => elemento.curso === 'EC').length} aluno(s)` },
    { Sistemas_de_Informação: `${lista.filter((elemento) => elemento.curso === 'SI').length} aluno(s)` }
];


const editarAluno = (matricula,turma) => (novosDados) => {
    return [...turma].map(aluno => 
        aluno.matricula === matricula ? { ...aluno, ...novosDados } : aluno              // tarefa 9
    )
}

const turma7 = editarAluno(20240001, turma6)({idade: 72}); // testando função editar aluno

console.log(turma7) // testando commit