// Lógica de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    // Verificação simples de credenciais (exemplo)
    if (username === 'admin' && password === 'admin') {
      // Armazena a sessão no LocalStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
  
      // Redireciona para a página index.html
      window.location.href = 'index.html';
    } else {
      // Mensagem de erro
      message.textContent = 'Usuário ou senha incorretos';
      message.style.color = 'red';
    }
  });
  
  // Lógica para verificar se o usuário está logado ao acessar index.html
  window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname.includes('index.html')) {
      // Redireciona de volta para a página de login se o usuário não estiver logado
      window.location.href = 'login.html';
    }
  };
  
  // Lógica para logout
  document.getElementById('logout')?.addEventListener('click', function() {
    // Remove os dados do LocalStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  
    // Redireciona para a página de login
    window.location.href = 'login.html';
  });