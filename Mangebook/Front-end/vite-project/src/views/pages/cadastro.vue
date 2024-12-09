<template>
  <div class="background">
    <!-- Navbar -->
    <header>
      <nav class="navbar">
        <div class="search-container">
          <input type="text" placeholder="Pesquisar Mangebook.com.br" />
          <button class="search-btn">Pesquisar</button>
        </div>
        <div class="user-area">
          <p>Olá, seja bem-vindo!</p>
          <router-link to="/login">
            <button class="login-btn">Entrar</button>
          </router-link>
        </div>
      </nav>
    </header>

    <!-- Formulário de Cadastro -->
    <section class="cadastro-section">
      <div class="cadastro-container">
        <h2>Cadastro de Usuário</h2>
        <form @submit.prevent="realizarCadastro">
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input type="text" id="nome" v-model="form.nome" placeholder="Digite seu nome completo" required />
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="form.email" placeholder="Digite seu e-mail" required />
          </div>
          <div class="form-group">
            <label for="senha">Senha</label>
            <input type="password" id="senha" v-model="form.senha" placeholder="Digite sua senha" required />
          </div>
          <div class="form-group">
            <label for="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" v-model="form.confirmarSenha" placeholder="Confirme sua senha" required />
          </div>
          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" v-model="form.telefone" placeholder="Digite seu telefone" />
          </div>
          <div class="form-group">
            <label for="endereco">Endereço</label>
            <textarea id="endereco" v-model="form.endereco" placeholder="Digite seu endereço" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="nascimento">Data de Nascimento</label>
            <input type="date" id="nascimento" v-model="form.nascimento" />
          </div>
          <button type="submit" class="submit-btn">Cadastrar</button>
        </form>
      </div>
    </section>

    <!-- Rodapé -->
    <footer>
      <div class="footer-content">
        <div class="social-media">
          <a href="https://www.instagram.com" target="_blank">
            <img src="Instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img src="Facebook.png" alt="Facebook" />
          </a>
        </div>
        <div class="footer-logo">
          <img src="logofooter.PNG" alt="Logo Mangebook" />
          <p>Mangebook - Livraria Digital</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        telefone: "",
        endereco: "",
        nascimento: "",
      },
    };
  },
  methods: {
    realizarCadastro() {
      if (this.form.senha !== this.form.confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
      }
      console.log("Dados cadastrados:", this.form);
      alert("Cadastro realizado com sucesso!");
    },
  },
};
</script>

<style scoped>
/* Plano de fundo */
.background {
  background-image: url('livraria1.PNG'); /* Substitua pelo caminho correto se necessário */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.9);
  padding: 10px 20px;
  color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

/* Pesquisa */
.search-container {
  display: flex;
  align-items: center;
}

.search-container input {
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px 0 0 5px;
}

.search-container .search-btn {
  padding: 6px 10px;
  background-color: #c1121f;
  border: none;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

/* Área do Usuário */
.user-area {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Formulário */
.cadastro-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  margin: 50px auto;
  width: 90%;
  max-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
/* Botões na navbar */
.navbar .login-btn {
  padding: 6px 10px;
  background-color: #c1121f;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.navbar .login-btn:hover {
  background-color: #a60e19;
}

.cadastro-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

/* Botão */
.submit-btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #c1121f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}

.submit-btn:hover {
  background-color: #a60e19;
}

/* Rodapé */
.footer-content {
  background-color: rgba(51, 51, 51, 0.9);
  color: white;
  text-align: center;
  padding: 10px;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; /* Aumenta o espaço entre as imagens */
}

.social-media img {
  width: 70px;
  height: 70px;
}

.footer-logo {
  margin-top: 5px;
}

.footer-logo img {
  max-height: 30px;
}
</style>
