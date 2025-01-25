## Cenários de testes

### **Cenário 1: Verificar se um usuário autenticado consegue fazer login com exito**

**Objetivo:** Garantir que um usuário com credenciais corretas consiga acessar sua conta.

- **Dado que** o usuário esteja na página de login do site "Automation Practice",
- **Quando** o usuário preencher o campo de e-mail com um endereço válido, o campo de senha com a senha correta e clicar no botão de login,
- **Então** ele deve ser redirecionado para a página "Minha Conta" e visualizar a mensagem "Welcome to your account".

---

### **Cenário 2: Verificar se a recuperação de senha funciona como esperado**

**Objetivo:** Verificar se a funcionalidade de recuperação de senha funciona corretamente.

- **Dado que** o usuário esteja na página de login do site "Automation Practice",
- **Quando** o usuário clicar no link "Forgot your password?" e inserir um e-mail válido no campo de recuperação de senha,
- **Então** o site deve exibir uma mensagem informando que o e-mail para redefinição de senha foi enviado com sucesso.

---

### **Cenário 3: Verificar comportamento do site ao tentar login com campo de e-mail vazio**

**Objetivo:** Validar a mensagem de erro ao tentar enviar o formulário de login sem preencher o campo de e-mail.

- **Dado que** o usuário esteja na página de login do site "Automation Practice",
- **Quando** o usuário deixar o campo de e-mail vazio, preencher o campo de senha e clicar no botão de login,
- **Então** o sistema deve exibir uma mensagem de erro informando "An email address required".