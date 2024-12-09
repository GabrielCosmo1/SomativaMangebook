<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="form">
      <p class="form-title">Faça login na sua conta</p>
      <div class="input-container">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Coloque o email" 
          required 
        />
      </div>
      <div class="input-container">
        <input 
          type="password" 
          v-model="password" 
          placeholder="Coloque a senha" 
          required 
        />
      </div>
      <button type="submit" class="submit">Entrar</button>
      <p class="signup-link">
        Sem uma conta? 
        <router-link to="/cadastro">Inscreva-se</router-link>
        <br>
        <img src="Front-end/vite-project/src/assets/logo.png" alt="Logo da Empresa" class="logo" />
      </p>
      <p class="forgot-password">
        <router-link to="/esqueceuasenha">Esqueceu sua senha?</router-link>
      </p>
      <p class="voltar">
        <router-link to="/">Voltar</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // Lógica de autenticação ou envio de dados
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>
/* Centralização e plano de fundo da página */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('livraria2.PNG'); /* Substitua pelo caminho da sua imagem */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* Estilos do formulário */
.form {
  background-color: rgba(255, 255, 255, 0.85); /* Fundo branco semi-transparente para destacar o formulário */
  padding: 4rem;
  max-width: 450px;
  border-radius: 1rem; /* Bordas arredondadas mais acentuadas */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #000;
  margin-bottom: 1.5rem;
}

.input-container {
  position: relative;
  margin-bottom: 1rem;
}

.input-container input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem; /* Bordas arredondadas */
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
}

.input-container input:focus {
  border-color: #4F46E5;
  outline: none;
}

.submit {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #e54646;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 1rem; /* Bordas arredondadas */
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit:hover {
  background-color: #e54646;
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
}

.signup-link a {
  text-decoration: underline;
  color: #4F46E5;
}

.forgot-password a,
.voltar a {
  color: #4F46E5;
  font-size: 0.875rem;
  text-decoration: underline;
  text-align: center;
  display: block;
  margin-top: 0.5rem;
}

/* Logo estilizada */
.logo {
  margin-top: 1rem;
  display: block;
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
}
</style>
