const criarAluno = (nome, idade, matricula, curso) => Object.freeze(({ nome, idade, matricula, curso })); // tarefa 1

const turma = Object.freeze([]); // tarefa 2

const adicionarAluno = (turma, nome, idade, matricula, curso) =>  // tarefa 3
  [...turma, criarAluno(nome, idade, matricula, curso)];

const turma1 = Object.freeze(adicionarAluno(turma, 'João', 20, 20240003, 'CC'))
const turma2 = Object.freeze(adicionarAluno(turma1, 'Fagundes', 21, 20240001, 'CC'))
const turma3 = Object.freeze(adicionarAluno(turma2, 'Ricardo', 20, 20240004, 'EC'))
const turma4 = Object.freeze(adicionarAluno(turma3, 'Felipe', 19, 20240002, 'EC'))
const turma5 = Object.freeze(adicionarAluno(turma4, 'Pedro', 17, 20240005, 'SI'))
const turma6 = Object.freeze(adicionarAluno(turma5, 'Maria', 17, 20240006, 'SI'))

const listarAlunos = (lista) => lista.filter((aluno) => aluno) // tarefa 4

const buscarPorCurso = (curso) => (lista) => lista.filter((aluno) => aluno.curso === curso) // tarefa 5

const removerAluno = (nome) => (lista) => lista.filter((aluno) => aluno.nome !== nome) // tarefa 6

const ordenar = (lista) => [...lista].sort((a, b) => a.matricula - b.matricula) // tarefa 7

const contagemAlunoPorCurso = (lista) => [
    { Ciência_da_Computação: `${lista.filter((aluno) => aluno.curso === 'CC').length} aluno(s)` },  // tarefa 8
    { Engenharia_da_Computação: `${lista.filter((aluno) => aluno.curso === 'EC').length} aluno(s)` },
    { Sistemas_de_Informação: `${lista.filter((aluno) => aluno.curso === 'SI').length} aluno(s)` }
];


const editarAluno = (matricula,turma) => (novosDados) => {
    return [...turma].map(aluno => 
        aluno.matricula === matricula ? { ...aluno, ...novosDados } : aluno              // tarefa 9
    )
}

const result = editarAluno(20240001,turma6)({nome:'Guilherme', idade: 17, matricula: 20240030, curso: 'SI'}) // teste função editarAluno