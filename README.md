# Repositório criado para o curso da Udemy de Ionic

## O Que foi Utilizado
-   Ionic 5
-   React
-   Apollo Hooks
-   Graphql
-   TypeScript

## Como Rodar

- Requisitos: 
    node npm/yarn   https://nodejs.org/en/ // https://classic.yarnpkg.com/en/docs/
  
- Instalar a cli do ionic
    ```bash
        npm install -g @ionic/cli ou yarn global add ionic
    ```

- Baixar as dependencias
  ```bash
      npm install ou yarn add
  ```
  
- Iniciar aplicação
  ```bash
      ionic serve
  ```
- Iniciar ionic lab
  ```bash
      ionic serve -l
  ```

## Outros scripts 
  
- Ativar watch do graphql codegen, recomendado deixar rodando em outro terminal

    ```bash
      npm run codegen:watch
    ```
    Com isso todas as alterações realizadas no arquivo launches.ts serão ouvidas, e atualizaram o graphql.tsx
    
- Caso não queira deixar o processo aberto, quando alterar o arquivo launches.ts inserindo uma nova ação, ou modificar as querys que já existem rodar o seguinte comando para atualizar o graphql

  ```bash
      npm run codegen
      ```
    
    
  

## Imagens no desktop, com a adição de dark theme que não foi passado no curso

| LigthMode     | DarkMode      |
|------------|-------------|
<img src="https://i.imgur.com/zFcgN7S.png" width="800"> | <img src="https://i.imgur.com/evBCTfk.png" width="800"> |
<img src="https://i.imgur.com/EgtIYX1.png" width="800"> | <img src="https://i.imgur.com/E9N3NxV.png" width="800"> |
<img src="https://i.imgur.com/2EXd9lI.png" width="800"> | <img src="https://i.imgur.com/vCWui1d.png" width="800"> |
<img src="https://i.imgur.com/jmJwfvp.png" width="800"> | <img src="https://i.imgur.com/Y2GkACH.png" width="800"> |
