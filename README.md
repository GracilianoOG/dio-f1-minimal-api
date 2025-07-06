# 🏎️ Minimal API (Desafio da DIO)

## 📖 Descrição

Esta API com tema de Fórmula 1 foi criada para aprender e praticar o desenvolvimento de APIs REST minimalistas, utilizando tecnologias modernas. Ela fornece informações sobre equipes e pilotos, ajudando a entender conceitos de TypeScript, estruturação de APIs e integração de dados na prática.

## 🗂️ Instalação local

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

6. Scripts disponíveis:

```js
"scripts": {
  "dist": "tsup src",
  "start:dev": "tsx --env-file=.env src/server.ts",
  "start:watch": "tsx watch --env-file=.env  src/server.ts",
  "start:dist": "npm run dist && node dist/src/index.js"
},
```

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=ts,js,nodejs,npm,vscode,postman)](https://skillicons.dev)

- Utiliza `Fastify` e `@fastify/cors` para criar o servidor..
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
