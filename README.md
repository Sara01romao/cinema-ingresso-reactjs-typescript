<h2 align="center"> 💻 Sistema de Vendas de Ingresso de Cinema </h2> 

<p align="center">
  

  <img max-width="auto" height="auto"  src="https://github.com/user-attachments/assets/853e835c-cfc1-49bc-b0fc-a5128468dbf3">
  <img max-width="auto" height="auto"  src="https://github.com/user-attachments/assets/14362e58-ba72-4050-8bf5-7cb39f826777">
  <img max-width="auto" height="auto"  src="https://github.com/user-attachments/assets/0acaa67b-b91d-4e77-b952-77523495a0cf">


</p> 



## 💻  Sobre o Projeto

Este projeto é um sistema de venda de ingressos online, desenvolvido com React.js e TypeScript, utilizando estados para manipulação dinâmica de dados e tipagem forte para garantir a integridade do sistema. Principais funcionalidades:

- Escolher data, horário e tipo de ingresso, com atualização automática das informações.
- Gerenciar o status das poltronas (livres, ocupadas ou reservadas) utilizando estados reativos.
- Manter um carrinho de compras dinâmico, com opções de adicionar, remover e finalizar a compra.
- Implementar um sistema de pagamento com tempo limitado: poltronas reservadas são liberadas automaticamente se o pagamento não for concluído a tempo ou for cancelado.
  
  
<a href="https://sistema-ingresso-cinema.netlify.app/" target="_blank"><strong>Acessar »</strong></a>

<br>


## :rocket: Tecnologias Usadas


Front-end 
```
REACTJS
TYPESCRIPT
```









# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
