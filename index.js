import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js";

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const clienteLais = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteZeus = new Cliente ("Zeus", 41639739943, "100109");


const clienteEstaLogado = SistemaAutenticacao.login(clienteLais, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
console.log(clienteLais, clienteZeus)

const contaCorrenteZeus = new ContaCorrente(clienteZeus, 3995)

console.log(contaCorrenteZeus)