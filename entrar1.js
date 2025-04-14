const usuariosCadastrados = [
    {
        email: "usuario@exemplo.com",
        senha: "Senha123@",
        nome: "Usuário Exemplo"
    },
    {
        email: "doador@enchant.com",
        senha: "Doacao@2024",
        nome: "Doador Enchant"
    },
    {
        email: "instituicao@enchant.com",
        senha: "Inst@2024",
        nome: "Instituição Parceira"
    }
];

// Função principal de validação
function validateLogin(event) {
    event.preventDefault();
    
    // Obter valores dos campos
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // 1. Validação básica de campos vazios
    if (!email || !password) {
        showError("Por favor, preencha todos os campos.");
        return false;
    }
    
    // 2. Validação do formato do email
    if (!validateEmail(email)) {
        showError("Formato de email inválido!");
        return false;
    }
    
    // 3. Validação da força da senha
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
        showError("Erros na senha:\n" + passwordErrors.join('\n'));
        return false;
    }
    
    // 4. Verificar se o usuário existe no sistema
    const usuario = checkUserCredentials(email, password);
    
    if (usuario) {
        // Login bem-sucedido
        showSuccess(`Bem-vindo(a) de volta, ${usuario.nome}! `);
        
        // Simular redirecionamento após 2 segundos
        setTimeout(() => {
            window.location.href = "inicio1.html"; // Página após login
        }, 2000);
    } else {
        // Credenciais não encontradas
        showError("Email ou senha incorretos.\n    Verifique seus dados ou cadastre-se.");
    }
    
    return false;
}

// Funções auxiliares

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    let errorMessage = [];
    
    if(password.length < 8) {
        errorMessage.push("Senha invalida");
    }
   
    
    return errorMessage;
}

function checkUserCredentials(email, password) {
    return usuariosCadastrados.find(user => 
        user.email === email && user.senha === password
    );
}

function showError(message) {
    // Remove mensagens anteriores
    const oldError = document.querySelector('.error-message');
    if (oldError) oldError.remove();
    
    // Remove mensagens de sucesso
    const oldSuccess = document.querySelector('.success-message');
    if (oldSuccess) oldSuccess.remove();
    
    // Cria nova mensagem de erro
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message alert alert-danger';
    errorElement.textContent = message;
    
    // Insere antes do formulário
    const form = document.querySelector('form');
    form.parentNode.insertBefore(errorElement, form);
}

function showSuccess(message) {
    // Remove mensagens anteriores
    const oldError = document.querySelector('.error-message');
    if (oldError) oldError.remove();
    
    const oldSuccess = document.querySelector('.success-message');
    if (oldSuccess) oldSuccess.remove();
    
    // Cria nova mensagem de sucesso
    const successElement = document.createElement('div');
    successElement.className = 'success-message alert alert-success';
    successElement.textContent = message;
    
    // Insere antes do formulário
    const form = document.querySelector('form');
    form.parentNode.insertBefore(successElement, form);
}

// Adicionar o event listener ao formulário
document.querySelector('form').addEventListener('submit', validateLogin);