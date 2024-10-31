# Tarefa-Constru-o-de-APIs

### Olá bem-vindo ao meu projeto, Meu nome é Vinícius Nascimeto e daqui orientarei á você como instalar meu projeto de forma que funcione corretamente apenas seguindo passos a passos simples e rápidos.

#### Minha proposta nesse projeto seria um sistema simples de manipulação de dados de usuário de empresa que podem ser facilmente acessados e manipulado sem a utilização de banco de dados. Podendo assim permanecer contendo a persistência aos dados dos usuários cadastrados através do arquivo .txt(employees.txt) e mesmo assim mantendo um processo correto aonde permite aos usuário do sistema poder consultar, cadastrar, atualizar e deletar usuáros de forma simples e dinâmica.

***

## Índice
- Instalação
- Instruções
- Observações
***
## Instalação

- Primeiramente começaremos clonando o projeto com o seguinte comando:
```
 git clone https://github.com/ViniciusNascimento2001/Tarefa-Constru-o-de-APIs.git
```
- Agora iremos para a pasta do projeto:
```
cd nome-do-repositorio
```
- Instale os módulos necessários:
```
npm install express express-validator filesystem
```
- Para iniciar o projeto use esse comando:
```
node index.js
```
- Para caso use o projeto para fins de desenvolvimento use esse comando:
```
npm install nodemon
```
- Então use esse comando:
```
npm run nodemon
```
- OBS: Com esse comando o projeto se iniciará e continuará rodando no servidor mesmo com alterações nos arquivos pois esse módulo rodará o projeto com as alterações assim que forem salvas.

***

## Instruções

- Primeiramento começaremos com a busca de dados, para isso utilizaremos a ferramentas ``Postman``: (https://www.postman.com/) que tem várias funções e muitas delas seria a criação de requisições.

- Para todas as requisições a url terá que ter 'http://localhost:3300' ou pode usar o ip direto que seria 'http://127.0.0.1:3300' todas utilizando a porta 3300, todas as requisições terão '/employees' para diferentes usos.

#### Consultar

- Para realizar consulta de todos os dados cadastrados deverá usar a seguite url "http://127.0.0.1:3300/employees/" em metódo GETe retornará uma lista de objetos dos usuários cadastrados.

- Para caso queira consulta um usuário específico deverá usar o id no final "http://127.0.0.1:3300/employees/id" em método GET e retornará o objeto do usuário consultado.
  
- O formato de retorno dos dados das requisções em GET será:

```
{
    Id: value,
    Nome: value,
    Idade: value,
    Cidade: value,
    Cargo: value,
    CPF: value,
    Endereco: value,
    Codigo_Funcionario: value,
    Status: value
}

```
#### Cadastrar

- Para cadastrar um novo usuário usaremos a seguinte url "http://127.0.0.1:3300/employees/" em método POST e o retorno será o mesmo mais com o atributo Id com id do usuário novo com os dados enviados em formato JSON.
  
- OBS: A inserção de dados deverá ser feito na aba body da ferramenta postman no formato json e então insirir o mesmo formato de retorno dos dados mas sem o atributo Id.

```
{    
    Nome: value,
    Idade: value,
    Cidade: value,
    Cargo: value,
    CPF: value,
    Endereco: value,
    Codigo_Funcionario: value,
    Status: value
}

```
#### Atualizar

- Para atualizar um usuário usaremos a url "http://127.0.0.1:3300/employees/id" com id do usuário que queremos atualizar em método PUT e retornará o objeto do usuário atualizado ou uma mensagem de erro pois terá validação sobre os objetos inseridos no qual não será aceito vazio ou em formato errado.

- O formato dos dados para envio deverão ser no formato de salvar usuário e sem a necessidade de Id pois já estará na url.

#### Deletar

- Para deletar simplesmente terá que usar a url "http://127.0.0.1:3300/employees/id" no método DELETE e  o retorno será uma mensagem de sucesso ou uma mensagem descrevendo o erro ocorrido.

***

## Observações

- Todo o processo de manipulação e persistência de dados será feito sem uso de banco de dados apenas com arquivos .txt aonde será armazenado e manipulado conforme o uso da API.

- O módulo Express foi utilizado para a criação do servidor e das rotas do API e suas respostas nas requisições.

- A validação de campos de dados dos usuário cadastrados e atualizado foi feito com o módulo Express-validator para uma padronização na manipulação de usuários do projeto.

- Para a realização do processo de persistência de dados com arquivos .txt foi utilizado o módulo filesystem aonde foi responsável final após as manipulações de dados de salvar os mesmos no arquivo .txt employees.txt aonde será o único arquivo utilizado no processo inteiro.

- Caso deseja realizar alterações no código foi instalado o módulo nodemon focado nesse propósito para que possa salvar as alterações sem precisar parar o servidor e podendo testar a alteração no mesmo instante. Esse módulo poderá ser executado através do comando "npm run nodemon" criado no script do arquivo package.json.


