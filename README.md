# 🏎️ Minimal API (Desafio da DIO)

## 📖 Descrição

Esta API com tema de Fórmula 1 foi criada para aprender e praticar o desenvolvimento de APIs REST minimalistas, utilizando tecnologias modernas. Ela fornece informações sobre equipes e pilotos, ajudando a entender conceitos de TypeScript, estruturação de APIs e integração de dados na prática.

Durante o desenvolvimento dessa API, aprendi sobre as _minimal APIs_, que se trata de uma API desenvolvida de forma simples e rápida, focada nos resultados e não em sua configuração no início de sua criação. Além disso, aprendi o que são e como trabalhar com _boilerplates_ para agilizar o desenvolvimento. Por fim, decidi organizar o projeto em uma estrutura de camadas para praticar a organização de projeto (antigamente estava tudo em `server.ts` como mostrado na branch `minimal`). Mais um desafio concluído 🤓✨

## 📦 Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-f1-minimal-api.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-f1-minimal-api/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```base
code .
```

4. Instale as dependências:

```
npm install
```

5. Rode o projeto com o script (requer o NodeJS v20+ e NPM instalados):

```
npm run start:watch
```

## 📜 Scripts disponíveis

| Script        | Comando                                   | Descrição                                                               |
| ------------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| `dist`        | `tsup src`                                | Gera os arquivos compilados da aplicação a partir do diretório `src`.   |
| `start:dev`   | `tsx --env-file=.env src/server.ts`       | Inicia o servidor em modo de desenvolvimento com variáveis de ambiente. |
| `start:watch` | `tsx watch --env-file=.env src/server.ts` | Inicia o servidor em modo "watch" (reinicia ao salvar arquivos).        |
| `start:dist`  | `npm run dist && node dist/server.js`     | Compila o projeto e executa o build gerado na pasta `dist`.             |

## 📒 Documentação

> A versão mínima (sem organização e com poucas features implementadas) se encontra na branch `minimal`.

### 🗂️ Estrutura do projeto

```
📁 src/
  📁 controllers/ -> contém a lógica de cada rota.
  📁 data/ -> armazena os dados de times e corredores localmente.
  📁 models/ -> guarda os modelos dos dados (ex: DriverModel).
  📁 repositories/ -> encapsula a lógica para se comunicar com o banco.
  📁 routes/ -> define as rotas da API.
  📁 services/ -> engloba as regras de negócio e tratamento de erros.
  📁 utils/ -> inclui recursos utilitários para a aplicação.
  📄 app.ts -> inicializa base da aplicação.
  📄 server.ts -> cria o servidor.
```

### 🔀 Rotas

#### 📍 Rotas dos corredores

| Método | Endpoint           | Descrição                         |
| ------ | ------------------ | --------------------------------- |
| GET    | `/api/drivers`     | Lista todos os corredores         |
| GET    | `/api/drivers/:id` | Retorna um corredor pelo ID       |
| POST   | `/api/drivers`     | Cria um novo corredor             |
| PATCH  | `/api/drivers/:id` | Atualiza um corredor parcialmente |
| PUT    | `/api/drivers/:id` | Atualiza um corredor por completo |
| DELETE | `/api/drivers/:id` | Remove um corredor pelo ID        |

#### 📍 Rotas dos times

| Método | Endpoint         | Descrição                     |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/teams`     | Lista todos os times          |
| GET    | `/api/teams/:id` | Retorna um time pelo ID       |
| POST   | `/api/teams`     | Cria um novo time             |
| PATCH  | `/api/teams/:id` | Atualiza um time parcialmente |
| PUT    | `/api/teams/:id` | Atualiza um time por completo |
| DELETE | `/api/teams/:id` | Remove um time pelo ID        |

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=ts,js,nodejs,npm,vscode,postman)](https://skillicons.dev)

- Utiliza `Fastify` e `@fastify/cors` para criar o servidor.
- Desenvolvido com `TypeScript` para maior robustez e segurança.
- Build e execução com `TSUP` e `TSX`.
- Tipagens do Node.js com `@types/node`.
- Criado e editado com Visual Studio Code.
- API testada com Postman.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)
- [Boilerplace](https://github.com/felipeAguiarCode/node-blue-boilerplate)

## 🧑🏻‍💻 Autor

- LinkedIn: [@gabrielgmbarros](https://www.linkedin.com/in/gabrielgmbarros)
- GitHub: [@GracilianoOG](https://github.com/GracilianoOG)

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
