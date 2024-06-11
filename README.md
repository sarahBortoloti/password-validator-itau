# PasswordValidatorItau

Esta aplicação frontend foi desenvolvida com Angular e consiste na visualização de cadastro de usuários com validação de senha. O objetivo é garantir que as senhas dos usuários atendam a critérios específicos de segurança antes de serem aceitas. A aplicação utiliza json-server para simular um backend que armazena os dados dos usuários.

## Validação de senha

A senha fornecida pelo usuário deve atender aos seguintes usuários

- ✅ Mínimo de 9 caracteres
- ✅ Pelo menos 1 dígito
- ✅ Pelo menos 1 letra minúscula
- ✅ Pelo menos 1 letra maiúscula
- ✅ Pelo menos 1 caractere especial (os caracteres especiais permitidos são: !@#$%^&\*()-+)
- ✅ Não deve conter caracteres repetidos

## Funcionalidades

- 📋 Formulário de cadastro de usuário com campos para nome de usuário, email e senha.
- 🛡️ Validação da senha em tempo real enquanto o usuário digita.
- 💾 Envio dos dados de cadastro para o json-server após validação bem-sucedida.

## Pré requisitos

- 🟢 Node.js (versão 18 ou superior)
- 🟢 npm (versão 8 ou superior)
- 🟢 Angular CLI (versão 11 ou superior)

## Instalação

1. Clone o repositório
   `git clone https://github.com/sarahBortoloti/password-validator-itau.git `
   `cd password-validator-itau`

2. Instale as depêndencias
   `npm install`

## Execução da aplicação

1. Execute o frontend utilizando o `ng serve`

2. Execute o fake-backend executando o `npm run start:json-server`

3. Para acessar a aplicação utilize o endereço http://localhost:4200
