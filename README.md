# EcoRecycle - Aplicativo para Reciclagem em Condomínios

O EcoRecycle é um projeto MVP de um aplicativo mobile gamificado desenvolvido em React Native, com o objetivo de incentivar a reciclagem em condomínios. Os moradores podem pontuar no aplicativo ao cadastrar suas reciclagens, ganhando troféus e acompanhando seu progresso ambiental.

## Páginas do Aplicativo

### 1. Cadastro e Login
- **Cadastro:** Permite que o usuário realize seu cadastro, armazenando as informações diretamente no banco de dados.
- **Login:** Verifica a existência do usuário no sistema ao fazer login.

<div align="center">
<video src="https://github.com/luccasnoschang/EcoRecycle/assets/105743541/c773bf5f-ab84-41b9-a8a8-d8e28cfa7305" width="200px"/>
</div>

### 2. Home
- Após o login, o usuário é direcionado para a página Home.
- Exibe a quantidade de lixo reciclado até o momento para cada tipo de resíduo.
- Mostra a quantidade total de lixo reciclado.

<div align="center">
<video src="https://github.com/luccasnoschang/EcoRecycle/assets/105743541/d86bc8b8-5a4b-4c62-8f4e-0ac4945ea65b" width="200px"/>
</div>

### 3. Cadastro de Reciclagem
- Permite que o usuário cadastre diferentes tipos de lixo e suas respectivas quantidades.
- Ao realizar o cadastro, o usuário recebe pontuações e troféus, que são exibidos em seu perfil.

<div align="center">
<img src="https://github.com/luccasnoschang/EcoRecycle/assets/105743541/723f06f3-d87d-4e00-b183-cc7b8edae2a1" width="200px"/>
<img src="https://github.com/luccasnoschang/EcoRecycle/assets/105743541/824e47e3-214c-419b-8b5c-4da676695d09" width="200px"/>
</div>

### 4. Perfil
- Exibe informações do usuário, como e-mail, unidade do condomínio, nome e estatísticas de reciclagem.
- Mostra a quantidade total de lixo reciclado, o número de troféus conquistados e o nível da conta (bronze, prata ou ouro).
- Permite a alteração da foto do perfil.

<div align="center">
<video src="https://github.com/luccasnoschang/EcoRecycle/assets/105743541/c6e470d8-a5be-48a9-b24a-33f4137d26a7" width="200px"/>
</div>

---

## Instruções de Instalação e Execução

Utilizamos Expo para a criação do aplicativo. Caso você queira rodar no seu celular, instale o aplicativo "Expo Go".

1. Clone o repositório: `git clone https://github.com/luccasnoschang/EcoRecycle.git`
3. Instale as dependências: `npm install`
4. Execute o aplicativo: `npx expo start`
<br>

- Para rodar na web, pressione `W`
- Para rodar no seu celular, leia o QR Code
- Se não estiver ambos os dispositivos não estiverem conectado na mesma internet, é necessario utilizar `--tunnel` após o comando **4**

<br>

*No momento, a parte BackEnd da aplicação, ainda não foi lançada. Caso queira roda-lo na sua própria máquina, siga as seguintes instruções*

<br>

1. Clone o repositório BackEnd: `https://github.com/luccasnoschang/EcoRecycle_Back-End.git`
2. Instale as dependências: `npm install`
3. Execute o aplicativo: `nodemon index.js`

<br>

*Também é necessário introduzir um simples banco de dados na sua máquina!*

`...
...
...
...`
   
**Contribuições são bem-vindas!**

Esperamos que o EcoRecycle seja uma ferramenta eficaz para incentivar práticas sustentáveis em condomínios. Agradecemos pela sua contribuição!

---

### Entre em contato!
- [Linkedin](https://www.linkedin.com/in/luccas-noschang-95173220b/)
